/**
 * Represents the structure of a single brand in the company portfolio.
 * This type is used across various components to ensure data consistency.
 * The data source for this type is `assets.ts`.
 */
export interface Brand {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  logoUrl: string;
  images: string[];
}
