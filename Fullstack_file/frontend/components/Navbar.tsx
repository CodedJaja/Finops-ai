"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">OptiCloud</Link>
      </div>
      <div className="flex space-x-6">
        <Link href="/#features" className="hover:text-blue-600">
          Features
        </Link>
        <Link href="/#pricing" className="hover:text-blue-600">
          Pricing
        </Link>
        <Link href="/docs" className="hover:text-blue-600">
          Docs
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          Contact
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link
          href="/auth"
          className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Login
        </Link>
        <Link
          href="/auth?mode=signup"
          className="px-4 py-2 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
