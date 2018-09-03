import React, { Component } from 'react';
import welcome from './img-folder/welcome.jpg';
import './welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div>
      <img src={welcome} className="welcome-img"/>
      
      </div>
    );
  };
}

export default Welcome;