// components/SpendChart.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function SpendChart({ data, loading }: any) {
  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <h2 className="text-lg font-bold mb-4">Daily Cloud Spend</h2>
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="spend" stroke="#4F46E5" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
