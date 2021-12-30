import "./App.scss";
import moon from "./img/half-moon-svgrepo-com.svg"
function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <h1>where in the world?</h1>
        <div>
        <img src={moon} alt="moon" />
        Dark Mode
        </div>
      </nav>
    </div>
  );
}

export default App;
