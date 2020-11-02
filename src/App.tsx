import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  interface User {
    name: String;
    message: String;
    id: number;
  }

  const user: User = {
    name: "John",
    message: "Typescript is awesome",
    id: 1
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {JSON.stringify(user, null, 2)}
      </header>
    </div>
  );
}

export default App;
