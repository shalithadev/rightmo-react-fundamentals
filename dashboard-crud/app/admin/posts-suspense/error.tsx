"use client";

export default function PostsError() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-lg text-red-600">
        Failed to load posts. Please try again later.
      </h1>
    </div>
  );
}
