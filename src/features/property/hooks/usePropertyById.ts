import { useQuery } from "@tanstack/react-query";
import { getPropertyById } from "../api";
import { QUERY_KEYS } from "../constants";
import type { ApiResponse } from "../types/apiResponse";
import type { Property } from "../types/property";

export default function usePropertyById(id: number) {
  return useQuery<ApiResponse<Property>, Error, Property>({
    queryKey: QUERY_KEYS.propertyById(id),
    queryFn: () => getPropertyById(id),
    enabled: !isNaN(id),
    staleTime: 5 * 60 * 1000,
    select: (res) => {
      if (res.data === undefined) {
        throw new Error("Response missing data from API");
      }
      return res.data;
    },
  });
}
