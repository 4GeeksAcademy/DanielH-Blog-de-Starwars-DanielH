// import React from "react";
// import { useContext } from "react";
// import { Context } from "../store/appContext";

// export const BtnFavorite = () => {

//   const [store, action] = useContext(Context);

//             let myFavorites = store.favorites
//           console.log (myFavorites)

//           return (
            
//             <div className="dropdown">
//               <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Favorites  
//                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
//                   {myFavorites.length}
//                 </span>
//               </button>
//               <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
//                 {myFavorites.length === 0 ? (
//                     <li><span className="dropdown-item">No favorites selected</span></li>
//                 ) : (
//                   myFavorites.map((item) => (
//                     <li key={item.id} className="d-flex align-items-center">
//                       <span className="dropdown-item">{item.id}</span>
//                       <button type="button" className="btn btn-outline-danger me-2"
//                         onClick={() => actions.removeFavorite(item, myFavorites)}>
//                         <i className="fa fa-trash"></i>
//                       </button>
//                     </li>
//                   ))
//                 )}
//               </ul>
//             </div>
//           );
//         };

        import React, {useContext} from "react";
        import {Context} from "../store/appContext.js";

        export const BtnFavorite = () => {
        const {store, actions} = useContext(Context);
        const myFavorites = store.favorites;
        const handleRemoveAllFavorites = () => {
            actions.removeAllFavorites();
          };

        return (
            <div className="dropdown">
                <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >
                Favorites
                </button>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">{myFavorites.length}</span>

                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                
                    {myFavorites.length === 0 ? (
                        <li><span className="dropdown-item">No favorites selected</span></li>
                    ) : (
                        myFavorites.map((item, id) => (
                            <li key={id} className="d-flex align-items-center">
                                <span className="dropdown-item">{item}</span>
                                <button
                                type="button"
                                className="btn btn-oytline-danger me-2"
                                onClick={(e) =>{
                                   e.stopPropagation();
                                   actions.removeFavorite(id)}}
                                >
                                <i className="fa fa-trash text-danger"></i>
                                </button>
                            </li>
                        )
                       )
                    )
                    }
                    <li>
                    <button
                        className="btn btn-danger btn-sm m-2"
                        onClick={handleRemoveAllFavorites}
                        disabled={myFavorites.length === 0}
                    >
                        Remove All Favorites
                    </button>
                    </li>
                </ul>
            </div>
        )
        }







































      //   return (
      //     <div className="dropdown">
      //       <button
      //         className="btn btn-secondary dropdown-toggle"
      //         type="button"
      //         data-bs-toggle="dropdown"
      //         aria-expanded="false"
      //       >
      //         Favorites
      //         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
      //           {store.favorites.length}
      //         </span>
      //       </button>
      //       <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
      //         {store.favorites.length === 0 ? (
      //           <li>
      //             <span className="dropdown-item">No favorites selected</span>
      //           </li>
      //         ) : (
      //           store.favorites.map((favCharacter) => (
      //             <li key={favCharacter.uid} className="d-flex align-items-center">
      //               <span className="dropdown-item">{favCharacter.name}</span>
      //               <button
      //                 type="button"
      //                 className="btn btn-outline-danger me-2"
      //                 onClick={() => actions.removeFavorite(favCharacter.uid)}
      //               >
      //                 <i className="fa fa-trash"></i>
      //               </button>
      //             </li>
      //           ))
      //         )}
      //       </ul>
      //     </div>
      //   );
      // };