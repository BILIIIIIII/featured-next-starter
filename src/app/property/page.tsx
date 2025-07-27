import { Hero, PropertyList, useProperties } from "@/features/property";
import { EmptyState } from "@/shared/ui/EmptyState";
import { ErrorState } from "@/shared/ui/ErrorState";
import { LoadingState } from "@/shared/ui/loadingState";

export default function PropertyPage() {
  const {
    data: properties,
    isLoading,
    isError,
    error,
    refetch,
    meta,
  } = useProperties();

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
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            All Properties
          </h2>
          {meta && (
            <span className="text-sm md:text-base text-slate-500">
              Showing {properties.length} of {meta.total.toLocaleString()}{" "}
              properties
            </span>
          )}
        </div>
        <PropertyList data={properties} />
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
