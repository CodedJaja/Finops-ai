export const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function fetchUsers() {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function createUser(email, fullName) {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, full_name: fullName }),
  });
  if (!res.ok) throw new Error("Failed to create user");
  return res.json();
}
