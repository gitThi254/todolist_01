"use client";
import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTodo } from "@/libs/Api/todoApi";
const TodoLayout = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const {
    isLoading,
    data: todo,
    error,
  } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodo(id),
    initialData: () =>
      queryClient
        .getQueryData<Todo[]>(["todos"])
        ?.find((todo) => todo._id === id),
  });
  if (isLoading) return "loading...";
  if (error) return "error";
  return <div>{todo?.text}</div>;
};

export default TodoLayout;
