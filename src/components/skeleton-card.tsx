import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function SkeletonCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="h-5 w-20 bg-muted rounded animate-pulse" />
        </div>
        <div className="h-6 w-3/4 bg-muted rounded animate-pulse mb-2" />
        <div className="h-4 w-full bg-muted rounded animate-pulse" />
        <div className="h-4 w-2/3 bg-muted rounded animate-pulse mt-1" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="h-4 w-24 bg-muted rounded animate-pulse" />
          <div className="h-4 w-24 bg-muted rounded animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
}

export function SkeletonItemCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="flex flex-col items-center gap-2 min-w-[60px]">
            <div className="h-8 w-12 bg-muted rounded animate-pulse" />
            <div className="h-16 w-12 bg-muted rounded animate-pulse" />
          </div>
          <div className="flex-1">
            <div className="h-6 w-3/4 bg-muted rounded animate-pulse mb-3" />
            <div className="h-4 w-full bg-muted rounded animate-pulse mb-1" />
            <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
