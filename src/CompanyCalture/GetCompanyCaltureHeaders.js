import React,{useEffect,useState} from "react";
import axios from "axios";

const GetCompanyCatureHeadersData=()=>{

const [companycalture,setcompanycalture]=useState([]);
useEffect(()=>{

    const GetCompanyCalture=async()=>{

        try{

    const GetCompanyCalturefromAPI= await axios.get("http://localhost:8001/api/GetCompanyCalture")
    setcompanycalture(GetCompanyCalturefromAPI.data);
        }
        catch(error)
        {
       console.log("error while fetching");

        }
       }


GetCompanyCalture(); 
},[]);debugger
  const data = companycalture[0] || {};
  const dataDetail = data.Detail || [];
return(<>
 <div style={{ overflowX: "hidden", paddingLeft: "60px", paddingRight: "40px" }}>
      <div className="row align-items-center homs g-6" style={{ "--bs-gutter-x": "2.5rem" }}>
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
             src={
                  data?.Attachment
                    ? `${process.env.PUBLIC_URL}/img/${data?.Attachment}`
                    : `${process.env.PUBLIC_URL}/img/empowering.png`
                }
            alt="Image"
            className="img-fluid rounded"
            style={{ display: "block", margin: "0 auto" }}
          />
        </div>

        <div className="col-md-6">
          <div className="section-subtitlee mb-4">{data?.Tag}</div>
         <div className="row">
            <div className="col-md-8">
           <p className="smart">
            {data?.Heading}
          </p>
            </div>
            </div>

        
          <p className="hgs" style={{ width: "87%" }}>
            
           {data?.Description}  </p>


          <ul className="list">
             {dataDetail.map((item,index)=>(
            <li key={index}><span>{item}</span></li> 
            ))}
          </ul>


        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>


</>)
}

export default GetCompanyCatureHeadersData;