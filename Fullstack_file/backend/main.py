from fastapi import FastAPI
from routers import transactions  # import your new router
from supabase_client import supabase  # just to ensure it's initialized

app = FastAPI(
    title="FinOps AI Backend",
    description="Backend API powered by FastAPI + Supabase",
    version="1.0.0"
)


# Health check
@app.get("/")
def root():
    return {"message": "Backend running with Supabase!"}


# Register routers
app.include_router(transactions.router, tags=["Transactions"])
