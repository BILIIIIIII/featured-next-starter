import { Skeleton } from "@/shared/ui/skeleton";

function PropertyCardSkeleton() {
  return (
    <div className="rounded-lg border bg-white p-4 shadow-sm">
      <Skeleton className="h-52 w-full" />
      <div className="pt-4">
        <Skeleton className="h-4 w-1/3 mb-2" />
        <Skeleton className="h-5 w-3/4 mb-1" />
        <Skeleton className="h-4 w-1/2" />
        <div className="flex items-center gap-4 mt-3 border-t pt-3">
          <Skeleton className="h-4 w-8" />
          <Skeleton className="h-4 w-8" />
          <Skeleton className="h-4 w-12" />
        </div>
        <Skeleton className="mt-4 h-6 w-1/3" />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-6">
        <Skeleton className="h-8 w-1/4 mb-2" />
        <Skeleton className="h-5 w-1/5" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <PropertyCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
