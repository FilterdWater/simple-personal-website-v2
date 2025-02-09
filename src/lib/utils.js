import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Combine classes using twMerge and clsx, no type annotation needed
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Format a Date object into a readable string
export function formatDate(date) {
  return Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

// Estimate reading time based on word count
export function readingTime(html) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

// Display a date range, with optional endDate handling
export function dateRange(startDate, endDate) {
  const startMonth = startDate.toLocaleString("default", { month: "short" });
  const startYear = startDate.getFullYear().toString();
  let endMonth = "";
  let endYear = "";

  if (endDate) {
    if (typeof endDate === "string") {
      endYear = endDate;
    } else {
      endMonth = endDate.toLocaleString("default", { month: "short" });
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
}
