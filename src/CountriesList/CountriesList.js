import React from "react";
import "./CountriesList.scss";
import Country from "./Country/Country";
import search from "../img/icons8-search.svg";
function CountriesList() {
  return (
    <div className="countryListApp">
      <div>
        <form action="#" method="GET or POST">
         <div>
         <label for="fname">
            <img src={search} alt="search" />
          </label>
          <input
            type="text"
            name="FirstName"
            id="fname"
            placeholder="Search for a country"
          />
         </div>
          <select name="countries" id="countries">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </form>
      </div>
      <div className="countryList">
      <Country />
      <Country />
      <Country />
      <Country />
     
      </div>
   
    
    </div>
  );
}

export default CountriesList;
