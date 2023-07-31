import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/demo.css";

export const Starships = () => {
	const { store, actions } = useContext(Context);
  
 
	 
	const nave = JSON.parse(localStorage.getItem('navesLocal'));
	console.log(nave)

	const starships = nave && nave.results ? nave.results : [];
	console.log(starships.uid)
  console.log(starships)
  


  const urlImage = "https://starwars-visualguide.com/assets/img/starships/";
  const handleOnErrorImg = (e) => {e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"};




	return (
		<div className="container bg-dark mb-3">
      <h1 className="text-light text-center pt-4">starships</h1>
      {starships.length === 0 ? (
        "Leyendo Datos"
      ) : (
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
          {starships.map((starship) => (
            <div className="col" key={starship.uid}>
              <h2>Item {starship.uid}</h2>
              <div className="card border-dark my-3 mx-2 text-bg-dark">
              <img alt="" src={`${urlImage}${starship.uid}.jpg`} onError={handleOnErrorImg}></img>
                <div className="card-body">
                  <h5 className="card-title">{starship.name}</h5>
                  <div className="d-flex justify-content-between">
					<Link to={`/starships/${starship.uid}`}>	
                    <button className="btn btn-secondary" >Details</button>
					</Link>
					<Link to="">
                    <button className="btn btn-outline-warning" onClick={() => {                        
                          actions.addFavorite(starship.name);
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