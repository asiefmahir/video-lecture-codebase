/**
 *
 * cart = [
 *      {id, title, price, description, image, quantity: 1}
 * ]
 */

// export const cartReducer = (state = [], action) => {
// 	switch (action.type) {
// 		case "cart/addToCart": {
// 			const product = state.find((item) => item.id === action.payload.id);

// 			return product
// 				? state.map((item) => {
// 						if (item.id === product.id) {
// 							return { ...item, quantity: item.quantity + 1 };
// 						}
// 						return item;
// 				  })
// 				: [...state, { ...action.payload, quantity: 1 }];
// 		}
// 		case "cart/removeProduct": {
// 			return state.filter((item) => item.id !== action.payload);
// 		}
// 		case "cart/modifyQuantityOfAnItem": {
// 			const updatedCart = state.map((item) => {
// 				if (item.id === action.payload.id) {
// 					return { ...item, quantity: action.payload.quantity };
// 				}
// 				return item;
// 			});

// 			return updatedCart;
// 		}
// 		case "cart/clearCart": {
// 			return [];
// 		}
// 		default: {
// 			return state;
// 		}
// 	}
// };

// import { createReducer } from "@reduxjs/toolkit";
// import {
// 	addToCart,
// 	removeProduct,
// 	modifyQuantityOfAnItem,
// 	clearCart,
// } from "../action-creator/cart";

// export const cartReducer = createReducer([], (builder) => {
// 	builder
// 		.addCase(addToCart.type, (state, action) => {
// 			const product = state.find((item) => item.id === action.payload.id);
// 			product
// 				? (product.quantity += 1)
// 				: state.push({ ...action.payload, quantity: 1 });
// 		})
// 		.addCase(removeProduct, (state, action) => {
// 			return state.filter((item) => item.id !== action.payload);
// 		})
// 		.addCase(modifyQuantityOfAnItem, (state, action) => {
// 			const productIndex = state.findIndex(
// 				(item) => item.id === action.payload.id,
// 			);
// 			state[productIndex].quantity = action.payload.quantity;
// 		})
// 		.addCase(clearCart, () => {
// 			return [];
// 		});
// });

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		addToCart(state, action) {
			const product = state.find((item) => item.id === action.payload.id);
			product
				? (product.quantity += 1)
				: state.push({ ...action.payload, quantity: 1 });
		},
		modifyQuantityOfAnItem(state, action) {
			const findIndex = state.findIndex(
				(item) => item.id === action.payload.id,
			);
			state[findIndex].quantity = action.payload.quantity;
		},
		removeProduct(state, action) {
			return state.filter((item) => item.id !== action.payload);
		},
		clearCart() {
			return [];
		},
	},
});

export const { addToCart, modifyQuantityOfAnItem, removeProduct, clearCart } =
	cartSlice.actions;

export default cartSlice.reducer;
