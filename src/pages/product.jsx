import React, { useEffect, useState } from "react";
import { Text, Button, Grid, Card, Spacer, Input, Image } from "@nextui-org/react";

const Product = (props) => {

    return (
        <div>
            <Card css={{ p: "$6", mw: "400px" }}>
                <Card.Header>
                    <Button auto>
                        {props.data.title}
                    </Button>
                </Card.Header>
                
                <Card.Body >
                    <Text color="grey">
                        {props.data.category}
                    </Text>

                    <Text weight="bold">
                        ${props.data.price}
                    </Text>
                    

                    <Text >
                        {props.data.description}
                    </Text>

                    <Text >
                        Rating: {props.data.rating.rate} ({props.data.rating.count})
                    </Text>

                        <Image
                            width={100} 
                            src={props.data.image}
                            alt="Product Image"
                            objectFit="scale-down"
                        />
                </Card.Body>

                <Card.Footer>
                    <Button auto>
                        Add to Cart
                    </Button>
                </Card.Footer>
                </Card>

                
        </div>
      );
    };
    
    export default Product;