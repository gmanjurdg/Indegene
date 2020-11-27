import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Footer from './Footer';

class App extends Component {
  constructor(){
    super()
    this.state={
      result: ""
    }
  }

  onClick= button => {
    if(button === "="){
      this.calculate()
    }
    else if(button ==="AC") {
      this.reset()
    }
    else if(button === "DELETE"){
      this.backspace()
    }
    else(
      this.setState({
        result: this.state.result + button
      })
    )
  }
  calculate=()=>{
    try {
      this.setState({
        result:(eval(this.state.result) || "") + ""
      })
    } catch(e) {
      this.setState({
        result: "error"
      })
    }
  }
  reset=() =>{
    this.setState({
      result: ""
    })
  }
  backspace=() =>{
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }
  render(){
  return (
    <div className="calculator-body">
     <Component1 />
     <Component2 />
     
    </div>
  );
}
}

export default App;
