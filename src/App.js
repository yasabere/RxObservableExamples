import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Example00 from "./examples/Example00";
import Example01 from "./examples/Example01";
import Example02 from "./examples/Example02";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SSR React</h1>
        </header>
        <div className="App-intro">
          <Example00 />
          <Example01 />
          <Example02 />
        </div>
      </div>
    );
  }
}

export default App;
