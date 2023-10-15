import { connectDB } from "@/libs/connectDB";
import Todo from "@/models/todo";
import { NextResponse } from "next/server";
import url from "url";

connectDB();
export async function GET() {
  const todo = await Todo.find();
  return NextResponse.json(todo, { status: 200 });
}

export async function POST(req: Request) {
  const newTodo = await req.json();
  await Todo.create(newTodo);
  return NextResponse.json(
    { message: "todo created successfully" },
    { status: 201 }
  );
}

export async function DELETE(req: Request) {
  const { id } = url.parse(req.url, true).query;
  await Todo.findByIdAndDelete(id);

  return NextResponse.json(
    {
      message: "Todo delete successfully",
    },
    { status: 200 }
  );
}
