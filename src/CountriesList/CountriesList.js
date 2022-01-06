import React from "react";
import "./CountriesList.scss";
import Country from "./Country/Country";
import search from "../img/icons8-search.svg";
function CountriesList(props) {
  return (
    <div className="countryListApp">
      <div className="countryListApp--container">
        <form action="#" method="GET or POST">
          <div className={props.theme ? "input-container" : "input-container2"}>
            <label htmlFor="fname">
              <img src={search} alt="search" />
            </label>
            <input
              type="text"
              name="FirstName"
              id="fname"
              placeholder="Search for a country"
            />
          </div>
          <select className={props.theme ? "select-container":"select-container2"} name="countries" id="countries">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          
        </form>

        <div className="countryList">
          {props.countriesListArray.map(
            countriesListArrayObj => <Country countryData = {countriesListArrayObj} themeHandler={props.theme} />
          )}

        </div>
      </div>
    </div>
  );
}

export default CountriesList;
