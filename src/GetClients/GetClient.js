import React, { useEffect, useState  } from "react";
// import  '../Styles/manpower.css';
// import './GetClient.css';
import axios from "axios";


const GetClientsData =()=>{

const[clients,setclient]=useState([]);
useEffect(()=>{

const GetclientsAll=async()=>{
try{

  const GetResponse=await axios.get("http://localhost:8001/api/GetClients");
  setclient(GetResponse.data);
}


catch(error){
  console.log("error while fetching")

}
}
GetclientsAll()
},[]);
return (
  <div id="slider" style={{ marginTop: "60px" }}>
  
      <div className="client-item">
        {clients.length>0 &&(
         <p className="client">
          {clients[0].Heading}
        </p>
        )}
       
        <br />

        <div id="slider-track">
        {clients.map((client,index)=>(
          <div key={index} id="slide">
                <img
              src={
                client.ClientLogo
                  ? `${process.env.PUBLIC_URL}/img/${client.ClientLogo}`
                  : `${process.env.PUBLIC_URL}/img/logo1.png`
              }
              alt="Client Logo"
            />
          </div>
        ))}
        </div>
      </div>
   
  </div>
);
}

    export default GetClientsData