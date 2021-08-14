import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";


function Homepage() {
   
  return (
    <div className="home">
        <Link to="/tdee"><button>TDEE Calculator</button></Link>
        <Link to="/calories"><button>Calories</button></Link>
        <Link to="/data"><button>Saved TDEE Data</button></Link>
    </div>
  );
}

export default Homepage;
