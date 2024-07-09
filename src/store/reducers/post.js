const initState = {
	isLoading: true,
	posts: [],
	errorMessage: "",
};

export const postReducer = (state = initState, action) => {
	switch (action.type) {
		case "post/fetchStarted": {
			return {
				...state,
				isLoading: true,
			};
		}

		case "post/fetchSucceeded": {
			return {
				...state,
				isLoading: false,
				posts: action.payload,
				errorMessage: "",
			};
		}
		case "post/fetchFailed": {
			return {
				...state,
				isLoading: false,
				posts: [],
				errorMessage: action.payload,
			};
		}

		default: {
			return state;
		}
	}
};
