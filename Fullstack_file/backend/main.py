from fastapi import FastAPI
from routers import users, costs

app = FastAPI(title="FinOps API")

# Include routers
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(costs.router, prefix="/costs", tags=["Costs"])

@app.get("/")
def root():
    return {"message": "FinOps API is running!"}
