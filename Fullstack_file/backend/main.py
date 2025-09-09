from fastapi import FastAPI
from .db import Base, engine
from .routers import costs

# Create all tables in the database
Base.metadata.create_all(bind=engine)

app = FastAPI(title="FinOps API")

# Include the costs router
app.include_router(costs.router, prefix="/costs", tags=["Costs"])

@app.get("/")
def root():
    return {"message": "Welcome to the FinOps API"}
