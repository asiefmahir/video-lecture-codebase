"use client";

import { removeProduct } from "../actions/product";

const DeleteProductButton = ({ removeProductWithId }) => {
	return (
		<form action={removeProductWithId}>
			<button type="submit">x</button>
		</form>
	);
};

function ProductRow({ item }) {
	const removeProductWithId = removeProduct.bind(null, item.id);
	return (
		<tr className="product-row d-flex justify-content-around align-items-center">
			<td>
				<img src={item.image} className="product-img" alt="" />
			</td>

			<td>
				<h2>{item.title}</h2>
			</td>
			<td>
				<h2>{item.price}</h2>
			</td>
			<td>
				<DeleteProductButton
					removeProductWithId={removeProductWithId}
				/>
			</td>
		</tr>
	);
}

export default ProductRow;
