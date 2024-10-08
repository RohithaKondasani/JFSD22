import React from 'react';
import './Amenties.css';

const Amenties = () => {
  return (
    <div className="amenities-container">
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

      <div className="content">
        <div className="left-image">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDo_NBbZRsYPSr6mBMDy6f7M99ZWFLg1vqppLvztAwEBNF9djG"
            alt="Indoor Court"
          />
        </div>
        <div className="right-details">
          <h3>
            For every lifestyle aspiration you dream of, there is something for you!
          </h3>
          <ul className="amenities-list">
            <li>Gym</li>
            <li>Indoor Games</li>
            <li>Swimming Pool</li>
            <li>Convenience Store</li>
            <li>Party Lawns</li>
            <li>Cricket Practice Net</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Amenties;
