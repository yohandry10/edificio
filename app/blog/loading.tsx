import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="pt-16">
      {/* Hero Section Skeleton */}
      <section className="bg-green-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-6 w-full mx-auto mb-4" />
            <Skeleton className="h-6 w-5/6 mx-auto mb-8" />
            <Skeleton className="h-12 w-full max-w-xl mx-auto rounded-lg" />
          </div>
        </div>
      </section>

      {/* Blog Content Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Skeleton */}
            <div className="w-full md:w-1/4">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <Skeleton className="h-8 w-1/2 mb-4" />
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Skeleton key={i} className="h-10 w-full rounded-md" />
                  ))}
                </div>

                <Skeleton className="h-8 w-1/2 mt-8 mb-4" />
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Skeleton className="w-16 h-16 rounded-md flex-shrink-0" />
                      <div className="w-full">
                        <Skeleton className="h-4 w-full mb-2" />
                        <Skeleton className="h-4 w-2/3" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Skeleton */}
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md">
                    <Skeleton className="h-48 w-full" />
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <Skeleton className="h-6 w-full mb-2" />
                      <Skeleton className="h-6 w-5/6 mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3 mb-4" />
                      <Skeleton className="h-6 w-28" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
