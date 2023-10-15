"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "@/libs/Api/todoApi";
const AddForm = () => {
  const form = useForm<TodoPost>({
    defaultValues: {
      text: "",
    },
  });
  const queryClient = useQueryClient();
  const { mutate: createTodoMutation } = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;
  const onSubmit = (data: TodoPost) => {
    createTodoMutation(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='add todo'
        {...register("text", {
          required: "Required",
        })}
      />
      {errors.text && <p>{errors.text.message}</p>}
      <button>Add todo</button>
    </form>
  );
};

export default AddForm;
