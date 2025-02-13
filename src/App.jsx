import React from "react"
import './App.css'
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import AboutMe from "./components/AboutMe/AboutMe"
import Skills from "./components/Skills/Skills"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Hero/>
      <AboutMe/>
      <Skills/>
    </div>
    <Footer/>
    </>
  );
};

export default App;