# backend/tasks.py
import asyncio
import os
from datetime import datetime, timedelta
from .aws_client import get_cost_and_usage
from .cache import cache
from .websocket_manager import manager

POLL_INTERVAL = int(os.getenv("POLL_INTERVAL", "60"))

async def poll_aws_costs_loop():
    """Continuously poll AWS Cost Explorer and update cache & notify websockets."""
    while True:
        try:
            now = datetime.utcnow().date()
            start = now - timedelta(days=7)  # last 7 days
            end = now + timedelta(days=1)    # CE expects exclusive end sometimes; safe to include tomorrow
            # get data
            results = await get_cost_and_usage(start, end, granularity="DAILY")
            payload = {
                "provider": "aws",
                "updated_at": datetime.utcnow().timestamp(),
                "results": results,
            }
            cache.set("aws_spend", payload)
            # notify websockets
            await manager.broadcast("/ws/spend/aws", payload)
        except Exception as e:
            # log in real app
            print(f"[poll_aws_costs_loop] error: {e}")
        await asyncio.sleep(POLL_INTERVAL)
