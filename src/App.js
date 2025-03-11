
import React , { useState, useEffect } from "react";

import axios from "axios";
function App() {
  
  const [nom,setNom] = useState("")
  const [din,setDin] = useState("")
  const [elim,setElim] = useState("")
  const [elimString, setElimString] = useState("");
  const [crearNo,setCrearNo] = useState("");
  const [crearPin , setCrearPin] = useState("");
  const [crearDin,setCrearDin] = useState("");
  const [crearStr , setCrearStr] = useState("");

  
  const handlerA = (event) => {
    event.preventDefault();
    axios.get("/consulta",{
      params:{
        no:nom
      }
    }).then((response) => {
      var respon = JSON.stringify(response.data)
      var cho = JSON.parse(respon)
      setDin(cho)
    })

  };

  const eliminarA = (event) => {
    event.preventDefault();

    axios.get("/eliminar" , {
      params:{
        no:elim
      }
    }).then((result) => {
      var respon = result.data;
      setElimString(respon.status);
    })
  }
  const crearA = (event) => {
    event.preventDefault();

    axios.get("/crear", {
      params:{
        no:crearNo,
        pin:crearPin,
        din:crearDin
      }
    }).then((result) => {
      var response = result.data;
      setCrearStr(response.status)

    })

  }
  
  return (
    <div className="App">
     <form onSubmit={handlerA}>
      <input
      value={nom}
      onChange={(e) => setNom(e.target.value)}
      />
      <input type="submit"/>
     </form>
     {din.dinero}
     <h1>Eliminar</h1>
     <form onSubmit={eliminarA}>
      <input
      value={elim}
      onChange={(e) => setElim(e.target.value)}/>
      <input type="submit" />
     </form>
     {elimString}
     <h1>Crear nuevo</h1>
     <form onSubmit={crearA}>
      <input
      value={crearNo}
      onChange={(e) => setCrearNo(e.target.value)}
      />
      <input
      value={crearPin}
      onChange={(e) => setCrearPin(e.target.value)}
      />
      <input
      value={crearDin}
      onChange={(e) => setCrearDin(e.target.value)}
      />
      <input type="submit"/>
      {crearStr}

     </form>

    </div>
    
  );
}

export default App;
