import React from 'react';

const ModalAMedida = () => <div>
  <div className="modal fade" id="modalAMedida" tabindex="-1" aria-labelledby="modalAMedidaLabel" aria-hidden="true">
<div className="modal-dialog modal-lg">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="modalAMedidaLabel">Software a medida</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      <iframe title="Microdemo" allowfullscreen="true" width="100%" height="400vw" src={`https://www.youtube.com/embed/-ZIlGy2ew0g`} frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
      <h4> En este video se muestra un ejemplo de software a medida solicitado por uno de nuestros clientes.</h4>
      El software a medida es la mejor opción para empresas o emprendimientos que necesitan una solución personalizada y que quieren sistematizar su modelo de negocio.
      Este tipo de soluciónes son altamente escalables y se recomiendan para proyectos a largo plazo.
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Genial!</button>
    </div>
  </div>
</div>
</div>
          <button className="btn btn-primary bg-primary" data-bs-toggle="modal" data-bs-target="#modalAMedida">Ver más</button>
          </div>

const ModalSitiosEmpresariales = () => <div>
  <div className="modal fade" id="modalSitiosEmp" tabindex="-1" aria-labelledby="modalSitiosEmpLabel" aria-hidden="true">
<div className="modal-dialog">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="modalSitiosEmpLabel">Sitios empresariales</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
      <b>Este sitio</b> es un claro ejemplo de landing page o sitio empresarial, posee una portada, una sección describiendo de que se trata la empresa, como funciona y que servicios prestan.
      Sin dudas es una de las mejores alternativas para atraer clientes!
    </div>
    <div className="modal-footer">
    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Genial!</button>

    </div>
  </div>
</div>
</div>
          <button className="btn btn-primary bg-primary" data-bs-toggle="modal" data-bs-target="#modalSitiosEmp">Ver más</button>
          </div>

const ModalSistemas = () => <div>
  <div className="modal fade" id="modalSistemas" tabindex="-1" aria-labelledby="modalSistemasLabel" aria-hidden="true">
<div className="modal-dialog modal-lg">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="modalSistemasLabel">Sistemas</h5>
      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
    <iframe title="Microdemo" allowfullscreen="true" width="100%" height="400vw" src={`https://www.youtube.com/embed/ge89vTz5x_k`} frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    <h4> En este video se muestra un ejemplo de sistema solicitado por uno de nuestros clientes.</h4>
    Nuestros sistemas replican su flujo de negocio, proponen una interfaz amigable e intuitiva haciendo de su trabajo una actividad mas placentera y eficiente.
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Genial!</button>
    </div>
  </div>
</div>
</div>
          <button className="btn btn-primary bg-primary" data-bs-toggle="modal" data-bs-target="#modalSistemas">Ver más</button>
          </div>


export default function WhatWeDo() {
    return <div>
        <h1 className="text-center p-5 bg-fourth" style={{color:"black"}}>¿Que hacemos?</h1>
        <div className="row-cols-1 card-group p-5">
        <div className="card">
          <img src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Sistemas</h3>
            <p className="card-text">Creamos sistemas de ventas, stock y facturación.</p>
            <ModalSistemas/>
          </div>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Sitios empresariales</h3>
            <p className="card-text">Diseñamos y codificamos páginas web personalizadas para tu emprendimiento</p>
          <ModalSitiosEmpresariales/>
          </div>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="card-title">Software a medida</h3>
            <p className="card-text">Creamos aplicaciones empresariales para todo tipo de negocios</p>
            <ModalAMedida/>
          </div>
        </div>
        </div>
  </div>
}