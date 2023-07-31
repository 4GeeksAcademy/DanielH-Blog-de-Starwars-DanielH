import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { SpinnerLaser } from "/workspaces/DanielH-Blog-de-Starwars-DanielH/src/js/component/SpinnerLaser.jsx";

export const DetailsPlanets = () => {
	const { store, actions } = useContext(Context);

	const params = useParams();

	const planetUid = params.planetUid - 1;
	console.log(planetUid)

	const planetView = JSON.parse(localStorage.getItem(`planetasLocal`));
	console.log(planetView);

	const planetsArray = planetView && planetView.message === "ok" ? planetView.results : [];
	console.log(planetsArray)
	
	const hostPlanets = planetsArray[planetUid].url;
	console.log(hostPlanets)

    const urlImage = "https://starwars-visualguide.com/assets/img/planets/";
	const handleOnErrorImg = (e) => {e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"};

	const [planeta, setPlaneta] = useState([]);

	const fetchPlanetsData = async  () => {
        try {
			const response = await fetch(hostPlanets);
			if (response.ok) {
				const data = await response.json();
				// console.log(data);
				// setPlaneta(data.result);
                setTimeout(() => {
					setPlaneta(data.result);
					setIsLoading(false); 
				  }, 7000);
			} else {
				console.log("Error:", response.status, response.statusText);
			}
		} catch (error) {
			console.log("Error:", error);
		}
	};

	useEffect(() => {
		fetchPlanetsData();
	}, [hostPlanets]);
console.log(planeta)
	


	return (
		<div className="container bg-dark">
            <div className="card mb-3  bg-dark text-light">

            {Object.keys(planeta).length === 0 ? (
            <SpinnerLaser/>
             ) : (
                <>
                
            <div className="row g-0">
                <div className="col-md-7">
                    <img className="img-fluid rounded-start" src={`${urlImage}${params[`planetUid`]}.jpg`} onError={handleOnErrorImg}/>
                </div>
                <div className="col-md-3">
                    <div className="card-body">
                        <h1>{planeta.properties.name}</h1>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-2">
                    <h5>Name</h5>
                    <p>{planeta.properties.name}</p>
                </div>
                <div className="col-2">
                    <h5>Population</h5>
                    <p>{planeta.properties.population}</p>
                </div>
                <div className="col-2">
                    <h5>Terrain</h5>
                    <p>{planeta.properties.terrain}</p>
                </div>
                <div className="col-2">
                    <h5>Climate</h5>
                    <p>{planeta.properties.climate}</p>
                </div>
                <div className="col-2">
                    <h5>Diameter</h5>
                    <p>{planeta.properties.diameter}</p>
                </div>
                <div className="col-2">
                    <h5>Rotation Period</h5>
                    <p>{planeta.properties.rotation_period}</p>
                </div>
            </div>
            </>

)}
			
		  </div>
	    </div>
	  );
	  
}