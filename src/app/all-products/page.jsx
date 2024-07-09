import ProductList from "../components/ProductList";

// import { useGetAllProductsQuery } from "../store/features/product";

// const getAllProducts = async () => {
// 	const res = await fetch(`http://localhost:4000/products`, {
// 		next: { tags: ["products"] },
// 	});
// 	const products = await res.json();
// 	return products;
// };
const AllProducts = async () => {
	console.log("All Products Rendering");
	const res = await fetch(`http://localhost:4000/products`, {
		next: { tags: ["products"] },
	});
	const products = await res.json();

	return (
		<main>
			<div>
				<div className="product-section">
					<div className="product-section__heading">
						<h4>Product list in your app</h4>
					</div>
					<div className="product-table-container">
						<table>
							<ProductList products={products} />
						</table>
					</div>
				</div>
			</div>
		</main>
	);
};

export default AllProducts;
