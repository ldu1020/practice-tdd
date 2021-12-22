import React from "react";
import { Item } from "../Todo.presenter";
import { Button, Input } from "@chakra-ui/react";

interface TodoAddFormProps {
  onAdd: (item: Item) => void;
}

const TodoAddForm = ({ onAdd }: TodoAddFormProps) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const input = inputRef.current;
    const form = formRef.current;
    const title = input?.value;
    if (title) {
      onAdd({ id: Date.now(), title, checked: false });
      form?.reset();
    }
  };
  return (
    <form ref={formRef}>
      <Input ref={inputRef} placeholder="item" />
      <Button onClick={onSubmit}>Add</Button>
    </form>
  );
};

export default TodoAddForm;
