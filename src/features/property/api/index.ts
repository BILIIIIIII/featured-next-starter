import { api } from "@/shared/lib/api";
import type { ApiResponse } from "../types/apiResponse";
import type { Property } from "../types/property";

export interface PropertyQueryParams {
  location_text?: string;
  property_type?: string;
  bedrooms?: number;
  bathrooms?: number;
  min_price?: number;
  max_price?: number;
  filter?: string;
  sort?: "asc" | "desc";
  limit?: number;
  offset?: number;
}

export async function getProperties(params: PropertyQueryParams) {
  return await api.get<ApiResponse<Property[]>>("/properties", {
    params: params as Record<string, string>,
  });
}

export async function getPropertyById(id: number) {
  return await api.get<ApiResponse<Property>>(`/properties/${id}`);
}
