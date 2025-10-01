"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const lineData = [
  { date: "Mon", aws: 320, gcp: 180, azure: 250 },
  { date: "Tue", aws: 400, gcp: 200, azure: 300 },
  { date: "Wed", aws: 380, gcp: 220, azure: 270 },
  { date: "Thu", aws: 420, gcp: 210, azure: 320 },
  { date: "Fri", aws: 460, gcp: 240, azure: 350 },
  { date: "Sat", aws: 500, gcp: 260, azure: 370 },
  { date: "Sun", aws: 480, gcp: 250, azure: 360 },
];

const pieData = [
  { name: "AWS", value: 2800 },
  { name: "GCP", value: 1600 },
  { name: "Azure", value: 2100 },
];

const COLORS = ["#2563eb", "#f97316", "#16a34a"];

export default function ReportsPage() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Reports & Analytics</h1>
      <p className="text-gray-600">Track your multi-cloud spend trends and provider distribution.</p>

      {/* Line Chart */}
      <div className="bg-white dark:bg-gray-900 shadow rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Daily Cloud Spend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="aws" stroke="#2563eb" strokeWidth={2} />
            <Line type="monotone" dataKey="gcp" stroke="#f97316" strokeWidth={2} />
            <Line type="monotone" dataKey="azure" stroke="#16a34a" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white dark:bg-gray-900 shadow rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Spend by Provider</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
