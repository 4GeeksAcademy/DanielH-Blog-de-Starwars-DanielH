import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container bg-dark mb-3">
			<h1 classNameName="text-light text-center pt-4">Characters</h1>
			<div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
				<div className="col">
				<h2>Item 0</h2>
					<div className="card border-dark my-3 mx-2 text-bg-dark">
					<img alt="" src="https://starwars-visualguide.com/assets/img/characters/1.jpg"/>
						<div className="card-body">
							<h5 className="card-title">Luke Skywalker</h5>
							<div className="d-flex justify-content-between">
								<a className="btn btn-secondary" href="/characters/1">Details</a>
								<a className="btn btn-outline-warning" href="/characters">
									<i className="far fa-heart fa-lg"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			<div className="col">
				<h2>Item 1</h2>
				<div className="card border-dark my-3 mx-2 text-bg-dark">
					<img alt="" src="https://starwars-visualguide.com/assets/img/characters/2.jpg/"/>
						<div className="card-body">
					<h5 className="card-title">C-3PO</h5>
						<div className="d-flex justify-content-between">
							<a className="btn btn-secondary" href="/characters/2">Details</a>
							<a className="btn btn-outline-warning" href="/characters"><i className="far fa-heart fa-lg"></i></a>
						</div>
				</div>
			</div>
		</div>
	<div className="col">
			<h2>Item 2</h2>
		<div className="card border-dark my-3 mx-2 text-bg-dark">
				<img alt="" src="https://starwars-visualguide.com/assets/img/characters/3.jpg"/>
			<div className="card-body">
				<h5 className="card-title">R2-D2</h5>
				<div className="d-flex justify-content-between">
					<a className="btn btn-secondary" href="/characters/3">Details</a>
					<a className="btn btn-outline-warning" href="/characters"><i className="far fa-heart fa-lg"></i></a>
				</div>
			</div>
		</div>
	</div>
	<div className="col">
		<h2>Item 3</h2>
			<div className="card border-dark my-3 mx-2 text-bg-dark">
				<img alt="" src="https://starwars-visualguide.com/assets/img/characters/4.jpg"/>
					<div className="card-body">
						<h5 className="card-title">Darth Vader</h5>
							<div className="d-flex justify-content-between">
								<a className="btn btn-secondary" href="/characters/4">Details</a>
								<a className="btn btn-outline-warning" href="/characters"><i className="far fa-heart fa-lg"></i></a>
							</div>
					</div>
			</div>
	</div>
	<div className="col">
		<h2>Item 4</h2>
			<div className="card border-dark my-3 mx-2 text-bg-dark">
				<img alt="" src="https://starwars-visualguide.com/assets/img/characters/5.jpg/"/>
					<div className="card-body">
						<h5 className="card-title">Leia Organa</h5>
							<div className="d-flex justify-content-between">
								<a className="btn btn-secondary" href="/characters/5">Details</a>
								<a className="btn btn-outline-warning" href="/characters"><i className="far fa-heart fa-lg"></i></a>
							</div>
					</div>
			</div>
	</div>
	<div className="col">
		<h2>Item 5</h2>
			<div className="card border-dark my-3 mx-2 text-bg-dark">
				<img alt="" src="https://starwars-visualguide.com/assets/img/characters/6.jpg"/>
					<div className="card-body">
						<h5 className="card-title">Owen Lars</h5>
							<div className="d-flex justify-content-between">
								<a className="btn btn-secondary" href="/characters/6">Details</a>
								<a className="btn btn-outline-warning" href="/characters"><i className="far fa-heart fa-lg"></i></a>
							</div>
					</div>
			</div>
	</div>
	<div className="col">
		<h2>Item 6</h2>
			<div className="card border-dark my-3 mx-2 text-bg-dark">
				<img alt="" src="https://starwars-visualguide.com/assets/img/characters/7.jpg"/>
					<div className="card-body">
						<h5 className="card-title">Beru Whitesun lars</h5>
							<div className="d-flex justify-content-between"><a className="btn btn-secondary" href="/characters/7">Details</a>
								<a className="btn btn-outline-warning" href="/characters"><i className="far fa-heart fa-lg"></i></a>
							</div>
					</div>
			</div>
	</div>
	<div className="col">
		<h2>Item 7</h2>
			<div className="card border-dark my-3 mx-2 text-bg-dark">
				<img alt="" src="https://starwars-visualguide.com/assets/img/characters/8.jpg"/>
					<div className="card-body">
						<h5 className="card-title">R5-D4</h5>
							<div className="d-flex justify-content-between"><a className="btn btn-secondary" href="/characters/8">Details</a>
								<a className="btn btn-outline-warning" href="/characters"><i className="far fa-heart fa-lg"></i></a>
							</div>
					</div>
			</div>		
	</div>
	<div className="col">
		<h2>Item 8</h2>
			<div className="card border-dark my-3 mx-2 text-bg-dark">
				<img alt="" src="https://starwars-visualguide.com/assets/img/characters/9.jpg"/>
					<div className="card-body">
						<h5 className="card-title">Biggs Darklighter</h5>
							<div className="d-flex justify-content-between">
								<a className="btn btn-secondary" href="/characters/9">Details</a>
								<a className="btn btn-outline-warning" href="/characters"><i className="far fa-heart fa-lg"></i></a>
							</div>
					</div>
			</div>
	</div>
	<div className="col">
		<h2>Item 9</h2>
			<div className="card border-dark my-3 mx-2 text-bg-dark">
				<img alt="" src="https://starwars-visualguide.com/assets/img/characters/10.jpg"/>
					<div className="card-body">
						<h5 className="card-title">Obi-Wan Kenobi</h5>
							<div className="d-flex justify-content-between"><a className="btn btn-secondary" href="/characters/10">Details</a>
							<a className="btn btn-outline-warning" href="/characters"><i className="far fa-heart fa-lg"></i></a>
							</div>
					</div>
			</div>
	</div>
	</div>
	</div>
	);
};
