import React from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
    const [visible, setVisible] = React.useState(false);


    const handler = () => {
        setVisible(true);
        console.log("closed");
    };

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
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
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              NextUI
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
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
