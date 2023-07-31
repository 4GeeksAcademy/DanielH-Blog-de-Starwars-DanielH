import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/demo.css";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	const planet = JSON.parse(localStorage.getItem('planetasLocal'));
	console.log(planet)

	const planets = planet && planet.results ? planet.results : [];
	console.log(planets)

  const urlImage = "https://starwars-visualguide.com/assets/img/planets/";
	const handleOnErrorImg = (e) => {e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"};

	return (
		<div className="container bg-dark mb-3">
      <h1 className="text-light text-center pt-4">Planets</h1>
      {planets.length === 0 ? (
        "Leyendo Datos"
      ) : (
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
          {planets.map((planeta) => (
            <div className="col" key={planeta.uid}>
              <h2>Item {planeta.uid}</h2>
              <div className="card border-dark my-3 mx-2 text-bg-dark">
                <img alt="" src={`${urlImage}${planeta.uid}.jpg`} onError={handleOnErrorImg}></img>
                <div className="card-body">
                  <h5 className="card-title">{planeta.name}</h5>
                  <div className="d-flex justify-content-between">
					<Link to={`/planets/${planeta.uid}`}>	
                    <button className="btn btn-secondary" >Details</button>
					</Link>
					<Link to="">
                    <button className="btn btn-outline-warning" onClick={() => {                        
                          actions.addFavorite(planeta.name);
                         }} >
                      <i className="far fa-heart fa-lg"></i>
                    </button>
					</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};