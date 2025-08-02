"use client";

import { Hero, PropertyList, useProperties } from "@/features/property";
import { EmptyState } from "@/shared/ui/EmptyState";
import { ErrorState } from "@/shared/ui/ErrorState";
import { LoadingState } from "@/shared/ui/LoadingState";

export default function PropertyPage() {
  const {
    data: properties,
    isLoading,
    isError,
    error,
    refetch,
    meta,
  } = useProperties({});

  const isEmpty = !properties || properties.length === 0;

  const PageContent = () => {
    if (isLoading) {
      return <LoadingState />;
    }

    if (isError) {
      const errorMessage = error?.message.includes("fetch")
        ? "Unable to connect to server. Please check your internet connection."
        : "An unexpected error occurred. Please try again.";

      return (
        <div className="py-24">
          <ErrorState
            title="Something Went Wrong"
            message={errorMessage}
            onRetry={refetch}
          />
        </div>
      );
    }

    if (isEmpty) {
      return (
        <div className="py-24">
          <EmptyState
            icon="🏠"
            title="No Properties Found"
            message="We couldn't find any properties matching your criteria at the moment."
            onRetry={refetch}
          />
        </div>
      );
    }

    return (
      <section>
        <div className="flex flex-col items-baseline gap-2 mb-8 md:flex-row md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50">
              All Properties
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Find the best property that fits your needs.
            </p>
          </div>
          {meta && (
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Showing {properties.length} of {meta.total.toLocaleString()}{" "}
              properties
            </span>
          )}
        </div>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <PropertyList data={properties} />
        </article>
      </section>
    );
  };

  return (
    <>
      <Hero />
      <main className="container mx-auto py-12 px-4">
        <PageContent />
      </main>
    </>
  );
}
