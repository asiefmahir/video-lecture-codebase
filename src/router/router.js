import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Root from "../pages/RootLayout";
import PostList from "../pages/PostList";
import PostDetails from "../pages/PostDetails";

import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import UserList from "../pages/UserList";
import CounterApp from "../pages/CounterApp";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/all-notes", element: <App /> },
			{ path: "/all-posts", element: <PostList /> },
			{ path: "/posts/:id", element: <PostDetails /> },
			{ path: "all-users", element: <UserList /> },
			{ path: "/counter-app", element: <CounterApp /> },
		],
	},
]);
