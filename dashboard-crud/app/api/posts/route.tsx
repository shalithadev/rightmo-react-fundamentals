// import { connectMongoDB } from "@/lib/mongodb";

const POSTS = [
  { id: 1, title: "Post 01" },
  { id: 2, title: "post 02" },
  { id: 3, title: "Post 03" },
  { id: 4, title: "Post 04" },
  { id: 5, title: "post 05" },
  { id: 6, title: "Post 06" },
];

export async function GET() {
  // await connectMongoDB()

  return Response.json(POSTS);
}
