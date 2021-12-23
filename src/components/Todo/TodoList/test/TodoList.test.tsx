import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import renderer from "react-test-renderer";
import { Item } from "../../Todo.presenter";
import TodoList from "../TodoList";
import userEvent from "@testing-library/user-event";

describe("TodoList", () => {
  let list: Item[];
  let item1: Item;
  let item2: Item;
  let item3: Item;

  let onCheck: (id: number) => void;
  let onDelete: (id: number) => void;
  let setUp = () =>
    render(<TodoList list={list} onCheck={onCheck} onDelete={onDelete} />);

  beforeEach(() => {
    item1 = { id: 1, title: "first", checked: false };
    item2 = { id: 2, title: "two", checked: false };
    item3 = { id: 3, title: "three", checked: false };
    list = [item1, item2, item3];

    onCheck = jest.fn();
    onDelete = jest.fn();
  });

  it("renders", () => {
    const component = renderer.create(
      <TodoList list={list} onCheck={onCheck} onDelete={onDelete} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("calls 'onDelete' when click 'Delete' button with id of Item", () => {
    setUp();
    const btns = screen.getAllByText("Delete");
    btns.forEach((btn, idx) => {
      userEvent.click(btn);
      expect(onDelete).toHaveBeenCalledWith(list[idx].id);
    });
  });

  it("calls 'onCheck' when click 'Item' button with id of Item", () => {
    setUp();
    list.forEach((item) => {
      const itemDom = screen.getByText(item.title);
      userEvent.click(itemDom);
      expect(onCheck).toHaveBeenCalledWith(item.id);
    });
  });
});
