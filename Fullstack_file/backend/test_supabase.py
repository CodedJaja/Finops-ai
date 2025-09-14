from supabase_client import get_user_by_email, create_user

def main():
    print("=== Supabase Test ===")

    email = "testuser@example.com"
    full_name = "Test User"

    print(f"Inserting user: {email}, {full_name}")
    inserted_user = create_user(email, full_name)
    print("Inserted:", inserted_user)

    print(f"Fetching user by email: {email}")
    fetched_user = get_user_by_email(email)
    print("Fetched:", fetched_user)

if __name__ == "__main__":
    main()
