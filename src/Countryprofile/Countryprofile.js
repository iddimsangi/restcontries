import React from 'react'
import "./Countryprofile.scss"
import flag from "../img/1200px-Flag_of_Germany.svg.png"
import { useLocation, Link} from 'react-router-dom';
function Countryprofile({theme}) {
    let location = useLocation()
  
    let x = Object.keys(location.state.currencies)[0];
    console.log((location.state.currencies))
    console.log(Object.keys(location.state.currencies))
    console.log(location.state.languages)
    console.log(Object.values(location.state.languages))

    return (
        <div className="container">
            <Link to="/">
            <button className="container-btn">Bacck</button>
            </Link>
            
            <div className="container--box">
                <img src={location.state.flags.png} className="container--box-img" alt="flag"/>
                <div className={theme ? "container--box-contents":"container--box-contents-dark" }>
                    <h2>{location.state.name.common}</h2>
                    <div className="inner-box">
                        <ul className="inner-box--l1">
                            <li>
                                Native Name:<span> {location.state.name.common}</span>
                            </li>
                            <li>
                               Population:<span> {location.state.population}</span>
                            </li>
                            <li>
                                Region:<span> {location.state.region}</span>
                            </li>
                            <li>
                                Sub Region:<span> {location.state.subregion}</span>
                            </li>
                            <li>
                                Capital:<span> {location.state.capital}</span>
                            </li>
                        </ul>
                        <ul className="inner-box--l2">
                            <li>
                                Top Level Domain:<span> {location.state.tld}</span>
                            </li>
                            <li>
                               Currencies:<span> {Object.keys(location.state.currencies).map(key =>  {
                                        return location.state.currencies[key].name
                               }).join(', ')}</span>
                               {/* Currencies:<span>YYY</span> */}
                            </li>
                            <li>
                                Languages: <span> {Object.values(location.state.languages).map(key =>{  
                                    return key
                                }).join(', ')}</span>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="content--footer">
                        <h3>Border Countries:</h3>
                        <button className="content--footer-btn">France</button>
                        <button className="content--footer-btn">Germany</button>
                        <button className="content--footer-btn">Nerthelands</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countryprofile
