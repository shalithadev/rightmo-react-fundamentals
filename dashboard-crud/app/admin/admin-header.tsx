import React from "react";
import Link from "next/link";
import { HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminHeader() {
  return (
    <div className="flex justify-between items-center p-4 w-full bg-white border-b border-green-400">
      <h1>Admin Dashboard</h1>
      <div className="flex items-center gap-2">
        <Button variant="ghost" asChild>
          <Link href="/">
            <HomeIcon />
          </Link>
        </Button>
        <Button variant="outline" className="border-green-400" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}
