import logo from './logo.svg';
import './App.css';
import PreguntarPokemon from "./components/PreguntarPokemon";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://gist.githubusercontent.com/Galadirith/baaf38c7286b568973cc50a50ff57f4d/raw/34d60cae491bc505c212398b94f12705665c12fc/pokeball.svg"} className="App-logo" alt="logo" />
          <PreguntarPokemon/>
      </header>
    </div>
  );
}

export default App;
