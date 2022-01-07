import { useState, useEffect} from "react";
import "./App.scss";
import CountriesList from "./CountriesList/CountriesList";
import { ReactComponent as Moon } from "./img/half-moon-shape-svgrepo-com.svg";
import { ReactComponent as MoonIcon } from "./img/icon-moon.svg";
import Countryprofile from "./Countryprofile/Countryprofile"
import axios from "axios";
// import moonIcon from "./img/icon-moon.svg";
function App(props) {
  const[countries, setcountries] = useState([]);
  const [theme, settheme] = useState(true);
useEffect(() =>{
  const countriesData = () =>{
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => {
      // console.log(response.data)
      setcountries(response.data);
      console.log(countries[0])
      return response.data;
    })
   
  }
  countriesData()

}, [])
// useState(() =>{
//   const retrievedCountries = countriesData()
//   console.log(retrievedCountries)
// },[])
  return (
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
          {/* <Countryprofile/> */}
          <CountriesList countriesListArray={countries} theme={theme} />
        </main>
      </div>
    </div>
  );
}

export default App;
