import { TaskModel } from "@/models/task";
import { connectDb } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (
    _: Request,
    { params }: { params: { id: string } }
) => {
    try {
        await connectDb();
        const task = await TaskModel.findById(params.id);
        if (!task) {
            return NextResponse.json({ message: "Task not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Success to get task", task }, { status: 200 });
    } catch (error) {
        console.error("Error connecting to database:", error);
        return NextResponse.json({ message: "Failed to connect to database" }, { status: 500 });
    }
}

export const DELETE = async (
    _: Request,
    { params }: { params: { id: string } }
) => {
    try {
        await connectDb();
        const result = await TaskModel.deleteOne({ _id: params.id });
        if (result.deletedCount === 0) {
            return NextResponse.json({ message: "Task not found" }, { status: 404 });
        }
        return NextResponse.json({ message: "Success to delete task" }, { status: 200 });
    } catch (error) {
        console.error("Error connecting to database:", error);
        return NextResponse.json({ message: "Failed to connect to database" }, { status: 500 });
    }
}

export const dynamic = 'force-dynamic';
