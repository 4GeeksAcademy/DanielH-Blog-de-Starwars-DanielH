import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailsStarships = () => {
	const { store, actions } = useContext(Context);

	const params = useParams();
    console.log(params)

//   const starshipData = starshipsArray.find((starship) => starship.uid === starshipsUid);
//   const hostStarships = starshipData && starshipData.url;

	const starshipUid = params.starshipsUid;
	console.log(starshipUid)

	const starshipView = JSON.parse(localStorage.getItem(`navesLocal`));
	console.log(starshipView);

	const starshipsArray = starshipView && starshipView.message === "ok" ? starshipView.results : [];
	console.log(starshipsArray)
	
	const hostStarships = starshipsArray[starshipUid].url;
	console.log(hostStarships)

    const urlImage = "https://starwars-visualguide.com/assets/img/starships/";
	const handleOnErrorImg = (e) => {e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"};

	const [nave, setNave] = useState({});

	const fetchStarshipsData = async  () => {
        try {
			const response = await fetch(hostStarships);
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				setNave(data.result);
			} else {
				console.log("Error:", response.status, response.statusText);
			}
		} catch (error) {
			console.log("Error:", error);
		}
	};

	useEffect(() => {
		fetchStarshipsData();
	}, [hostStarships]);
console.log(nave)
	


	return (
		<div className="container bg-dark">
            <div className="card mb-3  bg-dark text-light">

            {Object.keys(nave).length === 0 ? (
            "Leyendo Datos"
             ) : (
                <>
                
            <div className="row g-0">
                <div className="col-md-7">
                    <img className="img-fluid rounded-start" src={`${urlImage}${params -1[`starshipUid`]}.jpg`} onError={handleOnErrorImg}/>
                </div>
                <div className="col-md-3">
                    <div className="card-body">
                        <h1>{nave.properties.name}</h1>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-2">
                    <h5>Name</h5>
                    <p>{nave.properties.name}</p>
                </div>
                <div className="col-2">
                    <h5>Population</h5>
                    <p>{nave.properties.population}</p>
                </div>
                <div className="col-2">
                    <h5>Terrain</h5>
                    <p>{nave.properties.terrain}</p>
                </div>
                <div className="col-2">
                    <h5>Climate</h5>
                    <p>{nave.properties.climate}</p>
                </div>
                <div className="col-2">
                    <h5>Diameter</h5>
                    <p>{nave.properties.diameter}</p>
                </div>
                <div className="col-2">
                    <h5>Rotation Period</h5>
                    <p>{nave.properties.rotation_period}</p>
                </div>
            </div>
            </>

)}
			
		  </div>
	    </div>
	  );
	  
}