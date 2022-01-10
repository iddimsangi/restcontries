import React from 'react'
import {  Link } from 'react-router-dom';

import "./Country.scss"
import flag from "../../img/1200px-Flag_of_Germany.svg.png"

function Country(props) {

    return (
        <div className="country-App">
            <div className={props.themeHandler ? "countryBox" : "countryBoxV2"}>
                <Link to="Countryprofile/" state={props.countryData}>
                <img src={props.countryData.flags.png} alt="flag" style={{
                    objectFit: "cover",
                    width: "100%",
                    height: 150
                }} />
                </Link>
              
                {/* {props.countryData.flag} */}
                <div className="content">
                    <h3>{props.countryData.name.common}</h3>
                    <h4>Population:<span>{props.countryData.population}</span></h4>
                    <h4>Region:<span>{props.countryData.region}</span></h4>
                    <h4>Capital:<span>{props.countryData.capital}</span></h4>
                </div>
            </div>
        </div>
    )
}

export default Country
// countriesListArrayObj.name.common