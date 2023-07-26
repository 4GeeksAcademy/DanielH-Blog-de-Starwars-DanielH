import React from "react";
import { Link } from "react-router-dom";
import starwarslogo  from "/workspaces/DanielH-Blog-de-Starwars-DanielH/src/img/starwarslogo.png"



export const Navbar = () => {
	return (
		<nav class="navbar navbar-dark bg-dark mb-3">
			<div class="container-fluid d-flex justify-content-between mx-md-4 mt-4 mb-1">
				<div>
					<a class="navbar-brand" href="/"><img height="55" src={starwarslogo}/></a>
				</div>
				<div>
					<ul class="nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
							<a class="nav-link link-secondary" href="/characters">Characters</a>
						</li>
						<li class="nav-item">
							<a class="nav-link link-secondary" href="/planets">Planets</a>
						</li>
						<li class="nav-item">
							<a class="nav-link link-secondary" href="/starships">Starships</a>
						</li>
						<li class="nav-item">
							<div class="dropdown">
								<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
								<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">0</span>
								</button>
								<ul class="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
									<li>
									<span class="dropdown-item">No favorites selected</span>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
