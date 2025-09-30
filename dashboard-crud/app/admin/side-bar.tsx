import Link from "next/link";

export default function SideBar() {
  return (
    <div className="flex-1 h-screen bg-white border-r border-green-400 p-4">
      <h2 className="text-2xl font-bold mb-4">Side Bar</h2>
      <div className="flex flex-col space-y-2">
        <Link
          href="/admin"
          className="p-2 bg-green-100 rounded hover:bg-green-200 cursor-pointer"
        >
          Dashboard
        </Link>
        <Link
          href="/admin/posts"
          className="p-2 bg-green-100 rounded hover:bg-green-200 cursor-pointer"
        >
          Posts
        </Link>
        <Link
          href="/admin/settings"
          className="p-2 bg-green-100 rounded hover:bg-green-200 cursor-pointer"
        >
          Settings
        </Link>
        <Link
          href="/admin/logout"
          className="p-2 bg-green-100 rounded hover:bg-green-200 cursor-pointer"
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
