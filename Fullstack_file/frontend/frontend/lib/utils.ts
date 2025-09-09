import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility to merge Tailwind + custom class names safely.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Safely formats a number into a percentage string.
 * Prevents errors if the value is undefined or null.
 */
export function safePercent(value?: number): string {
  if (value === undefined || value === null || isNaN(value)) {
    return "0%";
  }
  return `${value.toFixed(2)}%`;
}

/**
 * Formats a number into currency (USD by default).
 */
export function safeCurrency(
  value?: number,
  currency: string = "USD"
): string {
  if (value === undefined || value === null || isNaN(value)) {
    return `$0.00`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(value);
}
