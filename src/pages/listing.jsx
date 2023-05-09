import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Input, Spacer, Text, Loading } from "@nextui-org/react";
import Product from "../components/product";

const Listing = () => {
  
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {    
    fetchProducts();
  }, [loading]);

  const fetchProducts = async () =>{
    await axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        if (response.status === 200) {
          setProducts(response.data);
          setLoading(false)
          console.log(products);
        }
      })
      .catch(function (error) {
          console.log(error);
          window.alert(error.response.data.message);
          setLoading(false);
        });
  }

  return (
  <div className="sign-in">
      <h1>e-commerce</h1>
      <h2>Products</h2>
      <div>
        {loading ? (
            <Loading size="xl" />
        ) : (
          <div>
            <Grid.Container gap={3} justify="center">
              {products.map((prod) => (
                <Product key={prod.id} data={prod}/>
              ))}
            </Grid.Container>
          </div>
        )}
      </div>
  </div>
  );
};

export default Listing;