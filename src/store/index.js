// import { createStore, combineReducers } from "redux";
// import { counterReducer } from "./reducers/counter";
// import { themeReducer } from "./reducers/theme";
// import { cartReducer } from "./reducers/cart";
// import { composeWithDevTools } from "@redux-devtools/extension";

// const rootReducer = combineReducers({
// 	counter: counterReducer,
// 	theme: themeReducer,
// 	cart: cartReducer,
// });

// export const store = createStore(rootReducer, composeWithDevTools());

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counter";
import { themeReducer } from "./reducers/theme";
import cartReducer from "./reducers/cart";

const rootReducer = {
	counter: counterReducer,
	theme: themeReducer,
	cart: cartReducer,
};

export const store = configureStore({
	reducer: rootReducer,
});
