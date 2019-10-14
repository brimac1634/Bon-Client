import CartActionTypes from './cart.types';

export const addItemStart = itemAndQuantity => ({
	type: CartActionTypes.ADD_ITEM_START,
	payload: itemAndQuantity
})

export const addItemSuccess = itemAndQuantity => ({
	type: CartActionTypes.ADD_ITEM_SUCCESS,
	payload: itemAndQuantity
})

export const addItemFailure = error => ({
	type: CartActionTypes.ADD_ITEM_FAILURE,
	payload: error
})

export const clearItemFromCart = item => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item
})

export const removeItem = item => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item
})

export const clearCart = () => ({
	type: CartActionTypes.CLEAR_CART
})