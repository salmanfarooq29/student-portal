import { createClient } from "@sanity/client";

// MAKE SURE THE WORD 'export' IS HERE:
export const sanityClient = createClient({
  projectId: "zwvw0ekg",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-03-18",
});