import { useState } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import {
	NextUIProvider,
	Navbar,
	Button,
	Image,
	Spacer,
	Row,
} from "@nextui-org/react";

import { FaInstagram, FaFacebook } from "react-icons/fa";

import Home from "./pages/home.jsx";
import Listing from "./pages/listing";
import Cart from "./components/cart";
import Product from "./pages/product";

function App() {
	return (
		<>
			<NextUIProvider>

				{/* Navbar */}
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
								isActive={
									window.location.pathname === "/listing"
								}
							>
								Our Products
							</Navbar.Link>
						</Navbar.Brand>
					</Navbar.Content>
					<Navbar.Content>
						<Navbar.Item>
							<Cart />
						</Navbar.Item>
					</Navbar.Content>
				</Navbar>

				{/* Routing */}
				<Router>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/listing" element={<Listing />} />
						<Route exact path="/product" element={<Product />} />
					</Routes>
				</Router>
			</NextUIProvider>

			{/* Social Media */}			
			<footer>
				<Spacer y={3} />
				<div style={{ position: "absolute", bottom: 0, left: "43%" }}>
					<Row>
						<Button
							auto
							size="md"
							icon={<FaFacebook />}
							onPress={() => {
								window.location.href = "http://facebook.com";
							}}
						/>
						<Spacer x={3} />
						<Button
							auto
							bordered
							size="md"
							color="gradient"
							icon={<FaInstagram />}
							onPress={() => {
								window.location.href = "http://instagram.com";
							}}
						/>
					</Row>
				</div>
			</footer>
		</>
	);
}

export default App;
