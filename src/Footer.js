import React, { Component } from 'react';
import './Footer.css';
import indegene from '../src/images/indegene.png'

export default class Footer extends Component {
  render(){
      let {result} = this.props;
  return (
    <div className="result" style={{backgroundColor: "black",
        color: "white",
        textAlign: "center",
        paddingTop: "5rem",
        height: "800px;"}}>
       <h1  style={{fontSize:"3rem"}}>NEWSLETTER</h1>
       <form class="example"  style={{margin:"auto", maxWidth:"500px"}}>
  <input type="text" placeholder="Enter Email Address" name="search2" /><br/>
</form>
<footer>
         <div style={{marginLeft:"30rem"}}><p>© 2019 Indegene. All rights reserved | Contact Us | Privacy Policy | CSR Policy</p></div>
      </footer>
    </div>
  );
}
}


