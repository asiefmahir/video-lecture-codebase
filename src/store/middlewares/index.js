export const ourMiddleWare = (store) => (next) => async (action) => {
	console.log(JSON.stringify(store.getState()), "store State");
	console.log(action, "action");

	if (typeof action === "function") {
		action(store.dispatch);

		// fetchPost(dispatch)
		return;
		// fetchUser(dispatch)
	}

	next(action);
	// if (action)
	// next(action);
};

export const fetchPost = async (dispatch) => {
	dispatch({ type: "post/fetchStarted" });
	try {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/posts?_limit=5`,
		);
		const data = await res.json();
		dispatch({ type: "post/fetchSucceeded", payload: data });
	} catch (error) {
		dispatch({
			type: "post/fetchFailed",
			payload: error.message,
		});
	}
};

export const fetchUser = async (dispatch) => {
	dispatch({ type: "user/fetchStarted" });
	try {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/users?_limit=5`,
		);

		const data = await res.json();
		dispatch({ type: "user/fetchSucceeded", payload: data });
	} catch (error) {
		dispatch({
			type: "user/fetchFailed",
			payload: error.message,
		});
	}
};
