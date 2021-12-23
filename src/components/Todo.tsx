import React from "react";
import { Box } from "@chakra-ui/layout";
import TodoPresenter, { Item } from "./Todo/Todo.presenter";
import TodoAddForm from "./Todo/TodoAddForm/TodoAddForm";
import TodoList from "./Todo/TodoList/TodoList";

interface TodoProps {
  todoPresenter: TodoPresenter;
}

const Todo = ({ todoPresenter }: TodoProps) => {
  const [list, setList] = React.useState(todoPresenter.getList());
  const handleAddTodo = (item: Item) => {
    todoPresenter.addItem(item, setList);
  };

  const handleDeleteTodo = (id: number) => {
    todoPresenter.deleteItem(id, setList);
  };

  const handleCheckTodo = (id: number) => {
    todoPresenter.checkItem(id, setList);
  };

  return (
    <Box w="300px" border="1px">
      <TodoAddForm onAdd={handleAddTodo} />
      <TodoList
        list={list}
        onCheck={handleCheckTodo}
        onDelete={handleDeleteTodo}
      />
    </Box>
  );
};

export default Todo;
