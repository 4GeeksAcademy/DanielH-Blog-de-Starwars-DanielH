import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";

import { Home } from "./views/home";
import { Characters } from "./views/Characters.js";
import { Detailscharacters } from "./views/Detailscharacters";
import injectContext from "./store/appContext";

import { Navbar } from "/workspaces/DanielH-Blog-de-Starwars-DanielH/src/js/component/Navbar.jsx";
import { Footer } from "./component/Footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters" element={ <Characters /> } />
						<Route path="/characters/:characterUid"  element={<Detailscharacters />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
