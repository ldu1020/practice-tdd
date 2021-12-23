import React from "react";
import { Flex, List, ListIcon, ListItem } from "@chakra-ui/layout";
import { Item } from "../Todo.presenter";
import { CheckIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

interface TodoListProps {
  list: Item[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ list, onCheck, onDelete }: TodoListProps) => {
  return (
    <List>
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
              onCheck(item.id);
            }}
          >
            {item.title}
            <Flex>
              <ListIcon as={CheckIcon} color={item.checked ? "red" : "gray"} />
              <Button
                onClick={() => {
                  onDelete(item.id);
                }}
              >
                Delete
              </Button>
            </Flex>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;
