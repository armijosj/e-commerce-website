import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Input, Spacer, Text } from "@nextui-org/react";

const Home = () => {
  
    useEffect(() => {
        
        const fetchProducts = async () =>{
              await axios
                .get("https://fakestoreapi.com/products?limit=4")
                .then(function (response) {
                  console.log(response);
                  if (response.data.status === 200) {
                    return response.data;
                  }
                })
                .catch(function (error) {
                    console.log(error);
                    window.alert(error.response.data.message);
                  });
        }

        fetchProducts();

    }, []);



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
    </div>
    );
};

async function getProducts(props) {
  let res = Promise.resolve(
    await axios
      .get("https://fakestoreapi.com/products?limit=4", props)
      .then(function (response) {
        console.log(response);
        if (response.data.status === 200) {
          return response.data;
        }
      })
      .catch(function () {
        if (props.email == "" || props.password == "") {
          window.alert("Please enter your email and password.");
        } else {
          window.alert("Invalid credentials. Please try again.");
        }
      })
  ).then((data) => {
    if (data === undefined) {
      console.log("failed response");
    }
  });
}

export default Home;