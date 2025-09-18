from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from supabase_client import supabase

app = FastAPI()

# Allow CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # in prod, replace with ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ---------- Request Schemas ----------
class AuthRequest(BaseModel):
    email: str
    password: str


# ---------- Routes ----------
@app.get("/")
async def root():
    return {"message": "🚀 FinOps Backend is running!"}


@app.post("/auth/signup")
async def signup(data: AuthRequest):
    try:
        response = supabase.auth.sign_up({"email": data.email, "password": data.password})
        if response.user is None:
            raise HTTPException(status_code=400, detail="Signup failed")
        return {"message": "User signed up successfully", "user": response.user}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/auth/login")
async def login(data: AuthRequest):
    try:
        response = supabase.auth.sign_in_with_password(
            {"email": data.email, "password": data.password}
        )
        if response.user is None:
            raise HTTPException(status_code=401, detail="Invalid credentials")
        return {"message": "Login successful", "user": response.user}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/users/me")
async def get_user(request: Request):
    try:
        # In real production: extract JWT from headers, verify with supabase
        # For now: just return session user if available
        session = supabase.auth.get_session()
        if session is None or session.user is None:
            raise HTTPException(status_code=401, detail="Not authenticated")
        return {"user": session.user}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
