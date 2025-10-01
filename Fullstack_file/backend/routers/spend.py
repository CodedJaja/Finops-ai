from fastapi import APIRouter, HTTPException
from cache import cache

router = APIRouter(prefix="/api/spend", tags=["spend"])


@router.get("/{provider}")
async def get_spend(provider: str):
    """Return cached spend data for a provider (e.g. aws)."""
    data = cache.get(provider)
    if not data:
        raise HTTPException(status_code=404, detail="Data not ready yet, try again shortly.")
    return data
