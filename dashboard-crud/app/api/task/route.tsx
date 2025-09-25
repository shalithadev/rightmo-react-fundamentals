import { connectMongoDB } from "@/lib/mongodb";
import Task from "@/model/Task";
import { NextRequest, NextResponse } from "next/server";

type TaskForm = {title: string, desc: string, priority: string}

export async function POST(request: NextRequest){
    await connectMongoDB()

    const formData = await request.formData();
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    const priority = formData.get("priority") as string;

    const d = await Task.create({
        title,
        desc,
        priority
    })

    return NextResponse.json({
        res: d
    })
}