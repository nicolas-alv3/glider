import React from 'react';

export default function Banner() {
    return <div>
        <img src="https://images.unsplash.com/photo-1539627831859-a911cf04d3cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3151&q=80)" alt="" style={{width:"100vw",height:"100vh",objectFit:"cover",marginTop:"-110px"}}/>
        <div  style={{backgroundColor:"rgba(0,0,0,.4)",width:"100vw",height:"85vh",objectFit:"cover",top:"97px",position:"absolute"}}/>
        <h1 style={{color:"white",fontFamily:"Roboto", position:'absolute',left:0,right:0,top:"75vh",fontSize:"6vw"}}>¡Podemos solucionarlo!</h1>
  </div>
}