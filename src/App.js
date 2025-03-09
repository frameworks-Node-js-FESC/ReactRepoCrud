
import React , { useState, useEffect } from "react";

import axios from "axios";
function App() {
  
  const [nom,setNom] = useState("")
  const [din,setDin] = useState("")

  
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
    </div>
    
  );
}

export default App;
