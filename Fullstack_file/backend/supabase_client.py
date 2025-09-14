# supabase_client.py
import os
from supabase import create_client, Client
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("Supabase URL and Key must be set in the .env file")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# CRUD operations
def create_user(email: str, full_name: str):
    response = supabase.table("users").insert({"email": email, "full_name": full_name}).execute()
    return response.data

def get_user_by_email(email: str):
    response = supabase.table("users").select("*").eq("email", email).execute()
    return response.data

def list_users():
    response = supabase.table("users").select("*").execute()
    return response.data

def update_user(user_id: str, full_name: str):
    response = supabase.table("users").update({"full_name": full_name}).eq("id", user_id).execute()
    return response.data

def delete_user(user_id: str):
    response = supabase.table("users").delete().eq("id", user_id).execute()
    return response.data
