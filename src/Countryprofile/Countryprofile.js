import React from 'react'
import "./Countryprofile.scss"
import flag from "../img/1200px-Flag_of_Germany.svg.png"
import { useLocation } from 'react-router-dom';
function Countryprofile() {
    let location = useLocation()
    console.log(location.state)
    return (
        <div className="container">
            <button className="container-btn">Bacck</button>
            <div className="container--box">
                <img src={flag} className="container--box-img" alt="flag"/>
                <div className="container--box-contents">
                    <h2>Belgium</h2>
                    <div className="inner-box">
                        <ul className="inner-box--l1">
                            <li>
                                Native Name:<span>Belgium</span>
                            </li>
                            <li>
                               Population:<span>11,319,511</span>
                            </li>
                            <li>
                                Region:<span>Europe</span>
                            </li>
                            <li>
                                Sub Region:<span>Western Europe</span>
                            </li>
                            <li>
                                Capital:<span>Brussels</span>
                            </li>
                        </ul>
                        <ul className="inner-box--l2">
                            <li>
                                Top Level Domain:<span>.be</span>
                            </li>
                            <li>
                               Currencies:<span>Euro</span>
                            </li>
                            <li>
                                Languages:<span>Dutch, French, Germany</span>
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
