import { rootApi } from "../apiSlice";

const noteApi = rootApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllNotes: builder.query({
			query: () => `/notes`,
			providesTags: ["notes"],
		}),
		createNote: builder.mutation({
			query: (newNote) => ({
				url: "/notes",
				method: "POST",
				body: newNote,
			}),
			invalidatesTags: ["notes"],
		}),

		removeNote: builder.mutation({
			query: (noteID) => ({
				url: `/notes/${noteID}`,
				method: "DELETE",
			}),
			invalidatesTags: ["notes"],
		}),
	}),
});

export const {
	useGetAllNotesQuery,
	useCreateNoteMutation,
	useRemoveNoteMutation,
} = noteApi;
