import React, { useEffect, useState } from "react";
import { Text, Button, Grid, Card, Spacer, Input, Image, Loading } from "@nextui-org/react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductDetail from "../components/productDetail";

const Product = (props) => {
    const [searchparams] = useSearchParams();  
    const [productId] = useState(searchparams.get("id"));

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {    
      fetchProducts();
    }, [loading]);
  
    const fetchProducts = async () =>{
      await axios
        .get("https://fakestoreapi.com/products/" + productId.toString())
        .then(function (response) {
          if (response.status === 200) {
            setProduct(response.data);
            setLoading(false)
            console.log(product);
          }
        })
        .catch(function (error) {
            console.log(error);
            window.alert(error.response.data.message);
            setLoading(false);
          });
    }

    
    return (
        <div>
            {loading ? (
                <Loading size="xl" />
            ) : (
                <div>
                    <ProductDetail data={product}/>
                </div>
            )}
        </div>
        
      );
    };
    
    export default Product;