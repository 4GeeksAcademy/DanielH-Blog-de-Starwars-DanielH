const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			

			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorite: (title) => {const favorites = getStore().favorites;
				if (!favorites.includes(title)) {
				  setStore({ favorites: [...favorites, title] });
				  // Guardar en localStorage
				  localStorage.setItem("favorites", JSON.stringify([...favorites, title]));
			}},
			
			removeFavorite: (id) => {
				const updatedFavorites = getStore().favorites.filter((uid, i) => i !== id);
				setStore({ favorites: updatedFavorites });
				localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
			  },
			
			  removeAllFavorites: () => {
				setStore({ favorites: [] });
				localStorage.removeItem("favorites");
			  },

		
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				
			},
			

   	    personajesFetch: async  () => {

    			

    		if (localStorage.getItem("personajesLocal") !== null) {
      			
    		}else {   

        		const response = await fetch ("https://www.swapi.tech/api/people/")
          		
        	if (response.ok) {
            	const data = await response.json()
            	
            	localStorage.setItem("personajesLocal", JSON.stringify(data))
	        }  else {
				console.log(`error:` , response.status, response.statusText)
           	          
           	}
    		}

    	},

		planetasFetch: async () =>{

			if (localStorage.getItem("planetasLocal") !== null) {
      			
    		}else {   

        		const response = await fetch ("https://www.swapi.tech/api/planets/")
          		
        	if (response.ok) {
            	const data = await response.json()
            	
            	localStorage.setItem("planetasLocal", JSON.stringify(data))
	        }  else {
				console.log(`error:` , response.status, response.statusText)
           	          
           	}
    		}


		},

		navesFetch: async () =>{

			if (localStorage.getItem("navesLocal") !== null) {
      			
    		}else {   

        		const response = await fetch ("https://swapi.tech/api/starships/")
          		
        	if (response.ok) {
            	const data = await response.json()
            	
            	localStorage.setItem("navesLocal", JSON.stringify(data))
	        }  else {
				console.log(`error:` , response.status, response.statusText)
           	          
           	}
    		}


		},

					
			}
			
			
		}
	;
};

export default getState;
