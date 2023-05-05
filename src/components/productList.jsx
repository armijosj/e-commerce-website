import React, { useEffect, useState } from "react";
import { Text, Button, Grid, Card, Spacer, Input } from "@nextui-org/react";
import Product from "./product";
const ProductList = (props) => {

    function ReptileListItems() {
        const reptiles = ["alligator", "snake", "lizard"];
      
        return reptiles.map((reptile) => <li>{reptile}</li>);
    }

    return (
        <div>
            <Grid.Container gap={2} justify="center">
                {props.data.map((prod) => (
                    <Grid xs={5}>
                        <Product key={prod.id} data={prod}></Product>
                    </Grid>
                ))}   
            </Grid.Container>
         
                
        </div>
      );
    };
    
    export default ProductList;