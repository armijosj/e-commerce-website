import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link
} from "react-router-dom";
import {
  NextUIProvider,
  Navbar,
  Text,
  Avatar,
  Dropdown,
  Button,
  Grid,
  Image,
  Spacer
} from "@nextui-org/react";

import { FaInstagram, FaFacebook } from 'react-icons/fa';


import Home from './pages/home.jsx';
import Listing from './pages/listing';
import Cart from './components/cart';


function App() {

  return (
    <>

      <NextUIProvider>
        <Navbar
          css={{ backgroundColor: "#0b16e0" }}
          isBordered
          maxWidth={"fluid"}
          variant={"sticky"}
        >
          <Navbar.Content enableCursorHighlight>
            <Navbar.Brand>
            <Image
              width={125} 
              src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
              alt="Default Image"
              objectFit="scale-down"
            />
            <Spacer x={2} />

            <Navbar.Link
              href="/"
              isActive={window.location.pathname === "/"}
            >
              Home
            </Navbar.Link>
            <Spacer x={2} />

            <Navbar.Link

              href="/listing"
              isActive={window.location.pathname === "/listing"}
            >
              Listing
            </Navbar.Link>
            </Navbar.Brand>
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Item>
              <Cart/>
            </Navbar.Item>
        </Navbar.Content>
        </Navbar>

        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />}
            />
            <Route
              exact
              path="/listing"
              element={<Listing />}
            />
          </Routes>
        </Router>
      </NextUIProvider>

      <footer> 
        <Grid.Container direction="row" gap={3} justify='center' 
        css={'position: absolute; bottom: 0;'}>
          <Grid xs={3}>
            <Button
              auto
              size="md"
              icon={<FaFacebook />}
              onClick={() => {
                window.location.href = "http://facebook.com";
              }}
            />
          </Grid>
          
          <Grid xs={3}>
            <Button
              auto
              bordered 
              color="gradient"
              size="md"
              icon={<FaInstagram />}
              onClick={() => {
                window.location.href = "http://instagram.com";
              }}
            />
          </Grid>
        </Grid.Container>
      </footer>

    </>

  )
}

export default App
