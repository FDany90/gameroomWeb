import { Header } from "./components/header";
import { Control } from "./components/control";
import { Start } from "./components/start";
import { FeaturedGames } from "./components/featuredgames";
import { Jackpots } from "./components/jackpots";
import { Footer } from "./components/footer";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Control />
      <Start />
      <FeaturedGames />
      <Jackpots />
      <Footer />

      {/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
