import React, { Component } from "react";
import "./App.css";
import GetData from "./GetData";
import GetTitle from "./GetTitle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GetData />
        <GetTitle />
      </div>
    );
  }
}

export default App;
