import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import CartActionTypes from '../cart/cart.types';
import { addItemSuccess, addItemFailure } from './cart.actions';

export function* addItem({payload}) {
	const { item, quantity, cartItems } = payload;
	try {
		const { data } = yield axios.post('/get-product-quantity', { productIDs: [payload.item.product_id] })
		const itemInCart = cartItems.filter(cartItem => cartItem.product_id === item.product_id)[0];
		const existingQuantity = itemInCart ? itemInCart.quantity : 0;
		payload.quantity + existingQuantity <= data[0].quantity
			?	yield put(addItemSuccess({ item, quantity }))
			: 	yield put(addItemFailure('Not enough in stock'))
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