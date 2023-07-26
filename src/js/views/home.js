import React, { useContext, useState, useEffect } from "react"; // Importa useEffect para ejecutar la acción al montar el componente
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import starwarsHome from "/workspaces/DanielH-Blog-de-Starwars-DanielH/src/img/starwarsHome.jpg"


export const Home = () => {
  const { store, actions } = useContext(Context);

	
  

  return (
	
    <div className="container-fluid text-center my-5 bg-dark">
		<div className="cover-container d-flex w-75 p-4 mx-auto flex-column">
			<img className="d-block w-100" src={starwarsHome} alt="Star Wars timeline"/>
				
		</div>
	</div>
  );
};
