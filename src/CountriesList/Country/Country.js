import React from 'react'
import "./Country.scss"
import flag from "../../img/1200px-Flag_of_Germany.svg.png"
function Country() {
    return (
        <div className="country-App">
            <div className="countryBox">
                <img src={flag} alt="flag"/>
                <div className="content">
                    <h3>Germany</h3>
                    <h4>Population:<span>81,770,300</span></h4>
                    <h4>Region:<span>Europe</span></h4>
                    <h4>Capital:<span>Berlin</span></h4>
                </div>
            </div>
        </div>
    )
}

export default Country
