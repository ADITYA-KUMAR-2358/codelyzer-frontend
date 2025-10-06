import { Card, CardContent, CardHeader } from './ui/card';
import { Skeleton } from './ui/skeleton';

export function LoadingSkeleton() {
  return (
    <Card className="w-full max-w-2xl mx-auto px-2 sm:px-0">
      <CardHeader className="px-4 sm:px-6">
        <Skeleton className="h-5 sm:h-6 w-36 sm:w-48" />
      </CardHeader>
      <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center gap-2 sm:gap-3 py-2 sm:py-3">
            <Skeleton className="h-4 w-4 sm:h-5 sm:w-5 rounded-full flex-shrink-0" />
            <Skeleton className="h-3 sm:h-4 flex-1" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
