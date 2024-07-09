import { useState } from "react";
import { useDispatch } from "react-redux";
import {
	modifyQuantityOfAnItem,
	removeProduct,
} from "../store/action-creator/cart";

const CartItem = ({ item }) => {
	const [itemQuantity, setItemQuantity] = useState(item.quantity);

	const dispatch = useDispatch();
	return (
		<tr>
			<td>
				<div className="product">
					<img
						src={item.image}
						alt={item.title}
						className="product-img"
					/>
				</div>
			</td>
			<td>
				<p>{item.title}</p>
			</td>
			<td>$ {item.price}</td>
			<td>
				<div className="qty-input">
					<button
						onClick={() => {
							dispatch(
								modifyQuantityOfAnItem({
									id: item.id,
									quantity: itemQuantity - 1,
								}),
							);
							setItemQuantity(itemQuantity - 1);
						}}
						className="qty-count qty-count--minus"
					>
						<figure>-</figure>
					</button>
					<input
						type="number"
						className="product-qty"
						min={1}
						value={itemQuantity}
						onChange={(e) => {
							dispatch(
								modifyQuantityOfAnItem({
									id: item.id,
									quantity: Number(e.target.value),
								}),
							);
							setItemQuantity(Number(e.target.value));
						}}
					/>
					<button
						onClick={() => {
							dispatch(
								modifyQuantityOfAnItem({
									id: item.id,
									quantity: itemQuantity + 1,
								}),
							);
							setItemQuantity(itemQuantity + 1);
						}}
						className="qty-count qty-count--add"
					>
						<figure>+</figure>
					</button>
				</div>
			</td>
			<td>$ {item.price * item.quantity} </td>
			<td>
				<button
					onClick={() => dispatch(removeProduct(item.id))}
					className="cross-icon"
				>
					x
				</button>
			</td>
		</tr>
	);
};

export default CartItem;
