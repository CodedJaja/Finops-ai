const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";

/**
 * General fetch wrapper to talk to the backend
 */
async function fetchFromBackend(endpoint: string, options: RequestInit = {}) {
  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    credentials: "include", // include cookies/session if backend uses them
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Backend error: ${res.status} - ${errorText}`);
  }

  return res.json();
}

/**
 * User signup
 */
export async function signup(email: string, password: string) {
  return fetchFromBackend("/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

/**
 * User login
 */
export async function login(email: string, password: string) {
  return fetchFromBackend("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

/**
 * Fetch current user profile
 */
export async function getUserProfile() {
  return fetchFromBackend("/users/me", {
    method: "GET",
  });
}
