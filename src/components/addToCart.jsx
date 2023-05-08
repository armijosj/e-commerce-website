import React from "react";
import { Button } from "@nextui-org/react"

const AddToCart = (props) => {
    const addToCart = () => {
        let oldCart = JSON.parse(localStorage.getItem("cart"));
        if (oldCart == null) {
            localStorage.setItem("cart", JSON.stringify( [] ));
            oldCart = [];
        }
        if (props.data in oldCart){
            console.log("repeated!!")
        } else {
            localStorage.setItem("cart", JSON.stringify( [...oldCart, props.data]));
        }
    }

    return (
        <div>
            <Button auto onPress ={ () => {
                addToCart();
                }}>
                Add to Cart
            </Button>
        </div>
       
    );

}

export default AddToCart;
