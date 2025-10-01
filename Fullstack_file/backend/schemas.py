from pydantic import BaseModel
from datetime import datetime

class CostBase(BaseModel):
    name: str
    amount: float
    category: str | None = None

class CostCreate(CostBase):
    pass

class CostRead(CostBase):
    id: int
    created_at: datetime

    class Config:
        orm_mode = True
