import React, { useState } from "react";
import "./App.css";
import ContactInfo from "./mainpage/ContactInfo.js";
import Education from "./mainpage/Education.js";
import Objectives from "./mainpage/Objectives.js";
import SocialLinks from "./mainpage/SocialLinks.js";
import UpdateContactInfo from "./mainpage/UpdateContcatInfo";
import WorkExperience from "./mainpage/WorkExperience.js";

function App() {
  const[appState , updateState] = useState({
    name:"Ghada",
    email:"ghada@gmail.com",
    github:"gahda123@gmail"
  }) ;
  return (
    <div className="app">
      <h1> {appState.name} </h1>
      
      <ContactInfo name={appState.name}></ContactInfo>
      <SocialLinks></SocialLinks>
      <Objectives></Objectives>
      <WorkExperience></WorkExperience>
      <Education></Education>
      <UpdateContactInfo></UpdateContactInfo>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
