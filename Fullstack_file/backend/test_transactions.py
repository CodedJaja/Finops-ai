from supabase_client import supabase
import uuid

def main():
    print("=== Supabase Transactions Test ===")

    # Pick an existing user_id from your users table
    # Replace this with an actual UUID from your Supabase users table
    user_id = "PUT-AN-EXISTING-USER-ID-HERE"

    # Insert a new transaction
    print("\nInserting transaction...")
    new_txn = {
        "user_id": user_id,
        "amount": 150.75,
        "category": "Groceries",
        "description": "Weekly supermarket shopping"
    }
    inserted = supabase.table("transactions").insert(new_txn).execute()
    print("Inserted:", inserted.data)

    # Fetch all transactions for this user
    print("\nFetching transactions for user:", user_id)
    fetched = supabase.table("transactions").select("*").eq("user_id", user_id).execute()
    print("Fetched:", fetched.data)

if __name__ == "__main__":
    main()
