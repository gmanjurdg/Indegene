import React, { Component } from 'react';
import gray from '../src/images/gray.png'
import side from '../src/images/side.png'
import icon from '../src/images/icon.png'
import Place from '../src/images/Place.png'
import Road from '../src/images/Road.png'
import hand from '../src/images/hand.png'
import date from '../src/images/date.png'
import './App.css';
import ImageMain from './Images';
import Footer from './Footer';

export default class Component2 extends Component {

  render() {
    return (
      <div className="container">
        <div>
          <img src={gray} alt={gray} width="100%" height="500px" class="image" />
          <div class="overlay">
            <h1 class="text" style={{ paddingTop: "5rem" }}>Enterprise Marketing and Customer Experiance</h1>
            <p class="text">LEVERAGE DATA TO DRIVE PERSONALIZATION AT SCALE</p>
            <div style={{ textAlign: "center" }}>
              <button className="button" style={{ background: "tan", color: "white" }}>The Global Transaction</button>
              <button className="button" style={{ background: "white", paddingRight: "3rem" }}>Explore</button>
            </div>

          </div>
        </div>
        <div class="row" style={{ textAlign: "center" }}>
          <h1>Company</h1>
          <h4 style={{ color: "tan" }}>Services</h4>
          <div class="column2" style={{ marginLeft: "10rem" }}>
            <h3>Customer Experiance</h3>
            <p style={{ color: "tan" }}>A Must have tool for pharma marketers to give insights into the latest channel preferences, market</p>
          </div>
          <div class="column3" >
            <img src={icon} alt={icon} width="150px" height="140px" />
            <img src={icon} alt={icon} width="150px" height="140px" style={{ marginLeft: "2rem" }} />
          </div>
          <div class="column3">
            <h3>Co-commercialization</h3>
            <p style={{ color: "tan" }}>A Must have tool for pharma marketers to<br /> give insights into the latest channel preferences, market</p>
          </div>
        </div>
        <div class="row" style={{ textAlign: "center" }}>
          <div class="column2" style={{ marginLeft: "10rem" }}>
            <h3>Data and Analytics</h3>
            <p style={{ color: "tan" }}>A Must have tool for pharma marketers to give insights into the latest channel preferences, market</p>
          </div>
          <div class="column3" >
            <img src={icon} alt={icon} width="150px" height="140px" />
            <img src={icon} alt={icon} width="150px" height="140px" style={{ marginLeft: "2rem" }} />
          </div>
          <div class="column3">
            <h3>R&D / Medical Transformation</h3>
            <p style={{ color: "tan" }}>A Must have tool for pharma marketers to<br /> give insights into the latest channel preferences, market</p>
          </div>
        </div>

        <div class="row" style={{ textAlign: "center" }}>
          <div class="column2" style={{ marginLeft: "10rem" }}>
            <h3>Digital Transformation</h3>
            <p style={{ color: "tan" }}>A Must have tool for pharma marketers to give insights into the latest channel preferences, market</p>
          </div>
          <div class="column3" >
            <img src={icon} alt={icon} width="150px" height="140px" />
            <img src={icon} alt={icon} width="150px" height="140px" style={{ marginLeft: "2rem" }} />
          </div>
          <div class="column3">
            <h3>Omnipresence CXM Platform</h3>
            <p style={{ color: "tan" }}>A Must have tool for pharma marketers to<br /> give insights into the latest channel preferences, market</p>
          </div>
        </div>
     <div>
        <div>
          <img src={Road} alt={gray} width="100%" height="700px" class="image" />
          <div class="overlay2">
            
            <div style={{ textAlign: "center" }}>

            <div class="row" style={{ textAlign: "center", position:"absolute", top:"85rem" }}>
            <h1 class="" style={{color:"white", marginBottom:"5rem"}}>INSPIRATIONAL TESTIMONY</h1>
          <div class="column2" style={{ marginLeft: "10rem" }}>
          <img src={Place} alt={Place} width="150px" height="140px" />
            <h4 style={{ color: "white" }}>A Must have tool for pharma marketers to give insights into the latest channel </h4>
            <h2 style={{ color: "white" }}>President</h2>
          </div>
          <div class="column3" >
            <img src={Place} alt={Place} width="150px" height="140px" />
                        <h4 style={{ color: "white" }}>A Must have tool for pharma marketers to<br /> give insights into the latest channel</h4>
                        <h2 style={{ color: "white" }}>CEO</h2>
          </div>
          <div class="column3">
          <img src={Place} alt={Place} width="150px" height="140px" />
            <h4 style={{ color: "white" }}>A Must have tool for pharma marketers to<br /> give insights into the latest channel </h4>
          <h2 style={{ color: "white" }}>Executive VP</h2>
          </div>
        </div>
     
             </div>
             </div>
          </div>
        </div>
      <h1>UPCOMING EVENTS</h1>
    
      <div class="row" style={{ textAlign: "center" }}>
          <div class="column2" style={{ marginLeft: "10rem" }}>
          <img src={hand} alt={hand} width="300px" height="200px" />
            
            </div>
            <div class="column3" style={{}}>
            <h2>Global Pharaceutical Affairs Summit</h2>
            <p className="alignment"><img src={date} alt={date} width="30px" height="30px" /> Monday, 8:00 AM - Tuesday, 8:00 PM</p>
            <p className="alignment"><img src={date} alt={date} width="30px" height="30px" />Madisson Hotel</p>
            <p className="alignment"><img src={date} alt={date} width="30px" height="30px" />203, Mountain View, San Franciso, USA</p>
            </div>
      </div>
      <div class="row" style={{ textAlign: "center" }}>
          <div class="column2" style={{ marginLeft: "10rem" }}>
          <img src={hand} alt={hand} width="300px" height="200px" />
            
            </div>
            <div class="column3" style={{}}>
            <h2>World Drug Safty Congress Europe</h2>
            <p className="alignment"><img src={date} alt={date} width="30px" height="30px" /> Monday, 8:00 AM - Tuesday, 8:00 PM</p>
            <p className="alignment"><img src={date} alt={date} width="30px" height="30px" />Madisson Hotel</p>
            <p className="alignment"><img src={date} alt={date} width="30px" height="30px" />203, Mountain View, San Franciso, USA</p>
            </div>
      </div>
      <div class="row" style={{ textAlign: "center" }}>
          <div class="column2" style={{ marginLeft: "10rem" }}>
          <img src={hand} alt={hand} width="300px" height="200px" />
            
            </div>
            <div class="column4" style={{}}>
            <h2>Real World Data and Analytics Centers of Excellence</h2>
            <p className="alignment"><img src={date} alt={date} width="30px" height="30px" /> Monday, 8:00 AM - Tuesday, 8:00 PM</p>
            <p className="alignment"><img src={date} alt={date} width="30px" height="30px" />Madisson Hotel</p>
            <p className="alignment"><img src={date} alt={date} width="30px" height="30px" />203, Mountain View, San Franciso, USA</p>
            </div>
      </div>
      <div class="row" style={{ textAlign: "center" }}>
          <div class="column2" style={{ marginLeft: "10rem" }}>
          <img src={hand} alt={hand} width="300px" height="200px" />
            
            </div>
            <div class="column4" style={{}}>
            <h2>4th Promostional Review Commitee Compliance & Best Practice</h2>
            <p className="alignment"><img src={date} alt={date} width="30px" height="30px" /> Monday, 8:00 AM - Tuesday, 8:00 PM</p>
            <p className="alignment"><img src={date} alt={date} width="30px" height="30px" />Madisson Hotel</p>
            <p className="alignment"><img src={date} alt={date} width="30px" height="30px" />203, Mountain View, San Franciso, USA</p>
            </div>
      </div>
      <Footer />
      </div>
    );
  }
}


