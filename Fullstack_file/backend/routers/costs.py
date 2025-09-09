from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from ..db import get_db
from ..models import Cost  # Make sure you have a Cost model in models.py
from ..schemas import CostCreate, CostRead  # Pydantic schemas

router = APIRouter(
    prefix="/costs",
    tags=["Costs"]
)

# Get all costs
@router.get("/", response_model=list[CostRead])
def get_costs(db: Session = Depends(get_db)):
    costs = db.query(Cost).all()
    return costs

# Get a single cost by ID
@router.get("/{cost_id}", response_model=CostRead)
def get_cost(cost_id: int, db: Session = Depends(get_db)):
    cost = db.query(Cost).filter(Cost.id == cost_id).first()
    if not cost:
        raise HTTPException(status_code=404, detail="Cost not found")
    return cost

# Create a new cost
@router.post("/", response_model=CostRead)
def create_cost(cost: CostCreate, db: Session = Depends(get_db)):
    new_cost = Cost(**cost.dict())
    db.add(new_cost)
    db.commit()
    db.refresh(new_cost)
    return new_cost

# Delete a cost
@router.delete("/{cost_id}")
def delete_cost(cost_id: int, db: Session = Depends(get_db)):
    cost = db.query(Cost).filter(Cost.id == cost_id).first()
    if not cost:
        raise HTTPException(status_code=404, detail="Cost not found")
    db.delete(cost)
    db.commit()
    return {"detail": "Cost deleted"}
