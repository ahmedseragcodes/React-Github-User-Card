import axios from "axios";
import React from "react";
import { followersAPI } from "../constants/index";

class DisplayFollowers extends React.Component{
constructor(){
    super();
    this.state={
        followersArray: [],
    }
}

getFollowers= ()=>{
    axios.get(`${followersAPI}`)
    .then((res)=>{
        console.log("DISPLAYFOLLOWERS", res.data);
        this.setState({
            followersArray: res.data
        })
    })
    .catch((err)=>{
        console.log("DISPLAYFOLLOWERS", err);
    })
}

render(){
    return (
        <div>
            <button onClick={this.getFollowers}>Get Followers</button>
            <h2>Meet Some Of My Followers:</h2>
            {this.state.followersArray.map((follower)=>{
                return <p>{follower.login}</p>
            })}
        </div>
    )
}

}

export default DisplayFollowers;