"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { safePercent, safeCurrency } from "@/lib/utils"
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

// Mock usage data (later this will come from API)
const mockCosts = [
  { service: "AWS EC2", cost: 1200, percent: 45 },
  { service: "S3 Storage", cost: 600, percent: 23 },
  { service: "Lambda", cost: 300, percent: 12 },
  { service: "RDS Database", cost: 550, percent: 20 },
]

// Mock trend data (weekly cost trend for now)
const mockTrend = [
  { week: "Week 1", EC2: 400, S3: 200, Lambda: 100, RDS: 150 },
  { week: "Week 2", EC2: 300, S3: 150, Lambda: 80, RDS: 120 },
  { week: "Week 3", EC2: 250, S3: 180, Lambda: 70, RDS: 140 },
  { week: "Week 4", EC2: 250, S3: 70, Lambda: 50, RDS: 140 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function CostsPage() {
  const [filter, setFilter] = useState("all")
  const [search, setSearch] = useState("")

  const filteredCosts = mockCosts.filter((item) => {
    const matchService = item.service.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === "all" || item.service.toLowerCase().includes(filter.toLowerCase())
    return matchService && matchFilter
  })

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="flex gap-4 items-center">
        <Input
          placeholder="Search service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="ec2">EC2</SelectItem>
            <SelectItem value="s3">S3</SelectItem>
            <SelectItem value="lambda">Lambda</SelectItem>
            <SelectItem value="rds">RDS</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" onClick={() => { setFilter("all"); setSearch(""); }}>
          Reset
        </Button>
      </div>

      {/* Cost Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCosts.map((item, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{item.service}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">
                {safeCurrency(item.cost)}
              </p>
              <p className="text-sm text-muted-foreground">
                {safePercent(item.percent)} of total
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pie Chart */}
      <div className="mt-8 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={filteredCosts}
              dataKey="percent"
              nameKey="service"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {filteredCosts.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart (Trend Over Time) */}
      <div className="mt-8 h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="EC2" stroke="#0088FE" />
            <Line type="monotone" dataKey="S3" stroke="#00C49F" />
            <Line type="monotone" dataKey="Lambda" stroke="#FFBB28" />
            <Line type="monotone" dataKey="RDS" stroke="#FF8042" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
