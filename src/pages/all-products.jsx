import ProductList from "@/components/ProductList";

// import { useGetAllProductsQuery } from "../store/features/product";

const AllProducts = ({ products }) => {
	console.log("revalidating");
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

export async function getStaticProps() {
	console.log("All Products getStaticProps");
	const res = await fetch(`http://localhost:4000/products`);
	const products = await res.json();
	return {
		props: { products },
	};
}

export default AllProducts;
