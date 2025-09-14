from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from supabase_client import supabase

router = APIRouter()


# === Schemas ===
class TransactionCreate(BaseModel):
    user_id: str
    amount: float
    category: str
    description: str


class TransactionUpdate(BaseModel):
    amount: float | None = None
    category: str | None = None
    description: str | None = None


# === Endpoints ===
@router.post("/transactions")
def create_transaction(transaction: TransactionCreate):
    """Create a new transaction"""
    try:
        response = (
            supabase.table("transactions")
            .insert({
                "user_id": transaction.user_id,
                "amount": transaction.amount,
                "category": transaction.category,
                "description": transaction.description,
            })
            .execute()
        )
        return {"success": True, "data": response.data}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/transactions/{user_id}")
def get_transactions(user_id: str):
    """Fetch all transactions for a user"""
    try:
        response = (
            supabase.table("transactions")
            .select("*")
            .eq("user_id", user_id)
            .execute()
        )
        return {"success": True, "data": response.data}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.put("/transactions/{transaction_id}")
def update_transaction(transaction_id: str, transaction: TransactionUpdate):
    """Update a transaction (partial update allowed)"""
    try:
        update_data = {k: v for k, v in transaction.dict().items() if v is not None}
        if not update_data:
            raise HTTPException(status_code=400, detail="No fields to update")

        response = (
            supabase.table("transactions")
            .update(update_data)
            .eq("id", transaction_id)
            .execute()
        )
        return {"success": True, "data": response.data}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.delete("/transactions/{transaction_id}")
def delete_transaction(transaction_id: str):
    """Delete a transaction"""
    try:
        response = (
            supabase.table("transactions")
            .delete()
            .eq("id", transaction_id)
            .execute()
        )
        return {"success": True, "data": response.data}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
