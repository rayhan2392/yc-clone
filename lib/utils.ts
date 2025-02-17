import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
   
    year: 'numeric', // Full year (e.g., 2025)
    month: 'long',  // Full month name (e.g., February)
    day: 'numeric'  // Day of the month (e.g., 17)
  });
}
