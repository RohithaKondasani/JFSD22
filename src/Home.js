import React from 'react';
import './Home.css'; // Assuming you will style it in a separate CSS file

const Home = () => {
  return (
    <div className="home-container">
      <header className="navbar">
        <nav>
          <ul className="nav-links">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">LOCATION</a></li>
            <li><a href="#">FEEDBACK</a></li>
            <li><a href="#">AMENITIES</a></li>
          </ul>
        </nav>
        <div className="user-icon">
          <i className="fa fa-user-circle"></i>
        </div>
      </header>

      <div className="content">
        <div className="left-image">
          <img src="https://media.istockphoto.com/id/172926428/photo/eclectic-studio-apartment-living-room-with-furniture.jpg?s=612x612&w=0&k=20&c=BtMTEBdIWGZ430L1_GXpeWAj4YtlDx7y9Ydbhsfu4_8=" alt="Interior" />
        </div>
        <div className="right-details">
        
          <h2>LIVING IS IN THE DETAILS</h2>
          <div className="detail-items">
            <div className="detail-item">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSfGwQ-RoZolk6NhOCB0b4h8ADH-Wb-67xwCMvjb0ot04vmgHmg"  width="80px" height="80px">
            </img><br></br>
              <i className="fa fa-home"></i>
              <p>226 East and West Premium Villas</p>
            </div>
            <div className="detail-item">
            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS4SwOOTftSFCSkp1x-RwNr9iDcCcHPL9EhALiArT0SnD3vZch5"  width="80px" height="80px">
            </img><br></br>
              <i className="fa fa-futbol"></i>
              <p>Sports and Play Facilities</p>
            </div>
            <div className="detail-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ginYFQkxGtIKRPTLaTm0Zt_odCuIp8zk1kJRGtebcKpWrHpr"  width="80px" height="80px">
            </img><br></br>
              <i className="fa fa-tree"></i>
              <p>Walking track overlooking the river</p>
            </div>
            <div className="detail-item">
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTyLsLah1IZsrv5bCxawZYJq2fu-PMST3oWvxcDPnu_-AosE5WN "  width="80px" height="80px">
            </img><br></br>
              <i className="fa fa-map-marker"></i>
              <p>Located in the developed area</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
