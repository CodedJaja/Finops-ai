from fastapi import APIRouter, HTTPException
from supabase_client import get_user_by_email, create_user

router = APIRouter()

@router.get("/{email}")
def read_user(email: str):
    user = get_user_by_email(email)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.post("/")
def add_user(email: str, name: str):
    existing_user = get_user_by_email(email)
    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")
    new_user = create_user(email, name)
    return new_user
