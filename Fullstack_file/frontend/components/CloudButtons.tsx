// components/CloudButtons.tsx
import { Button } from "@/components/ui/button";

export default function CloudButtons() {
  return (
    <div className="mt-6 flex gap-4">
      <Button className="bg-indigo-600 text-white hover:bg-indigo-700">Connect AWS</Button>
      <Button className="bg-gray-600 text-white hover:bg-gray-700">Connect Azure</Button>
      <Button className="bg-yellow-500 text-white hover:bg-yellow-600">Connect GCP</Button>
    </div>
  );
}
