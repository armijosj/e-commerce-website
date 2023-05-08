import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox, Grid } from "@nextui-org/react";
import { FaShoppingCart } from 'react-icons/fa';
import ProductDetail from "./productDetail";
import ProductCart from "./productCart";

const Cart = () => {
    const [visible, setVisible] = React.useState(false);
    const [myCart, setCart] = React.useState([]);

    const handler = () => {
        setVisible(true);
        setCart(JSON.parse(localStorage.getItem("cart")));
        if (myCart == null) {
          localStorage.setItem("cart", JSON.stringify( [] ));
        }
        console.log(JSON.parse(localStorage.getItem("cart")));
    };


  const closeHandler = () => {
    setVisible(false);
  };


  return (
    <div>
      <Button auto shadow onPress={handler}>
        <FaShoppingCart/>
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" b size={18}>
            Your Cart
          </Text>
        </Modal.Header>
        <Modal.Body>
          {myCart == null  ? (
            <Text>No items</Text>
          ) : (
            <Grid.Container gap={3} justify="center">
              {myCart.map((prod) => (
                      <ProductCart key={prod.id} data={prod}/>
              ))}
            </Grid.Container>
          )
          }
          
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={closeHandler}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Cart;
