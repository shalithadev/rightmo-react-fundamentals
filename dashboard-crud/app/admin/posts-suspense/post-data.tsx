import { getAllPosts } from "@/actions/posts";
import { capitalizeFirstLetter } from "@/lib/utils";

// Async Server Component
export default async function PostData() {
  const { data } = await getAllPosts();

  return (
    <div className="grid grid-cols-3 gap-3">
      {data.length > 0 &&
        data.map((post) => (
          <div
            key={post.id}
            className="text-green-800 text-center border border-green-400 bg-green-100 rounded p-4 h-44"
          >
            {capitalizeFirstLetter(post.title)}
          </div>
        ))}
    </div>
  );
}
