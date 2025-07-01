import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDuration(startDate: Date, endDate?: Date): string {
  const end = endDate || new Date()
  const diffInMs = end.getTime() - startDate.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  const diffInHours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  
  if (diffInDays > 0) {
    return `${diffInDays}d ${diffInHours}h`
  } else if (diffInHours > 0) {
    return `${diffInHours}h`
  } else {
    const diffInMinutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60))
    return `${diffInMinutes}m`
  }
}

export function getTaskAge(createdAt: Date): number {
  const now = new Date()
  const diffInMs = now.getTime() - createdAt.getTime()
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24))
}

export function getCompletionTime(createdAt: Date, completedAt: Date): number {
  const diffInMs = completedAt.getTime() - createdAt.getTime()
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24))
}