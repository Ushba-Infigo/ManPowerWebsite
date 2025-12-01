
import React,{useEffect,useState} from "react";
import axios from "axios";



const GetCalture = () => {

const [core,setcore]=useState([]);
const [coreD,setcoreD]=useState([]);
useEffect(()=>{
   const GetCore=async()=>{

        try{

    const GetCorefromAPI= await axios.get("http://localhost:8001/api/GetCore")
    setcore(GetCorefromAPI.data);
        }
        catch(error)
        {
       console.log("error while fetching");

        }
       }
    const GetCoreDetail=async()=>{

        try{

    const GetCoreDetailfromAPI= await axios.get("http://localhost:8001/api/GetCoreDetail")
    setcoreD(GetCoreDetailfromAPI.data);
        }
        catch(error)
        {
       console.log("error while fetching");

        }
       } 
GetCore();
GetCoreDetail();

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
    <br />
    <div className="core text-center">{dataCore.Tag}</div>
  </center>
  <br />
  <center>
 <div className="row">
    <div className="col-md-2"></div>
    <div className="col-md-8">
    <div className="five text-center">
    {dataCore.Heading}
    </div>
    </div>
    <div className="col-md-2"></div>
    </div>


  </center>
  <br />

  <section className="values-section">
    <div className="row g-3 justify-content-center">

            {coreD.map((coreDetail, index) => (
      <div className="col-md-2 col-lg">
        <div className="value-card">
          <div className="value-icon">
            <img
              src={ coreDetail.Tab_Icon
                  ? `${process.env.PUBLIC_URL}/img/${coreDetail.Tab_Icon}`
                  : `${process.env.PUBLIC_URL}/img/2ndb.png`}
            alt="Integrity" />
          </div>
          <h5 className="value-title" style={{ marginTop: "30px" }}>
             {coreDetail.Tab_Heading}
          </h5>
          <p className="value-text">
            {coreDetail.Tab_Description}
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