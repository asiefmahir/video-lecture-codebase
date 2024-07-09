const ProductCard = ({ product }) => {
	return (
		<div className="ingredient">
			<div className="ingredient__image">
				<figure>
					<img src={product.image} alt={product.title} />
				</figure>
			</div>
			<div className="ingredient__title">
				<h3>{product.title}</h3>
			</div>
			<div className="ingredient__description">
				<p className="price">
					<span>$ {product.price}</span>
				</p>
			</div>
			<div className="ingredient_btn">
				<button className="btn-white">Add to Cart</button>
			</div>
		</div>
	);
};

export default ProductCard;
