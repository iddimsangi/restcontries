import React from "react";
import "./CountriesList.scss";
import Country from "./Country/Country";
import search from "../img/icons8-search.svg";
function CountriesList(props) {
  const options = [
    { value: '2', label: 'America' },
    { value: '3', label: 'Africa' },
    { value: '4', label: 'Asia' },
    { value: '5', label: 'europe' },
    { value: '6', label: 'Oceania' }
  ];

  return (
    <div className="countryListApp">
      <div className="countryListApp--container">
        <form action="#">
          <div className={props.theme ? "input-container" : "input-container2"}>
            <label htmlFor="gsearch">
              <img src={search} alt="search" />
            </label>
            <input
            type="search" 
            id="gsearch" 
            name="gsearch"
            placeholder="Search for a country"
            value={props.term}
            onChange ={ (e) => props.searchTermHandler(e.target.value)}
            />
          </div>
          {/* <input type="text"
          value={props.term}
          onChange ={ (e) => props.searchTermHandler(e.target.value)}
          placeholder="search"></input> */}
          <select className={props.theme ? "select-container":"select-container2"} name="countries" id="countries">
            <option value="0">Filter by region</option>
            {options.map(option =>{
              console.log(option.label);
              return <option  value={option.value}>{option.label}</option>
            })}
            {/* <option onClick={getValue} value="1">Africa</option>
            <option value="2">America</option>
            <option value="3">Asia</option>
            <option value="4">Europe</option>
            <option value="5">Oceania</option> */}
          </select>       
        </form>

        <div className="countryList">
          {props.countriesListArray.map(
            countriesListArrayObj => <Country countryData = 
            {countriesListArrayObj}
             themeHandler={props.theme} 
             key ={countriesListArrayObj.area}
             />
          )}

        </div>
      </div>
    </div>
  );
}

export default CountriesList;
