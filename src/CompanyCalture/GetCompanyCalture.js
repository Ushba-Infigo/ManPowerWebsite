
import React,{useEffect,useState} from "react";
import axios from "axios";



const GetCalture = () => {

const [core,setcore]=useState([]);
useEffect(()=>{
   const GetCore=async()=>{

        try{

    const GetCorefromAPI= await axios.get("http://83.147.38.201:8001/api/GetCore")
    setcore(GetCorefromAPI.data);
        }
        catch(error)
        {
       console.log("error while fetching");

        }
       }
  
GetCore();

},[]);
  const dataCore = core[0] || {};

  return (
  <>

<div
  className="container-fluid my-container"
  style={{
    paddingLeft: "60px !important",
    paddingRight: "60px !important",
    marginTop: "-120px !important",
    backgroundColor: "rgba(50, 72, 184, 1)",
  }}
>
  <br />

  <center>
    <div className="core text-center">
      {dataCore?.TagHeading}
    </div>
  </center>

  <br />

  <center>
    <div className="row">
      <div className="col-md-2"></div>

      <div className="col-md-8">
        <div className="five text-center">
          {dataCore?.MainHeading}
        </div>
      </div>

      <div className="col-md-2"></div>
    </div>
  </center>

  <br />

  <section className="values-section">
    <div className="row g-3 justify-content-center">

      {dataCore?.Cards
        ?.sort((a, b) => a.Order - b.Order)
        .map((card, index) => (
          <div className="col-md-2 col-lg" key={index}>
            <div className="value-card">

              <div className="value-icon">
                <img
                  src={
                    card.IconPath
                      ? `http://83.147.38.201:8002/uploads/core-values/${card.IconPath}`
                      : `${process.env.PUBLIC_URL}/img/2ndb.png`
                  }
                  alt={card.CardHeading}
                />
              </div>

              <h5 className="value-title" style={{ marginTop: "30px" }}>
                {card.CardHeading}
              </h5>

              <p className="value-text">
                {card.Description}
              </p>

            </div>
          </div>
        ))}

    </div>
  </section>
</div>



<br/><br/><br/>

    </>
  );
};

export default  GetCalture ;
;