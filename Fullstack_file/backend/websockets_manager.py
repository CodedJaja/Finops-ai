# backend/websocket_manager.py
from typing import Dict, List, Any
from fastapi import WebSocket
import json
import asyncio

class WebSocketManager:
    def __init__(self):
        # mapping of path -> list of websockets
        self.active: Dict[str, List[WebSocket]] = {}

    async def connect(self, path: str, websocket: WebSocket):
        await websocket.accept()
        self.active.setdefault(path, []).append(websocket)

    def disconnect(self, path: str, websocket: WebSocket):
        if path in self.active and websocket in self.active[path]:
            self.active[path].remove(websocket)

    async def send_personal(self, websocket: WebSocket, data: Any):
        await websocket.send_text(json.dumps(data))

    async def broadcast(self, path: str, data: Any):
        if path not in self.active:
            return
        dead = []
        for ws in list(self.active[path]):
            try:
                await ws.send_text(json.dumps(data))
            except Exception:
                dead.append(ws)
        for d in dead:
            self.disconnect(path, d)

manager = WebSocketManager()
