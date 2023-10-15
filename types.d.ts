type Params = {
  params: {
    id: string;
  };
};

type Children = {
  children: React.ReactNode;
};

type Todo = {
  _id: string;
  text: string;
};

type TodoPost = Omit<Todo, "_id">;
