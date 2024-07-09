import ProductList from "../components/ProductList";

// import { useGetAllProductsQuery } from "../store/features/product";
import { useQuery } from "@tanstack/react-query";
import { useGetAllProducts } from "../hooks/server-states/product";

const AllProducts = () => {
	const { products } = useGetAllProducts();
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
