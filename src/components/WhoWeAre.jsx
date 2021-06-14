import React from 'react';
import laptop from '../assets/images/laptop.png'
import lamp from '../assets/images/lamp.png'


export default function HowWeDoIt() {
    return <div>
        <h1 className="text-center p-5 bg-secondary" style={{color:"white"}}>¿Quiénes somos?</h1>
        <div className="row p-5">
            <div className="col-lg-4 col-md-12 col-sm-12">
                <img height="160vw" style={{margin:0}} src={laptop} alt=""/>
                <img height="100vw" style={{position:"relative",marginLeft:"-160px",marginTop:"-45px"}}  src={lamp} alt=""/>
            </div>
            <h4 className="col-lg-8 col-md-12 col-sm-12">
                Somos un emprendimiento tecnológico enfocado en agregar valor a negocios de pequeña y mediana escala. Producimos piezas de software para solucionar cualquier tipo de problema de negocios.
            </h4>
       </div>
  </div>
}