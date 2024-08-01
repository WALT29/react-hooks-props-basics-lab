import React from "react";
import Links from "./Links";

function Bio(props){
  let bio=props.bio
  if(!bio){
    return null;
  }
  return <p>{bio}</p>;
}

function About(props) {
  console.log(props.links.github);
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>{props.bio}</p> */}
      
      {Bio(props)}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedin={props.links.linkedin} github={props.links.github}/>

    </div>
  );
}

export default About;
