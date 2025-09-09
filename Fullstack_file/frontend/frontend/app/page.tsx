"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", spending: 120 },
  { name: "Tue", spending: 200 },
  { name: "Wed", spending: 150 },
  { name: "Thu", spending: 80 },
  { name: "Fri", spending: 170 },
  { name: "Sat", spending: 250 },
  { name: "Sun", spending: 300 },
];

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Total Balance</h2>
            <p className="text-2xl font-semibold">$12,340</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Monthly Spending</h2>
            <p className="text-2xl font-semibold">$4,560</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <h2 className="text-sm text-gray-500">Transactions</h2>
            <p className="text-2xl font-semibold">342</p>
          </CardContent>
        </Card>
      </div>

      {/* Chart */}
      <Card className="rounded-2xl shadow-md">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4">Weekly Spending</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="spending" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
