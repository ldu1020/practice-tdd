import React from "react";
import { Flex, List, ListIcon, ListItem } from "@chakra-ui/layout";
import TodoPresenter, { Item } from "./Todo/Todo.presenter";
import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import TodoAddForm from "./Todo/TodoAddForm/TodoAddForm";

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
    <List w="300px" border="1px">
      <TodoAddForm onAdd={handleAddTodo} />
      {list.map((item) => {
        return (
          <ListItem
            key={item.id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom="1px"
            p="10px"
            cursor="pointer"
            onClick={() => {
              handleCheckTodo(item.id);
            }}
          >
            {item.title}
            <Flex>
              <ListIcon as={CheckIcon} color={item.checked ? "red" : "gray"} />
              <ListIcon
                as={CloseIcon}
                onClick={() => {
                  handleDeleteTodo(item.id);
                }}
              />
            </Flex>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Todo;
