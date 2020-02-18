import CartActionTypes from "./cart.types";
import cartReducer from "./cart.reducer";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

describe("cartReducer", () => {
  const mockProduct = {
    name: "Test Product",
    images: "image.jpg",
    price: 300,
    description: "a nice test product",
    features: ["something cool", "another thing cool"],
    quantity: 4
  };
  const mockPayload = { item: mockProduct, quantity: 2 };
  const initialState = {
    cartItems: [{ ...mockProduct, quantity: 1 }],
    fetchingQuantity: false,
    error: null
  };
  it("should return the initial state", () => {
    expect(cartReducer(undefined, {})).toEqual({
      ...initialState,
      cartItems: []
    });
  });

  it("should increment the product", () => {
    expect(addItemToCart(initialState.cartItems, mockPayload)).toEqual([
      { ...mockProduct, quantity: 3 }
    ]);
  });

  it("should handle ADD_ITEM_SUCCESS", () => {
    expect(
      cartReducer(initialState, {
        type: CartActionTypes.ADD_ITEM_SUCCESS,
        payload: mockPayload
      })
    ).toEqual({
      ...initialState,
      cartItems: addItemToCart(initialState.cartItems, mockPayload)
    });
  });

  it("should handle CLEAR_ITEM_FROM_CART", () => {
    expect(
      cartReducer(initialState, {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: mockProduct
      })
    ).toEqual({
      ...initialState,
      cartItems: []
    });
  });
});
