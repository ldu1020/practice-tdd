import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Item } from "../../Todo.presenter";
import TodoAddForm from "../TodoAddForm";
import userEvent from "@testing-library/user-event";

describe("TodoAddForm", () => {
  it("renders (snapshot)", () => {
    const components = renderer.create(<TodoAddForm onAdd={jest.fn()} />);
    expect(components.toJSON()).toMatchSnapshot();
  });

  describe("Form Submit", () => {
    let onAdd: (item: Item) => void;
    let button: HTMLButtonElement;
    let input: HTMLInputElement;

    beforeEach(() => {
      onAdd = jest.fn();
      // eslint-disable-next-line testing-library/no-render-in-setup
      render(<TodoAddForm onAdd={onAdd} />);
      button = screen.getByText("Add");
      input = screen.getByPlaceholderText("item");
    });

    it('calls "onAdd" when buttons is clicked and valid value', () => {
      userEvent.type(input, "new item");
      userEvent.click(button);
      expect(onAdd).toHaveBeenCalled();
    });

    it('does not call "onAdd" when buttons is clicked and empty value', () => {
      userEvent.type(input, "");
      userEvent.click(button);
      expect(onAdd).not.toHaveBeenCalled();
    });
  });
});
