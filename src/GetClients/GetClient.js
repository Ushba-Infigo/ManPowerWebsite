import React, { useEffect, useState, useContext } from "react";
import { RefreshContext } from "../App";
// import  '../Styles/manpower.css';
// import './GetClient.css';
import axios from "axios";


const GetClientsData = () => {
  const refreshKey = useContext(RefreshContext);
  const [clients, setclient] = useState([]);
  useEffect(() => {

    const GetclientsAll = async () => {
      try {

        const GetResponse = await axios.get("http://83.147.38.201:8001/api/GetClients");
        setclient(GetResponse.data);
      }


      catch (error) {
        console.log("error while fetching")

      }
    }
    GetclientsAll()
  }, [refreshKey]);
  const Logos = clients.length > 0 ? clients[0].Logos : [];
  return (
    <div id="slider" style={{ marginTop: "60px" }}>

      <div className="client-item">
        {clients.length > 0 && (
          <p className="client">
            {clients[0].Heading}
          </p>
        )}

        <br />

        <div id="slider-track">
          {Logos.map((client) => (
            <div key={client._id} id="slide">
              <img
                src={
                  client.ImagePath
                    ? `http://83.147.38.201:8002/uploads/client-logos/${client.ImagePath}`
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