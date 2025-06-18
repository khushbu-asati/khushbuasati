import { MetadataRoute } from "next";

// Helper function to ensure valid date format
function formatDate(date: string | Date | undefined): string {
  try {
    if (!date) {
      return new Date().toISOString().split("T")[0]; // Returns YYYY-MM-DD
    }
    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return new Date().toISOString().split("T")[0];
    }
    return parsedDate.toISOString().split("T")[0];
  } catch {
    return new Date().toISOString().split("T")[0];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://khushbuasati.vercel.app";

  // Primary routes with high priority
  const primaryRoutes = [
    {
      url: baseUrl,
      lastModified: formatDate(new Date()),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: formatDate(new Date()),
      changeFrequency: "daily" as const,
      priority: 2,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: formatDate(new Date()),
      changeFrequency: "daily" as const,
      priority: 3,
    },
  ];

  return [
    ...primaryRoutes,
  ];
}
