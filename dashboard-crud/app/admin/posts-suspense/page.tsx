import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import PostData from "./post-data";

export default async function PostsPage() {
  return (
    <Suspense fallback={<FallbackPosts />}>
      <PostData />
    </Suspense>
  );
}

function FallbackPosts() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} className="rounded h-44"></Skeleton>
      ))}
    </div>
  );
}
