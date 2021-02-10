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

  componentWillMount(){
    axios.get(`${API}`)
    .then((res)=>{
      console.log(res.data);
      this.setState({
        username: res.data.login,
        avatarURL: res.data.avatar_url,
        bio: res.data.bio,
        followers: res.data.followers,
        following: res.data.following
      })
    })
    .catch((err)=>{
      console.log(err);
    })
  }


  render(){
    console.log(API);
    return (
      <div>
        <h1>Github Profile Showcase</h1>
        <h2>{this.state.username}</h2>
        <img src={this.state.avatarURL} alt="github selfie" />
        <p>Followers: {this.state.followers}</p>
        <p>Following: {this.state.following}</p>
      </div>
    )
  }
}

export { App };