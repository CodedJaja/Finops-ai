"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/ui/sidebar";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// Example data (replace with API call later)
const sampleData = [
  { date: "2025-09-01", spend: 1200 },
  { date: "2025-09-02", spend: 1600 },
  { date: "2025-09-03", spend: 900 },
  { date: "2025-09-04", spend: 1400 },
  { date: "2025-09-05", spend: 1800 },
];

export default function DashboardPage() {
  const [data, setData] = useState(sampleData);

  // Placeholder: connect to backend later
  useEffect(() => {
    // fetch("http://localhost:4000/api/spend/aws")
    //   .then(res => res.json())
    //   .then(json => setData(json));
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar className="w-64 border-r" />

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-50">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">FinOps Dashboard</h1>
          <Button>Export Report</Button>
        </header>

        {/* Spend Chart */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Cloud Spend (AWS)</CardTitle>
          </CardHeader>
          <CardContent className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="spend" stroke="#2563eb" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Cost breakdown cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>AWS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">$1,800</p>
              <p className="text-sm text-gray-500">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Azure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">$1,200</p>
              <p className="text-sm text-gray-500">This week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>GCP</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-semibold">$950</p>
              <p className="text-sm text-gray-500">This week</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
