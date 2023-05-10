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
	Container,
} from "@nextui-org/react";

const ProductCart = (props) => {
	return (
		<div>
			<Row>
				<Image
					//css={{maxHeight:"20%", maxWidth:"20%"}}
					width={"20%"}
					src={props.data.product.image}
					alt="Product Image"
					objectFit="fill"
				/>
				<Spacer y={5}/>
				<Container justify="center" alignContent="center">
					<Text >{props.data.product.title}</Text>

					<Spacer x={2} />

					<Text b>${props.data.product.price}</Text>
				</Container>
				
				
			</Row>
		</div>
	);
};

export default ProductCart;
