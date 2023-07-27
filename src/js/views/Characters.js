import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/demo.css";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const person = JSON.parse(localStorage.getItem('usersLocal'));
	console.log(person)
	const characters = person && person.results ? person.results : [];
	console.log(characters)

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
                <img alt="" src="" />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <div className="d-flex justify-content-between">
					<Link to={`/characters/${character.uid}`}>	
                    <button className="btn btn-secondary" href="/characters/1">Details</button>
					</Link>
					<Link to="">
                    <button className="btn btn-outline-warning" href="/characters">
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