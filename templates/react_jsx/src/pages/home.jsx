import React from "react";
import Navbar from "../components/Nabar";
import Footer from "../components/Footer";
import '../assets/css/home.css'
function Home() {
    return (
        <div className="home-wrapper">
          <Navbar />
          <h1 className="text-center">WELCOME TO YOUR NEW AND IMPROVED REACT APP</h1>
          <Footer />
        </div>
    )
}

export default Home;