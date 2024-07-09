import ProductCard from "../components/ProductCard";
// import { useGetAllProductsQuery } from "../store/features/product";
import { useQuery } from "@tanstack/react-query";
import { useGetAllProducts } from "../hooks/server-states/product";

const Shop = () => {
	const { isFetching, isError, error, products } = useGetAllProducts();
	if (isFetching) {
		return <h4>Data is Loading....</h4>;
	}
	return (
		<div>
			<div className="page-banner">
				<div className="page-banner__details">
					<div className="page-banner__details__title">
						<h1>Our E-com site</h1>
					</div>
				</div>
			</div>
			<div className="section">
				<div className="container">
					<div className="section__head">
						<div className="product__details__title">
							<h2>All Products</h2>
						</div>
					</div>
					<div className="section__content">
						<div className="grid three">
							{products?.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
