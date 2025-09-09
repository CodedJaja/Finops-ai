# backend/cache.py
from typing import Any, Dict
import threading
import time

class SimpleCache:
    def __init__(self):
        self._lock = threading.Lock()
        self._store: Dict[str, Any] = {}
        self._updated_at: Dict[str, float] = {}

    def set(self, key: str, value: Any):
        with self._lock:
            self._store[key] = value
            self._updated_at[key] = time.time()

    def get(self, key: str):
        with self._lock:
            return self._store.get(key)

    def updated_at(self, key: str):
        with self._lock:
            ts = self._updated_at.get(key)
            return ts

cache = SimpleCache()
