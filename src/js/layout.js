import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";

import { Home } from "./views/home";
import { Characters } from "./views/Characters.js";
import { Detailscharacters } from "./views/Detailscharacters";
import { Planets} from "/workspaces/DanielH-Blog-de-Starwars-DanielH/src/js/views/Planets.js"
import { DetailsPlanets} from "/workspaces/DanielH-Blog-de-Starwars-DanielH/src/js/views/DetailsPlanets.jsx"
import { Starships } from "/workspaces/DanielH-Blog-de-Starwars-DanielH/src/js/views/Starships.jsx";
import { DetailsStarships } from "/workspaces/DanielH-Blog-de-Starwars-DanielH/src/js/views/DetailsStarships.jsx";
import injectContext from "./store/appContext";
import { BtnFavorite } from "/workspaces/DanielH-Blog-de-Starwars-DanielH/src/js/component/BtnFavorite.jsx";
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
						<Route path="/planets" element={ <Planets /> } />
						<Route path="/planets/:planetUid" element={<DetailsPlanets />} />
						<Route path="/starships" element={ <Starships /> } />
						<Route path="/starships/:starshipsUid" element={ <DetailsStarships />} /> 
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
