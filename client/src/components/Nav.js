import React from 'react';
import logo from '../Images/logo.png';
import medicalsnake from '../Images/medicalsnake.png';
import '../styles/nav.css'




 class Nav extends React.Component {
  render() {
    return(
      <div className="nav">
        <img className="pic1" src={medicalsnake} alt="symbol"></img>
        <img className="pic"src={logo} alt="logo"></img>
        <img className="pic1" src={medicalsnake} alt="symbol"></img>
      </div>

      )
  }
}

export default Nav;
