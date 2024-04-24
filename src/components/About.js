import React from "react";
import links from "./Links";

function About() {
  function About ({bio, github, linkedin}){
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here</p>
      {!bio || bio === "" ? null : <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <links github={github} linkedin={linkedin}></links>
    </div>
  );
}
}

export default About;
