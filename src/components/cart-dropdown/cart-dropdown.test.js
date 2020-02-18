import { shallow } from "enzyme";
import React from "react";
import CartDropdown from "./cart-dropdown.component";

it("expect to render CartDropdown component", () => {
  const mockItems = [
    {
      name: "test item",
      quantity: 5,
      price: 60,
      images: ["test_image"]
    }
  ];
  expect(
    shallow(<CartDropdown cartItems={mockItems} />).debug()
  ).toMatchSnapshot();
});
