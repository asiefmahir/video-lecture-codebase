const initState = {
	isLoading: true,
	users: [],
	errorMessage: "",
};

export const userReducer = (state = initState, action) => {
	switch (action.type) {
		case "user/fetchStarted": {
			return {
				...state,
				isLoading: true,
			};
		}

		case "user/fetchSucceeded": {
			return {
				...state,
				isLoading: false,
				users: action.payload,
				errorMessage: "",
			};
		}
		case "user/fetchFailed": {
			return {
				...state,
				isLoading: false,
				users: [],
				errorMessage: action.payload,
			};
		}

		default: {
			return state;
		}
	}
};
