import React, { useEffect, useState } from "react";
import { Text, Button, Grid, Card, Spacer, Input } from "@nextui-org/react";
import Product from "./product";
const ProductList = (props) => {
    return (
        <div>
            <Grid.Container gap={3} justify="center">
                    {props.data.map((prod) => (
                            <Product key={prod.id} data={prod}></Product>
                    ))}
            </Grid.Container>

        </div>
      );
    };
    
    export default ProductList;