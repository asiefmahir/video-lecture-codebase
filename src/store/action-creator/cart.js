// export const addToCart = (product) => {
// 	return {
// 		type: "cart/addToCart",
// 		payload: product,
// 	};
// };

// export const modifyQuantityOfAnItem = (obj) => {
// 	return {
// 		type: "cart/modifyQuantityOfAnItem",
// 		payload: obj,
// 	};
// };

// export const removeProduct = (prodId) => {
// 	return {
// 		type: "cart/removeProduct",
// 		payload: prodId,
// 	};
// };

// export const clearCart = () => {
// 	return {
// 		type: "cart/clearCart",
// 	};
// };

import {
	addToCart,
	modifyQuantityOfAnItem,
	removeProduct,
	clearCart,
} from "../reducers/cart";

export { addToCart, modifyQuantityOfAnItem, removeProduct, clearCart };
