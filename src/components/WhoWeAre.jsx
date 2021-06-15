import React from 'react';
import laptop from '../assets/images/laptop.png'
import lamp from '../assets/images/lamp.png'


export default function HowWeDoIt() {
    return <div>
        <h1 className="text-center p-5 bg-secondary" style={{color:"white"}}>¿Quiénes somos?</h1>
        <div className="row p-5">
            <div className="col-lg-4 col-md-12 col-sm-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="18em" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
            </svg>                
            <img height="120em" style={{position:"relative", marginTop:"-350px"}}  src={lamp} alt=""/>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
                <h4 >
                Somos un emprendimiento tecnológico enfocado en agregar valor a negocios de pequeña y mediana escala. 
                    Producimos piezas de software de diseño moderno y con las últimas tecnologías. 
                </h4>
                <br/>
                <h3>SOMOS APASIONADOS</h3>
                <h4>La pasión y el compromiso por lo que hacemos nos destaca y es nuestra mejor publicidad.
                </h4>
            </div>
       </div>
  </div>
}