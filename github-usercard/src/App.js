import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { API } from "../src/constants/index";
import DisplayFollowers from "./components/DisplayFollowers";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      username: "",
      avatarURL: "",
      bio: "",
      followers: null,
      following: null,
      signedUp: [],
      users: []
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

  //manually changed state within react dev tools, causing first console log to return 
  componentDidUpdate(prevProps, prevState){
    if (this.state.bio===prevState.bio){
      console.log("component has updated, bio is the same");
    } else {
      console.log("nothing has changed");
    }
  }

  handleChange=(event)=>{
    this.setState({
      ...this.state, signedUp: event.target.value
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    const newName={
      signedUp: this.state.signedUp
    }
    this.setState({
      ...this.state, users: [newName]
    })
  }

  render(){
    console.log(API);
    return (
      <div>
        <h1>Github Profile Showcase</h1>
        <h2>{this.state.username}</h2>
        <img src={this.state.avatarURL} alt="github selfie" />
        <p>About Me: {this.state.bio}</p>
        <p>Followers: {this.state.followers}</p>
        <p>Following: {this.state.following}</p>

        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <label htmlFor="signedUp">Sign In: 
            <input name="signedUp" placeholder="Sign In Here" value={this.state.signedUp} onChange={this.handleChange} />
            <button>Submit</button>
          </label>
        </form>
        {this.state.users.map(function(user){
          return <p>{user.signedUp}</p>
        })}

        <DisplayFollowers />
      </div>
    )
  }
}

export { App };