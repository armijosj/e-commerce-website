import React, { useEffect, useState } from "react";
import { Text, Button, Grid, Card, Spacer, Input, Image } from "@nextui-org/react";

const Product = (props) => {

    return (
        <div>
            <Card css={{ $$cardColor: "$colors$gradient" }}>
           
                <Text h3 color="#ffffff">
                    {props.data.title}
                    
                    {props.data.title}
                    {props.data.price}
                    {props.data.category}
                    {props.data.description}
                    Rating: {props.data.rating.rate}
                    {props.data.rating.count}
                </Text>

                <Image
                    width={100} 
                    src={props.data.image}
                    alt="Product Image"
                    objectFit="scale-down"
                />
                
            </Card>
        </div>
      );
    };
    
    export default Product;