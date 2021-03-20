import React, { useState } from "react";
import "./App.css";
import ContactInfo from "./mainpage/ContactInfo.js";
import Education from "./mainpage/Education.js";
import Objectives from "./mainpage/Objectives.js";
import SocialLinks from "./mainpage/SocialLinks.js";
import WorkExperience from "./mainpage/WorkExperience.js";

function App() {
  const [name, updatName] = useState("Default Name");
  const [contanctInfo, updateContactInfo] = useState({
    phone: "default phone",
    address: "default address"
  });

  return (
    <div className="app">
      <h1> {name} </h1>
      <ContactInfo contanctInfo={contanctInfo}></ContactInfo>
      <SocialLinks></SocialLinks>
      <Objectives></Objectives>
      <WorkExperience></WorkExperience>
      <Education></Education>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
