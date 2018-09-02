import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ExampleApp from "./ExampleApp";
import NavLinks from "./views/NavLinks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <NavLinks />
        </header>
        <ExampleApp />
      </div>
    );
  }
}

export default App;
