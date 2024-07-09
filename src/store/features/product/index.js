import { rootApi } from "../apiSlice";

const productApi = rootApi.injectEndpoints({
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: () => `products`,
			providesTags: ["products"],
			// http://localhost:4000/products
		}),

		createProduct: builder.mutation({
			query: (newProduct) => ({
				url: `products`,
				method: "POST",
				body: newProduct,
			}),
			invalidatesTags: ["products"],
		}),
		removeProduct: builder.mutation({
			query: (proId) => ({
				url: `/products/${proId}`,
				method: "DELETE",
			}),
			invalidatesTags: ["products"],
		}),
	}),
});

export const {
	useGetAllProductsQuery,
	useCreateProductMutation,
	useRemoveProductMutation,
} = productApi;
