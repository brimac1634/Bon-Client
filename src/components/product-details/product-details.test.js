import { shallow } from "enzyme";
import React from "react";
import { ProductDetails } from "./product-details.component";

describe("<ProductDetails />", () => {
  const mockProduct = {
    name: "test product",
    images: ["test_image"],
    price: 60,
    description: "a test product",
    features: ["something nice"],
    quantity: 2
  };

  const mockStore = {
    product: mockProduct,
    cartError: null
  };

  const wrapper = shallow(
    <ProductDetails store={mockStore} product={mockProduct} />
  );

  it("expect to render ProductDetails component", () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  // it('expect quantity input to increment', () => {

  // 	wrapper.find('[id="quantity"]').simulate('change', {target: {value: 5}})
  // 	expect(wrapper.state()).toEqual({ quantity: 5 })
  // })
});
