import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/demo.css";
import { BtnFavorite } from "/workspaces/DanielH-Blog-de-Starwars-DanielH/src/js/component/BtnFavorite.jsx";


export const Characters = () => {
	const { store, actions } = useContext(Context);
  
 
	 
	const person = JSON.parse(localStorage.getItem('personajesLocal'));
	console.log(person)

	const characters = person && person.results ? person.results : [];
	console.log(characters.uid)
  console.log(characters)
  


  const urlImage = "https://starwars-visualguide.com/assets/img/characters/";
  const handleOnErrorImg = (e) => {e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"};




	return (
		<div className="container bg-dark mb-3">
      <h1 className="text-light text-center pt-4">Characters</h1>
      {characters.length === 0 ? (
        "Leyendo Datos"
      ) : (
        <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-2">
          {characters.map((character) => (
            <div className="col" key={character.uid}>
              <h2>Item {character.uid}</h2>
              <div className="card border-dark my-3 mx-2 text-bg-dark">
              <img alt="" src={`${urlImage}${character.uid}.jpg`} onError={handleOnErrorImg}></img>
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <div className="d-flex justify-content-between">
					<Link to={`/characters/${character.uid}`}>	
                    <button className="btn btn-secondary" >Details</button>
					</Link>
          <button
                      className="btn btn-outline-warning"
                      onClick={() => {
                        if (!store.favorites.some((fav) => fav.name === character.name)) {
                          actions.addFavorite(character);
                        } else {
                          actions.removeFavorite(character.uid);
                        }
                      }}
                    >
                      <i
                        className={`far fa-heart fa-lg ${
                          store.favorites.some((fav) => fav.name === character.name)
                            ? "text-danger"
                            : ""
                        }`}
                      ></i>
                    </button>
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