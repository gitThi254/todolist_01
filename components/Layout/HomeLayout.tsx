"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { getAllTodo } from "@/libs/Api/todoApi";
import DeleteBtn from "../Button/DeleteBtn";

const HomeLayout = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodo,
  });
  if (isLoading) return "loading...";
  if (error) return "error an error";
  return (
    <div>
      {data?.map((todo) => (
        <div key={todo._id}>
          <Link href={`/home/${todo._id}`}>{todo.text}</Link>
          <DeleteBtn id={todo._id} />
          <Link href={`/update/${todo._id}`}>Update</Link>
        </div>
      ))}
    </div>
  );
};

export default HomeLayout;
