import ProductCard from "./ProductCard";

// const getAllProducts = async () => {
// 	const res = await fetch(`http://localhost:4000/products`, {
// 		next: { tags: ["products"] },
// 	});
// 	const products = await res.json();
// 	return products;
// };

const GridLayout = async () => {
	const res = await fetch(`http://localhost:4000/products`, {
		next: { tags: ["products"] },
	});
	const products = await res.json();

	return (
		<>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</>
	);
};

export default GridLayout;
