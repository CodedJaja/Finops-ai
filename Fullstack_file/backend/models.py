from pydantic import BaseModel
from typing import Optional

class Cost(BaseModel):
    id: Optional[int] = None
    name: str
    amount: float
    category: Optional[str] = None

class User(BaseModel):
    id: Optional[int] = None
    email: str
    full_name: Optional[str] = None
