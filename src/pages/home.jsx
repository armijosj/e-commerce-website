import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, Input, Spacer, Text, Loading, Card, Col } from "@nextui-org/react";
import Product from "../components/product";

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
         
        <Spacer y={3}/>    
        <Card>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col>
            <Text h1 weight="bold" transform="uppercase" color="#ffffffAA">
              About us
            </Text>
            <Text h4 color="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A iaculis at erat pellentesque. Ultricies tristique nulla aliquet enim tortor at auctor. Enim tortor at auctor urna nunc id cursus. Ipsum nunc aliquet bibendum enim facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Velit laoreet id donec ultrices tincidunt arcu non. Id leo in vitae turpis massa sed elementum tempus. Sed arcu non odio euismod lacinia at quis risus sed. Vel pharetra vel turpis nunc eget lorem dolor sed.            </Text>
          </Col>
        </Card.Header>
        <Card.Image
          src="https://nextui.org/images/card-example-4.jpeg"
          objectFit="cover"
          width="100%"
          height={340}
          alt="Card image background"
        />
      </Card>
      <Spacer y={2}/>    

      <Text h1 weight="bold" transform="uppercase" color="#ffffffAA">
              About us
      </Text>      
      <div>
        {loading ? (
          <Loading size="xl" />

        ) : (
          <div>
            <Grid.Container gap={3} justify="center">
                    {products.map((prod) => (
                            <Product key={prod.id} data={prod}></Product>
                    ))}
            </Grid.Container>
          </div>
        )}


      </div>
  </div>
  );
};

export default Home;