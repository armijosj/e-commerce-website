import React, { useEffect, useState } from "react";
import { Text, Button, Grid, Card, Spacer, Input, Image } from "@nextui-org/react";

const ProductCart = (props) => {

    return (
        <div>
            <Card css={{ p: "$6", w: "400px", h:'400px' }}>
                <Card.Body >
                    <Text>
                        {props.data.title}
                    </Text>
                        
                    <Text color="grey">
                        {props.data.category}
                    </Text>

                    <Text weight="bold">
                        ${props.data.price}
                    </Text>
                        <Image
                            width='15%' 
                            src={props.data.image}
                            alt="Product Image"
                            objectFit="scale-down"
                        />
                </Card.Body>

                </Card>

                
        </div>
      );
    };
    
    export default ProductCart;