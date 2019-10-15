import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';

import CartActionTypes from '../cart/cart.types';
import { addItemSuccess, addItemFailure } from './cart.actions';
import { setAlert } from '../alert/alert.actions';

const getCartItems = state => state.cart.cartItems;

export function* addItem({payload}) {
	const { item, quantity } = payload;
	try {
		const cartItems = yield select(getCartItems);
		const { data } = yield axios.post('/get-product-quantity', { productIDs: [payload.item.product_id] })
		const totalQuantityInStock = data[0].quantity
		const itemInCart = cartItems.filter(cartItem => cartItem.product_id === item.product_id)[0];
		const existingQuantity = itemInCart ? itemInCart.quantity : 0;
		payload.quantity + existingQuantity <= totalQuantityInStock
			?	yield all([
					put(addItemSuccess({ item, quantity })),
					put(setAlert('Added to Cart'))
				])
			: 	yield all([
					put(addItemFailure('not enough in stock')),
					put(setAlert(`Sorry, we only have ${totalQuantityInStock} of these in stock.`))
				])
	} catch (err) {
		yield put(addItemFailure(err))
	}
}

export function* onAddItemStart() {
	yield takeLatest(CartActionTypes.ADD_ITEM_START, addItem)
}

export function* cartSagas() {
	yield all([
		call(onAddItemStart)
	])
}