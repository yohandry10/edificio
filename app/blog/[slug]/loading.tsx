import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="pt-16">
      {/* Hero Section Skeleton */}
      <section className="relative h-[300px] md:h-[400px] bg-gray-200">
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <Skeleton className="h-6 w-32 mb-4" />
              <Skeleton className="h-12 w-full mb-2" />
              <Skeleton className="h-12 w-5/6 mb-4" />
              <div className="flex flex-wrap items-center gap-4">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-24" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Skeleton */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="space-y-4">
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-5/6" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-4/5" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-5/6" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-4/5" />
                  <Skeleton className="h-6 w-full" />
                </div>

                {/* Tags Skeleton */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center flex-wrap gap-2">
                    <Skeleton className="h-4 w-4 mr-2" />
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} className="h-6 w-20" />
                    ))}
                  </div>
                </div>

                {/* Share Skeleton */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Skeleton className="h-6 w-48 mb-4" />
                  <div className="flex gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <Skeleton key={i} className="h-10 w-10 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Skeleton */}
            <div className="w-full lg:w-1/3">
              <div className="space-y-8">
                {/* Related Posts Skeleton */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Skeleton className="h-8 w-48 mb-4" />
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex gap-4">
                        <Skeleton className="w-20 h-20 rounded-md flex-shrink-0" />
                        <div>
                          <Skeleton className="h-5 w-full mb-2" />
                          <Skeleton className="h-5 w-5/6 mb-2" />
                          <Skeleton className="h-4 w-20" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories Skeleton */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <Skeleton className="h-8 w-32 mb-4" />
                  <div className="space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Skeleton key={i} className="h-10 w-full rounded-md" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
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

          <div className="text-center mt-12">
            <Skeleton className="h-10 w-48 mx-auto" />
          </div>
        </div>
      </section>
    </div>
  )
}
