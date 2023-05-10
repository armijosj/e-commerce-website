import React, { useEffect, useState } from "react";
import {
	Text,
	Button,
	Grid,
	Card,
	Spacer,
	Input,
	Image,
	Row,
} from "@nextui-org/react";
import AddToCart from "./addToCart";

const ProductDetail = (props) => {
	return (
		<div style={{ padding: "10%" }}>
			<Row>
				<Image
					width="40%"
					src={props.data.image}
					alt="Product Image"
					objectFit="scale-down"
				/>
				<Spacer x={3} />
				<Card>
					<Card.Header>
						<Text h2>{props.data.title}</Text>
					</Card.Header>
					<Card.Divider />

					<Card.Body>
						<Text color="grey">{props.data.category}</Text>

						<Text h3 weight="bold">
							${props.data.price}
						</Text>

						<Text>{props.data.description}</Text>
					</Card.Body>

					<Card.Footer>
						<AddToCart data={props.data} />
					</Card.Footer>
				</Card>
			</Row>
		</div>
	);
};

export default ProductDetail;
