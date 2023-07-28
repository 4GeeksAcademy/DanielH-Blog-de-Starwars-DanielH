const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			

			favorites: [],							
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorite: (title) => {
				setStore({favorites: [...getStore().favorites, title]})
			},
			removeFavorite: (id) => {
				setStore({favorites: getStore().favorites.filter((item, i) => {
					return i != id;
					})})
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
