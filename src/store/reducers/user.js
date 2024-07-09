// const initState = {
// 	isLoading: true,
// 	users: [],
// 	errorMessage: "",
// };

// export const userReducer = (state = initState, action) => {
// 	switch (action.type) {
// 		case "user/fetchStarted": {
// 			return {
// 				...state,
// 				isLoading: true,
// 			};
// 		}

// 		case "user/fetchSucceeded": {
// 			return {
// 				...state,
// 				isLoading: false,
// 				users: action.payload,
// 				errorMessage: "",
// 			};
// 		}
// 		case "user/fetchFailed": {
// 			return {
// 				...state,
// 				isLoading: false,
// 				users: [],
// 				errorMessage: action.payload,
// 			};
// 		}

// 		default: {
// 			return state;
// 		}
// 	}
// };

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUserList = createAsyncThunk("fetchUsers", async () => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/users?_limit=5`,
	);
	const data = await res.json();
	return data;
});

// fetchPostList.pending
// fetchPostList.fulfilled
// fetchPostList.rejected

const initState = {
	isLoading: true,
	users: [],
	errorMessage: "",
};

const userSlice = createSlice({
	name: "user",
	initialState: initState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserList.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(fetchUserList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.users = action.payload;
				state.errorMessage = "";
			})
			.addCase(fetchUserList.rejected, (state, action) => {
				state.errorMessage = action.error.message;
				state.isLoading = false;
				state.users = [];
			});
	},
});

export default userSlice.reducer;
