import React from 'react';
import "../style/navbar.css";
import logo from '../assets/images/gliderlogo.png';
import whatsapp from '../assets/images/whatsapp.png';


export default function Navbar() {
  const openWpp = () => window.open(encodeURI(`https://wa.me/+5491168896776?text=Hola Nico, ¿como estas? te hablo para consultarte sobre Glider...`), '_blank');
    return <div className="bg-primary navbar navbar-light bg-light">
    <div className="container-fluid">
    <img src={logo} alt="" className="navbar-logo" />
    </div>
    <img onClick={openWpp} className="whatsapp-img" src={whatsapp} alt="whatsapp"/>
  </div>
}