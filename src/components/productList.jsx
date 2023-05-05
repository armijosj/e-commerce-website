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

            {props.data.map((prod) => (
                    <Product key={prod.id} data={prod}></Product>
                ))}            
                
        </div>
      );
    };
    
    export default ProductList;