import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { SpinnerLaser } from "/workspaces/DanielH-Blog-de-Starwars-DanielH/src/js/component/SpinnerLaser.jsx";

export const Detailscharacters = () => {
	const { store, actions } = useContext(Context);

	const params = useParams();
	console.log(params)

	const characterUid = params.characterUid - 1;
	console.log(characterUid)

	const characterView = JSON.parse(localStorage.getItem(`personajesLocal`));
	console.log( characterView);

	const characterArray = characterView && characterView.message === "ok" ? characterView.results : [];
	console.log(characterArray)
	
	const hostCharacter = characterArray[characterUid].url;
	console.log(hostCharacter)

	
	const urlImage = "https://starwars-visualguide.com/assets/img/characters/";
	const handleOnErrorImg = (e) => {e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"};
  

	const [personaje, setPersonaje] = useState([]);


	const fetchCharacterData = async  () => {
        try {
			const response = await fetch(hostCharacter);
			if (response.ok) {
				const data = await response.json();
				// console.log(data);
				// setPersonaje(data.result);
				setTimeout(() => {
					setPersonaje(data.result);
					setIsLoading(false); // Cambiar el estado de carga a falso cuando los datos están listos
				  }, 7000);
			} else {
				console.log("Error:", response.status, response.statusText);
			}
		} catch (error) {
			console.log("Error:", error);
		}
	};

	useEffect(() => {
		fetchCharacterData();
	}, [hostCharacter]);
console.log(personaje)
	


	return (
		<div className="container bg-dark">
		  <div className="card mb-3  bg-dark text-light">
		  {Object.keys(personaje).length === 0 ? (
			<SpinnerLaser/>
) : (
  	<div className="row g-0">
		<div className="col-md-7 col-lg-6 col-xl-5">
        	<img className="img-fluid rounded-start" src={`${urlImage}${params[`characterUid`]}.jpg`} onError={handleOnErrorImg}></img>
    	</div>       
        <div className="col-md-5 col-lg-6 col-xl-7">
        	<div className="card-body">
				<h1>{personaje.properties.name}</h1>
				<p> </p>
				<p><strong>Height: </strong>{personaje.properties.height}</p>
				<p><strong>Mass: </strong>{personaje.properties.mass}</p>
				<p><strong>Hair color: </strong>{personaje.properties.hair_color}</p>
				<p><strong>Skin color: </strong>{personaje.properties.skin_color}</p>
				<p><strong>Eye color: </strong>{personaje.properties.eye_color}</p>
				<p><strong>Birth year: </strong>{personaje.properties.birth_year}</p>
				<p><strong>Gender: </strong>{personaje.properties.gender}</p>
      		</div>
    	</div>	
	</div>
)}
			
		  </div>
		</div>
	  );
	  
}

