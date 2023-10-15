import UpdateLayout from "@/components/Layout/UpdateLayout";
import Link from "next/link";
import React from "react";

const page = ({ params: { todoId } }: { params: { todoId: string } }) => {
  return (
    <div>
      <Link href='/home'>go home</Link>
      <h1>Update form</h1>
      <UpdateLayout id={todoId} />
    </div>
  );
};

export default page;
