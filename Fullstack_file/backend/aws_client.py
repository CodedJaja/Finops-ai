# backend/aws_client.py
import boto3
from datetime import datetime, timedelta
from typing import List, Dict, Any
import os
import asyncio
from concurrent.futures import ThreadPoolExecutor

AWS_REGION = os.getenv("AWS_REGION", "us-east-1")

# Use a thread pool to run boto3 calls without blocking the event loop
_executor = ThreadPoolExecutor(max_workers=3)

def _get_ce_client():
    return boto3.client("ce", region_name=AWS_REGION)

def _get_cost_and_usage_sync(start: str, end: str, granularity: str = "DAILY"):
    client = _get_ce_client()
    return client.get_cost_and_usage(
        TimePeriod={"Start": start, "End": end},
        Granularity=granularity,
        Metrics=["UnblendedCost"],
    )

async def get_cost_and_usage(start_date: datetime, end_date: datetime, granularity: str = "DAILY"):
    """Async wrapper calling the boto3 Cost Explorer GetCostAndUsage."""
    start = start_date.strftime("%Y-%m-%d")
    end = end_date.strftime("%Y-%m-%d")
    loop = asyncio.get_running_loop()
    resp = await loop.run_in_executor(_executor, _get_cost_and_usage_sync, start, end, granularity)
    # normalize
    results = []
    for item in resp.get("ResultsByTime", []):
        date = item["TimePeriod"]["Start"]
        amount = float(item["Total"]["UnblendedCost"]["Amount"])
        results.append({"date": date, "amount": amount})
    return results
