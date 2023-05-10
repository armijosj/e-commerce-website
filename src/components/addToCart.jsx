import React from "react";
import { Button } from "@nextui-org/react";

const AddToCart = (props) => {

	const addToCart = () => {

		// Initialize local storage if empty
		let oldCart = JSON.parse(localStorage.getItem("cart"));
		if (oldCart == null) {
			oldCart = [];
			localStorage.setItem("cart", JSON.stringify(oldCart));
		}

		// If item already in cart increase quantity
		let repeated = false;
		oldCart.forEach((element) => {
			if (element.product.id == props.data.id) {
				element.quantity = Number(element.quantity) + Number(1);
				repeated = true;
			}
		});

		// Add to cart or increase quantity
		if (!repeated) {
			let productCart = { quantity: 1, product: props.data };
			localStorage.setItem(
				"cart",
				JSON.stringify([...oldCart, productCart])
			);
		} else {
			localStorage.setItem("cart", JSON.stringify([...oldCart]));
		}
	};

	return (
		<div>
			<Button
				auto
				onPress={() => {
					addToCart();
				}}
			>
				Add to Cart
			</Button>
		</div>
	);
};

export default AddToCart;
