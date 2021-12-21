import TodoPresenter, { Item } from "../Todo.presenter";

describe("TodoPresenter", () => {
  let todoPresenter: TodoPresenter;
  let updateFn: jest.Mock;

  let initialList: Item[];
  let item1: Item;
  let item2: Item;
  let item3: Item;

  beforeEach(() => {
    item1 = { id: 1, title: "first", checked: false };
    item2 = { id: 2, title: "two", checked: false };
    item3 = { id: 3, title: "three", checked: false };
    initialList = [item1, item2, item3];
    todoPresenter = new TodoPresenter(initialList);
    updateFn = jest.fn();
  });

  it("init", () => {
    expect(todoPresenter.list).toEqual(initialList);
  });

  it("add item and call update fn", () => {
    const item4 = { id: 4, title: "four", checked: false };
    todoPresenter.addItem(item4, updateFn);
    expect(todoPresenter.list).toEqual([...initialList, item4]);

    expect(updateFn).toBeCalledWith(item4);
  });

  it("delete item and call update fn", () => {
    todoPresenter.deleteItem(3, updateFn);
    expect(todoPresenter.list).toEqual([item1, item2]);
    expect(updateFn).toBeCalledWith(3);
  });

  it("check item and call update fn", () => {
    todoPresenter.checkItem(3, updateFn);
    expect(todoPresenter.list[2].checked).toBe(true);
    expect(todoPresenter.list[0].checked).toBe(false);
    expect(updateFn).toBeCalledWith(3);
  });
});

export {};
