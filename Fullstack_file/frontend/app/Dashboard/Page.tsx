"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.push("/auth"); // redirect to login if not authenticated
      } else {
        setUser(session.user);
        setLoading(false);
      }
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!session) router.push("/auth");
        else setUser(session.user);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.email}</h1>
      <p>This is your dashboard.</p>
    </div>
  );
}
