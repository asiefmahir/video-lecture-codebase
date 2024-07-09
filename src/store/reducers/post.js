// const initState = {
// 	isLoading: true,
// 	posts: [],
// 	errorMessage: "",
// };

// export const postReducer = (state = initState, action) => {
// 	switch (action.type) {
// 		case "post/fetchStarted": {
// 			return {
// 				...state,
// 				isLoading: true,
// 			};
// 		}

// 		case "post/fetchSucceeded": {
// 			return {
// 				...state,
// 				isLoading: false,
// 				posts: action.payload,
// 				errorMessage: "",
// 			};
// 		}
// 		case "post/fetchFailed": {
// 			return {
// 				...state,
// 				isLoading: false,
// 				posts: [],
// 				errorMessage: action.payload,
// 			};
// 		}

// 		default: {
// 			return state;
// 		}
// 	}
// };

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPostList = createAsyncThunk("fetchPosts", async () => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts?_limit=5`,
	);
	const data = await res.json();
	return data;
});

// fetchPostList.pending
// fetchPostList.fulfilled
// fetchPostList.rejected

const initState = {
	isLoading: true,
	posts: [],
	errorMessage: "",
};

const postSlice = createSlice({
	name: "post",
	initialState: initState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPostList.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(fetchPostList.fulfilled, (state, action) => {
				state.isLoading = false;
				state.posts = action.payload;
				state.errorMessage = "";
			})
			.addCase(fetchPostList.rejected, (state, action) => {
				state.errorMessage = action.error.message;
				state.isLoading = false;
				state.posts = [];
			});
	},
});

export default postSlice.reducer;
