"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getTodo } from "@/libs/Api/todoApi";
import UpdateForm from "../Form/UpdateForm";
const UpdateLayout = ({ id }: { id: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => getTodo(id),
  });
  if (isLoading) return "loading...";
  if (error) return "error";
  return (
    <div>
      <UpdateForm todoUpdate={data} id={id} />
    </div>
  );
};

export default UpdateLayout;
