export const addItemToCart = (cartItems, itemToAdd) => {
	const { item, quantity } = itemToAdd;
	
	const existingCartItem = cartItems.find(
		cartItem => cartItem.product_id === item.product_id
	)
	if (existingCartItem) {
		return cartItems.map(cartItem => {
			return cartItem.product_id === item.product_id
				? {...cartItem, quantity: cartItem.quantity + quantity}
				: cartItem
		})
	} else {
		return [...cartItems, { ...item, quantity: quantity }];
	}
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.product_id === itemToRemove.product_id
	)
	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.product_id !== itemToRemove.product_id)
	}
	return cartItems.map(cartItem => {
		return cartItem.product_id === itemToRemove.product_id
			? 	{...cartItem, quantity: cartItem.quantity - 1}
			: 	cartItem
	})
}