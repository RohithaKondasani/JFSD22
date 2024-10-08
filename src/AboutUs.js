import React from 'react';
import './AboutUs.css'; // Add your custom CSS

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className="navbar">
        <nav>
          <ul className="nav-links">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">LOCATION</a></li>
            <li><a href="#">FEEDBACK</a></li>
            <li><a href="#">AMENTIES</a></li>
          </ul>
        </nav>
        <div className="user-icon">
          <i className="fa fa-user-circle"></i>
        </div>
      </header>

      <div className="main-content">
        <img 
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGAdmMKDeJus8nXT8grJyK2z3fTgh_s9z-vBeJEd5olFynvoER" 
          alt="About Us" 
          className="about-image" 
        />
        <div className="content-blocks">
          <div className="vision">
            <h3>VISION</h3>
            <p>Emerge as a leader in the ever-changing industry of real estate with technology & nature-driven projects that are forward, functional, purposeful and human-friendly.</p>
          </div>
          <div className="mission">
            <h3>MISSION</h3>
            <p>Our mission is to deliver life-filled solutions and innovations to the idea of living.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
