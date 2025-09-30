"use server";

import { API_BASE_URL } from "@/lib/constants";
import { Post } from "@/lib/types";

export type GetAllPostsResponse = {
  data: Post[];
};

export async function getAllPosts(): Promise<GetAllPostsResponse> {
  const data = await fetch(`${API_BASE_URL}/posts`, {
    cache: "no-store",
    // next: { revalidate: 10 },
    headers: {
      "Content-Type": "application/json",
    },
    // method: "GET",
  });

  const posts: Post[] = await data.json();

  console.log(posts);

  if (posts) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return { data: posts };
  } else {
    return { data: [] };
  }
}
