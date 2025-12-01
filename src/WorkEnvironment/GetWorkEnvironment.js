import React,{useEffect,useState} from "react";
import axios from "axios";

const GetWorkEnvironmentData=()=>{

const [workenvironment,setworkenvironment]=useState([]);
useEffect(()=>{

    const GetWorkEnvironment=async()=>{

        try{

    const GetWorkEnvironmentfromAPI= await axios.get("http://localhost:8001/api/GetWorkEnvironment")
    setworkenvironment(GetWorkEnvironmentfromAPI.data);
        }
        catch(error)
        {
       console.log("error while fetching");

        }
       }


GetWorkEnvironment(); 
},[]);debugger
  const data = workenvironment[0] || {};
  const dataDetail = data.Description_Details || [];
return(
<>

<div className="my-5" style={{ padding: "0 60px" }}>
  <div className="row align-items-center">
    
    {/* LEFT COLUMN */}
    <div className="col-md-6">
      <div className="section-subtitlee" style={{ width: "170px" }}>
       {data?.Tag}
      </div>
      <br />

      <p className="besti">
      {data?.Heading} 
      </p>

      <p className="collaborate">
      {data?.Description} 
      </p>

   {dataDetail.map((detail,index) =>(
        <>
      <span style={{ 
        display: "inline-flex", alignItems: "center", gap: "5px", verticalAlign: "middle", marginTop: "-10px" }} 
        key={index}>
    <svg
  style={{ marginTop: "15px" }}
  width={24}
  height={43}
  viewBox="0 0 24 43"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#clip0_305_379)">
    <mask
      id="mask0_305_379"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="5"
      width="13"
      height="15"
    >
      <path d="M12.7744 5.85962H0V19.507H12.7744V5.85962Z" fill="white" />
    </mask>

    <g mask="url(#mask0_305_379)">
      <path
        d="M4.61483 19.5075C7.16353 19.5075 9.22965 17.4414 9.22965 14.8926C9.22965 12.344 7.16353 10.2778 4.61483 10.2778C2.06612 10.2778 0 12.344 0 14.8926C0 17.4414 2.06612 19.5075 4.61483 19.5075Z"
        fill="#89CBEB"
      />
      <path
        d="M12.7748 11.5172L2.9751 5.85962V17.1757L12.7748 11.5172Z"
        fill="#3248B8"
      />
    </g>
  </g>

  <defs>
    <clipPath id="clip0_305_379">
      <rect
        width="12.8"
        height="13.6533"
        fill="white"
        transform="translate(0 5.85962)"
      />
    </clipPath>
  </defs>
    </svg>

        {/* <span className="Tail">{detail.Title} </span> */}
        
        <span className="out">{detail}</span>
     </span>
</>
))}
    </div>

    {/* RIGHT COLUMN */}
    <div className="col-md-6 mb-4 mb-md-0">
      <img
        style={{ marginTop: "70px" }}
        src="./img/team.png"
        alt="Example Image"
        className="img-fluid"
      />
    </div>
  </div>
</div>

<br />


</>)}
export default GetWorkEnvironmentData