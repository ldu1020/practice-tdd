import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Todo from "./components/Todo";
import TodoPresenter from "./components/Todo/Todo.presenter";

const todoPresenter = new TodoPresenter([
  { id: 1, title: "first", checked: false },
  { id: 2, title: "two", checked: false },
  { id: 3, title: "three", checked: false },
]);

function App() {
  return (
    <ChakraProvider>
      <Todo todoPresenter={todoPresenter} />
    </ChakraProvider>
  );
}

export default App;
