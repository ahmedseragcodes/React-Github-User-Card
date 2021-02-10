import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { API } from "../src/constants/index";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      username: "",
      avatarURL: "",
      bio: "",
      followers: null,
      following: null,
    }
  }


  render(){
    console.log(API);
    return (
      <div>

      </div>
    )
  }
}

export { App };