import React, { useEffect, useState } from "react";
import {
	Text,
	Button,
	Grid,
	Card,
	Spacer,
	Input,
	Image,
} from "@nextui-org/react";
import { createSearchParams, useNavigate } from "react-router-dom";
import AddToCart from "./addToCart";

const Product = (props) => {

	const navigate = useNavigate();

	// Go to detail product page by passing the query in the url
	const productPage = (userId) => {
		navigate({
			pathname: "/product",
			search: createSearchParams({ id: props.data.id }).toString(),
		});
	};

	return (
		<div>
			<Grid xs={5}>
				<Card css={{ p: "$6", w: "400px", h: "400px" }}>
					<Card.Header
						as={Button}
						css={{ justifyContent: "center", textOverflow: "clip" }}
						onPress={() => {
							productPage();
						}}
					>
						{props.data.title}
					</Card.Header>
					<Card.Body>
						<Text color="grey">{props.data.category}</Text>

						<Text weight="bold">${props.data.price}</Text>
						<Image
							width="100%"
							src={props.data.image}
							alt="Product Image"
							objectFit="scale-down"
						/>
					</Card.Body>

					<Card.Footer>
						<AddToCart data={props.data} />
					</Card.Footer>
				</Card>
			</Grid>
		</div>
	);
};

export default Product;
