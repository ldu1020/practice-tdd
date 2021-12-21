class TodoPresenter {
  list: Item[] = [];
  constructor(initialList: Item[]) {
    this.list = [...initialList];
  }

  addItem(item: Item, updateFn?: (item: Item) => void) {
    this.list.push(item);
    if (updateFn) updateFn(item);
  }

  deleteItem(id: number, updateFn?: (id: number) => void) {
    const updated = this.list.filter((li) => li.id !== id);
    this.list = updated;
    if (updateFn) updateFn(id);
  }

  checkItem(id: number, updateFn?: (id: number) => void) {
    const updated = this.list.map((li) => {
      if (li.id === id) li.checked = !li.checked;
      return li;
    });
    this.list = updated;
    if (updateFn) updateFn(id);
  }
}

export default TodoPresenter;

export type Item = {
  id: number;
  title: string;
  checked: boolean;
};
