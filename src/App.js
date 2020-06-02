import React, { Component }  from 'react';
import logo from './logo.svg';
import Decrement from "./Decrement";
import './App.css';

class App extends Component{
  render(){
    
    return (
      <>
      <Decrement start={5}/>
      <Decrement start={50}/>
      <Decrement start={15}/>
      </>
    )
  }
}
export default App;
