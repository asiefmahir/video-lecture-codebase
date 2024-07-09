import { createBrowserRouter } from "react-router-dom";

import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import RootLayout from "../pages/RootLayout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", index: true, element: <Shop /> },
			{ path: "/cart", element: <Cart /> },
		],
	},
]);
