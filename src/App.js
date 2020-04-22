import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./login";
import Createuser from "../src/pages/createuser";

class App extends Component {
  state = {
    fields: {}
  };


  onChange = updatedValue => {
    this.setState({
    
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
      
    });
  };

  render() {
    return (
      <div className="App">
        <Createuser onChange={fields => this.onChange(fields)}/>
        <Login onChange={fields => this.onChange(fields)} />
        <p>
          
          {JSON.stringify(this.state.fields, null, 2)}
        </p>
      </div>
    );
  }
}

export default App;
