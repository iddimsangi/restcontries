import { useState, useEffect } from "react";
import "./App.scss";
import CountriesList from "./CountriesList/CountriesList";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactComponent as Moon } from "./img/half-moon-shape-svgrepo-com.svg";
import { ReactComponent as MoonIcon } from "./img/icon-moon.svg";
import Countryprofile from "./Countryprofile/Countryprofile";
import axios from "axios";
// import moonIcon from "./img/icon-moon.svg";
function App(props) {
  const [countries, setcountries] = useState([]);
  const [searchTerm, setsearchTerm] = useState("");
  const [searchTermResult, setsearchTermResult] = useState([]);
  const [theme, settheme] = useState(true);
  const optionHandler = (optLabel) =>{
    console.log(optLabel);
  }
  optionHandler()
  useEffect(() => {
    const countriesData = () => {
      axios
        .get("https://restcountries.com/v3.1/all")
        //.get(`https://restcountries.com/v3.1/region/{region}`)
        .then((response) => {
          console.log(response.data);
          setcountries(response.data);
          console.log(countries[0]);
          return response.data;
        });
    };
    countriesData();
  }, []);
  const searchTermHandler = (searchKeyword) => {
    setsearchTerm(searchKeyword);
console.log(searchKeyword);
    const searchedCountry = countries.filter((country) =>{
      // console.log(Object.values(country).join(" ").toLocaleLowerCase().includes(searchKeyword.toLocaleLowerCase()))
      return Object.values(country).join(" ").toLocaleLowerCase().includes(searchKeyword.toLocaleLowerCase());
    });
    setsearchTermResult(searchedCountry);
  }
  // useState(() =>{
  //   const retrievedCountries = countriesData()
  //   console.log(retrievedCountries)
  // },[])
  return (
    <BrowserRouter>
<div>
      <input type="checkbox" id="nav_toggle" className="inputChek" />
      <div className="App">
        <nav className="App-header">
          <h1>where in the world?</h1>
          <div>
            <label htmlFor="nav_toggle">
              <Moon
                onClick={() => settheme(!theme)}
                className={theme ? "logoSvg2" : "logoSvg"}
              />
            </label>

            {/* <MoonIcon className={theme ? "logoSvg" : "logoSvg2"}/> */}
            {/* <img src={moon} alt="moon" /> */}
            {/* <img src={moonIcon} alt="cc"/> */}
            <span className={theme ? "navText" : "navText2"}> Dark Mode</span>
          </div>
        </nav>
        <main className="App-body">

      <Routes>
      <Route path="/" exact element={ <CountriesList 
          countriesListArray={searchTerm.length < 1 ? countries : searchTermResult} 
          // getValueHandler = {countriesData}
          optionHandler ={optionHandler}
          term = {searchTerm} 
          searchTermHandler ={searchTermHandler}
           theme={theme} />}/>
        <Route path="Countryprofile/" exact element={<Countryprofile  />} />
   
      </Routes>
          {/* <Countryprofile/> */}
      
        </main>
      </div>
    </div>
    </BrowserRouter>

    
  );
}

export default App;
