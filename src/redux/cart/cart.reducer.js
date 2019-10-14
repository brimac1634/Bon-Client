import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
	cartItems: [],
	fetchingQuantity: false,
	error: null
}

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTypes.ADD_ITEM_START:
			return {
				...state,
				fetchingQuantity: true
			}
		case CartActionTypes.ADD_ITEM_SUCCESS:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
				fetchingQuantity: false,
				error: null
			}
		case CartActionTypes.ADD_ITEM_FAILURE:
			return {
				...state,
				fetchingQuantity: false,
				error: action.payload
			}
		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(
					carItem => carItem.id !== action.payload.id
				)
			}
		case CartActionTypes.REMOVE_ITEM:
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
			}
		case CartActionTypes.CLEAR_CART:
			return {
				...state,
				cartItems: []
			}
		default:
			return state;
	}
}

export default cartReducer;