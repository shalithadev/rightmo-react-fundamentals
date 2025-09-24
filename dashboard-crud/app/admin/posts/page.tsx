import { getAllPosts } from "@/actions/posts";
import { capitalizeFirstLetter } from "@/lib/utils";

export default async function PostsPage() {
  const { data } = await getAllPosts();

  if (!data) {
    return (
      <div>
        <h1>No Posts Available!</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {data?.map((post) => (
        <div key={post.id} className="text-white border rounded p-4">
          {capitalizeFirstLetter(post?.title)}
        </div>
      ))}
    </div>
  );
}
