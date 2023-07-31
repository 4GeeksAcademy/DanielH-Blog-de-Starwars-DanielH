import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import starwarslogo from "/workspaces/DanielH-Blog-de-Starwars-DanielH/src/img/starwarslogo.png"
import { BtnFavorite } from "/workspaces/DanielH-Blog-de-Starwars-DanielH/src/js/component/BtnFavorite.jsx";
import { Context } from "../store/appContext";
import "/workspaces/DanielH-Blog-de-Starwars-DanielH/src/styles/index.css";


export const Navbar = () => {
	const { store, actions } = useContext(Context);




	const handleRemoveFavorite = (uid) => {
		actions.removeFavorite(uid);
	};

	return (

		<nav className="navbar navbar-dark bg-dark mb-3">
			<div className="container-fluid d-flex justify-content-between mx-md-4 mt-4 mb-1">
				<div>
					<a className="navbar-brand" href="/"><img height="55" src={starwarslogo} /></a>
				</div>
				
				<div>
					<ul className="nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link link-secondary" href="/characters">Characters</a>
						</li>
						<li className="nav-item">
							<a className="nav-link link-secondary" href="/planets">Planets</a>
						</li>
						<li className="nav-item">
							<a className="nav-link link-secondary" href="/starships">Starships</a>
						</li>
						<li className="nav-item">

							<BtnFavorite />
						</li>
					</ul>

				</div>
			</div>
		</nav>
	);
};
