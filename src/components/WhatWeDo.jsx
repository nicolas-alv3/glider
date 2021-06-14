import React from 'react';


export default function WhatWeDo() {
    return <div>
        <h1 className="text-center p-5 bg-fourth" style={{color:"black"}}>¿Que hacemos?</h1>
        <div className="row-cols-1 card-group p-5">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Sistemas</h3>
            <p className="card-text">Creamos sistemas de ventas, stock y facturación a medida</p>
            <button className="btn btn-primary bg-primary">Ver más</button>
          </div>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Sitios empresariales</h3>
            <p className="card-text">Diseñamos y codificamos páginas web personalizadas para tu emprendimiento</p>
            <button className="btn btn-primary bg-primary">Ver más</button>
          </div>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Software a medida</h3>
            <p className="card-text">Creamos aplicaciones empresariales para todo tipo de negocios</p>
            <button className="btn btn-primary bg-primary">Ver más</button>
          </div>
        </div>
        </div>
  </div>
}