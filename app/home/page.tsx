import AddForm from "@/components/Form/AddForm";
import HomeLayout from "@/components/Layout/HomeLayout";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Link href='/'>Go Page</Link>
      <h1>todo list</h1>
      <AddForm />
      <HomeLayout />
    </div>
  );
};

export default HomePage;
