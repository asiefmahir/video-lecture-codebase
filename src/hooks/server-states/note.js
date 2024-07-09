import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useGetAllNotes = () => {
	const {
		isFetching,
		isError,
		error,
		data: notes,
	} = useQuery({
		queryKey: ["notes"],
		queryFn: () =>
			fetch(`http://localhost:4000/notes`).then((res) => res.json()),
		refetchOnMount: false,
	});

	return {
		isFetching,
		isError,
		error,
		notes,
	};
};

export const useCreateNote = () => {
	const client = useQueryClient();
	return useMutation({
		mutationKey: ["create-note"],
		mutationFn: (newNote) =>
			fetch(`http://localhost:4000/notes`, {
				method: "POST",
				body: JSON.stringify(newNote),
				headers: {
					"Content-type": "application/json",
				},
			}),
		onSuccess: () => {
			client.invalidateQueries(["notes"]);
		},
	});
};

export const useRemoveNote = () => {
	const client = useQueryClient();

	return useMutation({
		mutationKey: ["remove-note"],
		mutationFn: (noteId) =>
			fetch(`http://localhost:4000/notes/${noteId}`, {
				method: "DELETE",
			}),
		onSuccess: () => {
			client.invalidateQueries(["notes"]);
		},
	});
};

export const useUpdateNote = () => {
	const client = useQueryClient();
	return useMutation({
		mutationKey: ["update-note"],
		mutationFn: ({ noteId, updatedNote }) =>
			fetch(`http://localhost:4000/notes/${noteId}`, {
				method: "PUT",
				body: JSON.stringify(updatedNote),
				headers: {
					"Content-type": "application/json",
				},
			}),
		onMutate: async ({ noteId, updatedNote }) => {
			await client.cancelQueries(["notes"]);
			const previousData = client.getQueryData(["notes"]);
			client.setQueryData(["notes"], (oldData) => {
				return oldData.map((item) => {
					if (item.id === noteId) {
						return { id: noteId, ...updatedNote };
					}
					return item;
				});
			});

			return { previousData };
		},

		onError: (_err, _variables, context) => {
			client.setQueryData(["notes"], context.previousData);
		},

		onSettled: () => {
			client.invalidateQueries(["notes"]);
		},
		// onSuccess: () => {
		// 	client.invalidateQueries(["notes"]);
		// },
	});
};
