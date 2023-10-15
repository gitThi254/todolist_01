import TodoLayout from "@/components/Layout/TodoLayout";
import Link from "next/link";
import React from "react";

const Todo = ({ params: { todoId } }: { params: { todoId: string } }) => {
  return (
    <div>
      <Link href='/home'>Go Home</Link>
      <h1>Todo Detail</h1>
      <TodoLayout id={todoId} />
    </div>
  );
};

export default Todo;
