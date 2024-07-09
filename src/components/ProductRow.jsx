function ProductRow({ item }) {
	const removeHandler = () => {
		fetch(`http://localhost:4000/products/${item.id}`, {
			method: "DELETE",
		}).then(() => {
			fetch(`http://localhost:3000/api/product`);
		});
	};
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
			<td onClick={removeHandler}>x</td>
		</tr>
	);
}

export default ProductRow;
