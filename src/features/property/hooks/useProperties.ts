"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { getProperties, type PropertyQueryParams } from "../api";
import { QUERY_KEYS } from "../constants";
import type { ApiResponse } from "../types/apiResponse";
import type { Property } from "../types/property";

interface UsePropertiesParams extends Omit<PropertyQueryParams, "offset"> {
  currentPage?: number;
}

const useProperties = ({
  currentPage = 1,
  limit = 12,
  ...initialParams
}: UsePropertiesParams = {}) => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();

  const offset = (currentPage - 1) * limit;

  const finalParams = useMemo(() => {
    const filterParams: Partial<PropertyQueryParams> = {};
    const location_text = searchParams.get("location_text");
    const min_price = searchParams.get("min_price");
    const max_price = searchParams.get("max_price");
    const sort = searchParams.get("sort");

    if (location_text && location_text !== "undefined")
      filterParams.location_text = location_text;
    if (min_price && !isNaN(Number(min_price)))
      filterParams.min_price = Number(min_price);
    if (max_price && !isNaN(Number(max_price)))
      filterParams.max_price = Number(max_price);
    if (sort === "asc" || sort === "desc") filterParams.sort = sort;

    return { ...initialParams, ...filterParams };
  }, [initialParams, searchParams]);

  const queryKey = [
    QUERY_KEYS.properties,
    { currentPage, limit, ...finalParams },
  ];

  const {
    data: response,
    isError,
    error,
    isPending,
    isLoading,
    refetch,
    isPlaceholderData,
  } = useQuery<ApiResponse<Property[]>>({
    queryKey,
    queryFn: () => getProperties({ offset, limit, ...finalParams }),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    if (!isPlaceholderData && response?.meta?.has_next) {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery({
        queryKey: [
          QUERY_KEYS.properties,
          { currentPage: nextPage, limit, ...finalParams },
        ],
        queryFn: () =>
          getProperties({
            offset: (nextPage - 1) * limit,
            limit,
            ...finalParams,
          }),
      });
    }
  }, [
    response,
    isPlaceholderData,
    currentPage,
    limit,
    finalParams,
    queryClient,
  ]);

  return {
    data: response?.data || [],
    meta: response?.meta,
    isError,
    error,
    isPending,
    isLoading,
    refetch,
  };
};

export default useProperties;
