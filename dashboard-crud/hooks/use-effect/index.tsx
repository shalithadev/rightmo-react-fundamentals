"use client";

import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  userId: number;
  body: string;
};

export const EffectExample = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // Fetch some data from API on initial load
  // Better way is react-query

  // This runs twice on development and only once on production (React Strict Mode)
  // Also runs on every re-render if there's no dependancy array (Ex: When a state update)
  useEffect(() => {
    console.log("Page rendered!");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        if (json) {
          setPosts(json);
        }
      });
  }, []);

  useEffect(() => {
    console.log("Page rendered with deps!");
  }, [isLoading]);

  return (
    <div className="my-6">
      <h1>Posts:</h1>

      <button
        onClick={() => {
          setIsLoading((pre) => !pre);
        }}
        className="border p-4 rounded"
      >
        Click Me!
      </button>

      <ul className="flex flex-col gap-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
