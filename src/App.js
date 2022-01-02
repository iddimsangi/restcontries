import "./App.scss";
import CountriesList from "./CountriesList/CountriesList"
import moon from "./img/icon-moon.svg";
function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <h1>where in the world?</h1>
        <div>
          <img src={moon} alt="moon" />
          <span> Dark Mode</span>
        </div>
      </nav>
      <main className="App-body">
        <CountriesList/>
      </main>
    </div>
  );
}

export default App;
