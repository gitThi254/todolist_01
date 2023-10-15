import { connectDB } from "@/libs/connectDB";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";
connectDB();
export async function GET(req: Request, { params: { id } }: Params) {
  const todo = await Todo.findById(id);
  return NextResponse.json(todo, { status: 200 });
}
export async function PUT(req: Request, { params: { id } }: Params) {
  const updateTodo = await req.json();
  await Todo.findByIdAndUpdate(id, updateTodo);
  return NextResponse.json(
    { message: "update todo successfully" },
    { status: 200 }
  );
}
