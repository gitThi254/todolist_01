"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "@/libs/Api/todoApi";
import { useRouter } from "next/navigation";
const UpdateForm = ({ id, todoUpdate }: { id: string; todoUpdate?: Todo }) => {
  const router = useRouter();
  const form = useForm<Todo>({
    defaultValues: todoUpdate,
  });

  const queryClient = useQueryClient();
  const { mutate: updateTodoMuation } = useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
      router.push("/home");
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: Todo) => {
    updateTodoMuation({ id, data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='todo update'
        {...register("text", { required: "Required" })}
      />
      {errors.text && <p>{errors.text.message}</p>}
      <button>Update todo</button>
    </form>
  );
};

export default UpdateForm;
