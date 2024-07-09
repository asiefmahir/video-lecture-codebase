import { createStore, combineReducers } from "redux";
import { counterReducer } from "./reducers/counter";
import { themeReducer } from "./reducers/theme";
import { cartReducer } from "./reducers/cart";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
	cart: cartReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
