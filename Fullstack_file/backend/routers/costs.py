from fastapi import APIRouter, HTTPException
from supabase_client import supabase

router = APIRouter()

@router.get("/")
def get_all_costs():
    response = supabase.table("costs").select("*").execute()
    return response.data

@router.post("/")
def add_cost(user_id: str, description: str, amount: float):
    if amount < 0:
        raise HTTPException(status_code=400, detail="Amount must be positive")
    response = supabase.table("costs").insert({
        "user_id": user_id,
        "description": description,
        "amount": amount
    }).execute()
    return response.data
