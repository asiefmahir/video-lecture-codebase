import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rootApi = createApi({
	reducerPath: "rootApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
	tagTypes: ["products", "notes"],
	endpoints: () => ({}),
});
