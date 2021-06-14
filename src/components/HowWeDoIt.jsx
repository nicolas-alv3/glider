import React from 'react';
import laptop from '../assets/images/laptop.svg'
import phone from '../assets/images/phone.svg'
import recycle from '../assets/images/recycle.svg'
import up from '../assets/images/up.svg'


export default function HowWeDoIt() {
    return <div>
        <h1 className="text-center p-5 bg-third" style={{color:"white"}}>¿Cómo lo hacemos?</h1>
        <div className="row p-5">
        <div className="col">
            <div className="card-img-top">
                <img src={phone} height="70vw" alt="..."/>
                <img src={laptop} height="70vw"  alt="..."/>
            </div>
          <div className="card-body">
            <h3 className="card-title">Responsive design</h3>
            <p className="card-text">Sitios que se almoldan al tamaño del dispositivo</p>
          </div>
        </div>
        <div className="col">
          <img src={recycle} height="70vw" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Mejora continua</h3>
            <p className="card-text">Constante interacción con el cliente para obtener la mejor solución</p>
          </div>
        </div>
        <div className="col">
            <img src={up} height="70px" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Extensible</h3>
            <p className="card-text">Software preparado para que la tu negocio se siga expandiendo</p>
          </div>
        </div>
        </div>
  </div>
}