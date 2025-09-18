"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState("light");
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Get current user from Supabase Auth
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUserId(user.id);

        // Load settings from Supabase
        const { data, error } = await supabase
          .from("settings")
          .select("theme")
          .eq("user_id", user.id)
          .single();

        if (data?.theme) {
          setThemeState(data.theme);
          document.documentElement.classList.toggle("dark", data.theme === "dark");
        }
      }
    };

    getUser();
  }, []);

  const setTheme = async (newTheme: string) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");

    if (!userId) return;

    try {
      await supabase.from("settings").upsert({
        user_id: userId,
        theme: newTheme,
      });
    } catch (err) {
      console.error("Error updating theme:", err);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
