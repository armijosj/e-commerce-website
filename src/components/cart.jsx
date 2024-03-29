import React from "react";
import {
	Modal,
	Button,
	Text,
	Input,
	Row,
	Grid,
	Card,
	Spacer,
	Col,
} from "@nextui-org/react";
import { FaShoppingCart } from "react-icons/fa";
import ProductCart from "./productCart";

const Cart = () => {
	const [visible, setVisible] = React.useState(false);
	const [myCart, setCart] = React.useState(null);
	const [totalSum, setSum] = React.useState(0);
	const [checkout, setCheckout] = React.useState(false);

	// Handler when the side cart opens
	const handler = () => {
		setVisible(true);
		setCart(JSON.parse(localStorage.getItem("cart")));
	};

	// Handler when the cart is closed. (not by checkout)
	const closeHandler = () => {
		setVisible(false);
		setCheckout(false);
	};

	// Handler when user clicks on checkout.
	const checkoutHandler = () => {
		localStorage.setItem("cart", JSON.stringify([]));
		setCart([]);
		setCheckout(true);
	};

	// Remove item from cart and update UI
	const removeFromCart = (elementId) => {
		let oldCart = JSON.parse(localStorage.getItem("cart"));
		const newCart = oldCart.filter(function (element) {
			return element.product.id != elementId;
		});
		localStorage.setItem("cart", JSON.stringify([...newCart]));
		setCart(newCart);
	};

	// Calculate the total sum when there is an update to myCart
	const calcSum = () => {
		let sum = Number(0);
		let oldCart = JSON.parse(localStorage.getItem("cart"));
		oldCart.forEach((element) => {
			sum =
				Number(sum) +
				Number(element.product.price) * Number(element.quantity);
		});
		setSum(sum);
	};

	// Update the quantity of a specific product
	const updateQuantity = (value, elementId) => {
		let oldCart = JSON.parse(localStorage.getItem("cart"));
		oldCart.forEach((element) => {
			if (element.product.id == elementId) {
				element.quantity = value;
			}
		});
		localStorage.setItem("cart", JSON.stringify([...oldCart]));
		setCart(oldCart);
	};

	// Rerender when there is a state change to myCart
	React.useEffect(() => {
		if (JSON.parse(localStorage.getItem("cart")) == null) {
			localStorage.setItem("cart", JSON.stringify([]));
		}
		calcSum();
	}, [myCart]);

	return (
		<div>
			<Button auto shadow onPress={handler}>
				<FaShoppingCart />
			</Button>
			<Modal
				scroll
				width="80%"
				closeButton
				aria-labelledby="modal-title"
				open={visible}
				onClose={closeHandler}
			>
				<Modal.Header>
					<Text id="modal-title" b size={20}>
						Your Cart
					</Text>
				</Modal.Header>
				<Modal.Body>
					{myCart == null ? (
						<Text>You don't have any items in cart yet.</Text>
					) : (
						<Grid.Container gap={3} justify="center">
							{myCart.map((prod) => (
								<div key={prod.product.id}>
									<Card key={prod.product.id} width="80%" css={{ p: "1%" }}>
										<Col>
											<ProductCart data={prod} />
											<Row justify="flex-end" >
												<Input
													width="25%"
													aria-label="Qty"
													labelLeft="Qty"
													type="number"
													initialValue={prod.quantity}
													min={1}
													onBlur={(e) =>
														updateQuantity(
															e.target.value,
															prod.product.id
														)
													}
												/>
												<Spacer x={2} />

												<Button
													color="error"
													auto
													flat
													onPress={() => {
														removeFromCart(
															prod.product.id
														);
													}}
												>
													Remove
												</Button>
											</Row>
										</Col>
									</Card>
									<Spacer y={2} />
								</div>
							))}
						</Grid.Container>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button auto flat color="error" onPress={closeHandler}>
						Close
					</Button>
					<Button auto onPress={checkoutHandler}>
						<Text b color="white" size={"$lg"}>
						Checkout ${totalSum.toFixed(2)}

						</Text>
					</Button>

					<Modal
						width="20%"
						closeButton
						aria-labelledby="modal-title"
						open={checkout}
						onClose={closeHandler}
					>
						<Modal.Header>
							<Text id="modal-title" b size={18}>
								You are all set!
							</Text>
						</Modal.Header>
						<Modal.Body>
							<Text id="modal-title" size={14}>
								Your purchase was successful.
							</Text>
						</Modal.Body>
					</Modal>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default Cart;
