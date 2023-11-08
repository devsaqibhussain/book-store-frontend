import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const isValidUrl = (url)=>{
  try {
    const httpUrl = new URL(url);
    return httpUrl.protocol === "http:" || httpUrl.protocol === "https:";
  } catch (error) {
    return false
  }
}
