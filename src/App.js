import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import AboutUs from './AboutUs';
import Location from './Location';
import Feedback from './Feedback';
import Amenties from './Amenties';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/location" element={<Location />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/amenties" element={<Amenties />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
