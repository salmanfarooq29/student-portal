import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "zwvw0ekg", // Your actual Project ID
  dataset: "production",
  apiVersion: "2024-03-17",
  useCdn: true,
});