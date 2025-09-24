"use server";

import { API_BASE_URL } from "@/lib/constants";

export async function getAllPosts() {
  const data = await fetch(`${API_BASE_URL}/posts`);
  const posts = await data.json();

  console.log(posts);

  if (posts) {
    return { data: posts };
  } else {
    return { data: [] };
  }
}
