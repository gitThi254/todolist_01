import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "@/libs/Api/todoApi";
const DeleteBtn = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const { mutate: deleteTodoMutaion } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  return <button onClick={() => deleteTodoMutaion(id)}>Delete</button>;
};

export default DeleteBtn;
