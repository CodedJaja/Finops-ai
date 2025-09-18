"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/sidebar";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

// Example data (replace with API call later)
const data = [
  { name: "Jan", cost: 400 },
  { name: "Feb", cost: 300 },
  { name: "Mar", cost: 500 },
  { name: "Apr", cost: 200 },
];

export default function DashboardPage() {
  const [username, setUsername] = useState("User");

  useEffect(() => {
    // Replace with Supabase auth call later
    setUsername("CodedJaja");
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6">🚀 FinOps Dashboard</h1>
        <p className="mb-4">Welcome back, {username}!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Cloud Costs</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="cost" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="mr-2">Add Report</Button>
              <Button variant="outline">Export Data</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
