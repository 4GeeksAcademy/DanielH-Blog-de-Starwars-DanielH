import React from "react";

export const BtnFavorite = () => {

let myFavorites = [];
// let myFavorites = store.favoritos

return( 
    <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Favoritos
  </button>
  <span></span>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Acción</a></li>
    <li><a className="dropdown-item" href="#">Otra acción</a></li>
    <li><a className="dropdown-item" href="#">Algo más aqui</a></li>
  </ul>
</div>

)
}