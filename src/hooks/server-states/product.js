import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useGetAllProducts = () => {
	const {
		data: products,
		isFetching,
		isError,
		error,
	} = useQuery({
		queryKey: ["products"],
		queryFn: () =>
			fetch(`http://localhost:4000/products`).then((res) => res.json()),
		refetchOnMount: false,
	});

	return {
		isError,
		isFetching,
		products,
		error,
	};
};

export const useCreateProduct = () => {
	const client = useQueryClient();
	return useMutation({
		mutationFn: (newProduct) =>
			fetch(`http://localhost:4000/products`, {
				method: "POST",
				body: JSON.stringify(newProduct),
				headers: {
					"Content-type": "application/json",
				},
			}),
		onSuccess: () => {
			client.refetchQueries(["products"]);
		},
	});
};

export const useRemoveProduct = () => {
	const client = useQueryClient();
	return useMutation({
		mutationFn: (prodId) =>
			fetch(`http://localhost:4000/products/${prodId}`, {
				method: "DELETE",
			}),
		onSuccess: () => {
			client.invalidateQueries(["products"]);
		},
	});
};
