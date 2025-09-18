// components/KPICard.tsx
import { DollarSign, Cloud, Activity } from "lucide-react";

const icons: any = { DollarSign, Cloud, Activity };

export default function KPICard({ title, value, icon, color }: any) {
  const Icon = icons[icon];
  const colorClasses: any = {
    green: "text-green-600",
    blue: "text-blue-600",
    red: "text-red-600",
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center">
      <Icon className={`w-8 h-8 mr-4 ${colorClasses[color]}`} />
      <div>
        <p className="text-gray-500">{title}</p>
        <h2 className="text-xl font-bold">{value}</h2>
      </div>
    </div>
  );
}

