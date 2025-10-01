"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [companyName, setCompanyName] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [success, setSuccess] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/settings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company_name: companyName, currency }),
      });

      if (res.ok) {
        setSuccess(true);
        setCompanyName("");
        setCurrency("USD");
      }
    } catch (err) {
      console.error("Error saving settings:", err);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">⚙️ Settings</h1>

      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block mb-2">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full border rounded p-2"
            placeholder="Enter company name"
          />
        </div>

        <div>
          <label className="block mb-2">Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="NGN">NGN (₦)</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Save Settings
        </button>
      </form>

      {success && (
        <p className="mt-4 text-green-600 font-semibold">
          ✅ Settings saved successfully!
        </p>
      )}
    </div>
  );
}
