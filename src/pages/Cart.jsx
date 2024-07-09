import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import { clearCart } from "../store/action-creator/cart";

const Cart = () => {
	const cart = useSelector((storeState) => storeState.cart);
	let totalSum = 0;
	cart.forEach((item) => (totalSum += item.price * item.quantity));

	const dispatch = useDispatch();

	return (
		<>
			<div className="account-setting__content">
				<div className="account-setting__content__title">
					<h4>Product List in your Cart</h4>
				</div>
				<div className="product-table-container">
					<table>
						<thead>
							<tr>
								<th>Image</th>
								<th>Product Title</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Subtotal</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((cartItem) => (
								<CartItem key={cartItem.id} item={cartItem} />
							))}
						</tbody>
					</table>
				</div>
				<h2 className="total-price">
					Your total price is $ {totalSum}
				</h2>
				<div className="mt-50">
					<button
						onClick={() => dispatch(clearCart())}
						className="btn-big"
						type="button"
					>
						Clear Cart
					</button>
				</div>
			</div>
		</>
	);
};

export default Cart;
