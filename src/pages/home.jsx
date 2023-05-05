import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Input, Spacer, Text } from "@nextui-org/react";
import Product from "../components/product";
import ProductList from "../components/productList";

const Home = () => {
  
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {    
    fetchProducts();
  }, [loading]);

  const fetchProducts = async () =>{
    await axios
      .get("https://fakestoreapi.com/products?limit=4")
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
      <h2>About us</h2>
      <Grid.Container direction="column">
          <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
          </Text>
          <Spacer />
      </Grid.Container>
      <h2>Products</h2>
      <div>
        {loading ? (
          <div>...Data Loading.....</div>
        ) : (
          <div>
            <ProductList data={products} ></ProductList>
            <br />
          </div>
        )}


      </div>
  </div>
  );
};

export default Home;