import React, { Component } from 'react';
import indegene from '../src/images/indegene.png'
import lin from '../src/images/lin.png'
import twitter from '../src/images/twitter.png'
import fb from '../src/images/fb.png'
import menu from '../src/images/menu.png'
import './App.css';

export default class Component1 extends Component {
  render(){
      let {result} = this.props;
  return (
    <div className="header">
     <div class="topnav" id="myTopnav">
   <a href="#"> <img src={indegene} alt={indegene} width="300px" height="50px" /></a>
  <div style={{float:"right", background:"white"}}>
  <a href="#news"><img src={twitter} alt={twitter} width="50px" height="50px" /></a>
  <a href="#contact"><img src={fb} alt={indegene} width="50px" height="50px" /></a>
  <a href="#contact"><img src={lin} alt={indegene} width="50px" height="50px" /></a>
  <a href="#contact" style={{paddingBottom:"2rem", fontSize:"15px"}}><b >MENU</b><img src={menu} alt={menu} width="50px" height="50px" /></a>
  </div>
  </div>
    </div>
  );
}
}


