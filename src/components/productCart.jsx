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

const ProductCart = (props) => {
	return (
		<div>
			<Row>
				<Image
					//css={{maxHeight:"20%", maxWidth:"20%"}}
					width={"100px"}
					src={props.data.product.image}
					alt="Product Image"
					objectFit="scale-down"
				/>

				<Text css={{ bottom: "50%" }}>{props.data.product.title}</Text>

				<Spacer x={2} />

				<Text b>${props.data.product.price}</Text>
			</Row>
		</div>
	);
};

export default ProductCart;
