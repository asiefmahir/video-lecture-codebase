"use server";
import { revalidateTag } from "next/cache";

export const createProduct = async (formData) => {
	console.log(formData.get("title"));
	const newProduct = {
		title: formData.get("title"),
		price: formData.get("price"),
		description: formData.get("description"),
		image: formData.get("image"),
	};

	await fetch(`http://localhost:4000/products`, {
		method: "POST",
		body: JSON.stringify(newProduct),
		headers: {
			"Content-type": "application/json",
		},
	});
	revalidateTag("products");
};

export const removeProduct = async (prodId) => {
	await fetch(`http://localhost:4000/products/${prodId}`, {
		method: "DELETE",
	});
	revalidateTag("products");
};
