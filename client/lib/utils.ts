import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getApiUrl = () => {
  return process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:8000'
    : "https://www.api.haolin.dev";
};
