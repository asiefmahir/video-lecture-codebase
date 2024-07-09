// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { counterReducer } from "./reducers/counter";
// import { themeReducer } from "./reducers/theme";
// import { postReducer } from "./reducers/post";
// import { userReducer } from "./reducers/user";
// import { cartReducer } from "./reducers/cart";
// // import { ourMiddleWare } from "./middlewares";
// import { thunk } from "redux-thunk";

// import { composeWithDevTools } from "@redux-devtools/extension";

// const rootReducer = combineReducers({
// 	counter: counterReducer,
// 	theme: themeReducer,
// 	cart: cartReducer,
// 	post: postReducer,
// 	user: userReducer,
// });

// export const store = createStore(
// 	rootReducer,
// 	composeWithDevTools(applyMiddleware(thunk)),
// );

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/counter";
import { themeReducer } from "./reducers/theme";
import { cartReducer } from "./reducers/cart";
import postReducer from "./reducers/post";
import userReducer from "./reducers/user";

const rootReducer = {
	counter: counterReducer,
	theme: themeReducer,
	cart: cartReducer,
	post: postReducer,
	user: userReducer,
};

export const store = configureStore({
	reducer: rootReducer,
});
