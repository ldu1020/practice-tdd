class TodoPresenter {
  list: Item[] = [];
  constructor(initialList: Item[]) {
    this.list = [...initialList];
  }

  addItem(item: Item, updateFn?: UpdateFn) {
    this.list = [...this.list, item];
    if (updateFn) updateFn(this.list);
  }

  deleteItem(id: number, updateFn?: UpdateFn) {
    const updated = this.list.filter((li) => li.id !== id);
    this.list = updated;
    if (updateFn) updateFn(this.list);
  }

  checkItem(id: number, updateFn?: UpdateFn) {
    const updated = this.list.map((li) => {
      if (li.id === id) li.checked = !li.checked;
      return li;
    });
    this.list = updated;
    if (updateFn) updateFn(this.list);
  }

  getList() {
    return this.list;
  }

  get isEmpty() {
    return this.list.length === 0;
  }
}

export default TodoPresenter;

export type Item = {
  id: number;
  title: string;
  checked: boolean;
};

export type UpdateFn = (items: Item[]) => void;
