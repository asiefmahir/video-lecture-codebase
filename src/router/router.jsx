import { createBrowserRouter } from "react-router-dom";

import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import RootLayout from "../pages/RootLayout";
import PostList from "../pages/PostList";
import UserList from "../pages/UserList";
import AddProduct from "../pages/AddProductForm";
import AllProducts from "../pages/AllProducts";
import NoteTakingApp from "../pages/NoteTakingApp";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", index: true, element: <Shop /> },
			{ path: "/cart", element: <Cart /> },
			{ path: "/posts", element: <PostList /> },
			{ path: "/users", element: <UserList /> },
			{ path: "/add-product", element: <AddProduct /> },
			{ path: "/all-products", element: <AllProducts /> },
			{ path: "/all-notes", element: <NoteTakingApp /> },
		],
	},
]);
