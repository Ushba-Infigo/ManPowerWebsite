
import React,{useEffect,useState} from "react";
import axios from "axios";

const GetConsultationBannerData=()=>{

const [Consultus,setconsultus]=useState([]);
useEffect(()=>{

    const GetConsultUs=async()=>{

        try{

    const GetConsultUsfromAPI= await axios.get("http://localhost:8001/api/GetConsultationBanner")
    setconsultus(GetConsultUsfromAPI.data);
        }
        catch(error)
        {
       console.log("error while fetching");

        }
       }

GetConsultUs()
},[]);

if (Consultus.length === 0) {
    return null; // or a loader
  }

  const data = Consultus[0];
return(

<>
<br />

<div className="banner-container" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
  <div className="banner-bg"></div>

  <div className="w-full max-w-full overflow-hidden">
    <img
      src="./img/news.png"
      className="w-full sky object-cover"
      alt="News"
      style={{ maxWidth: "1138px", height: "250px" }}
    />
  </div>

  <div className="banner">
    <div className="banner-content"> 
         <div className="row">
      <div className="banner-left col-md-8">
        <h6>{data.C_Heading}</h6>
        <h2>
       {data.C_Title}
        </h2>
      </div>

      <div className="banner-right  col-md-4">
        <button className="btn">Get a Free Consultation</button>
        <br />
        <br />

        <div className="phone">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="41"
              height="41"
              rx="20.5"
              stroke="white"
              strokeOpacity="0.4"
            />
            <path
              d="M29.645 24.095C28.4006 24.095 27.2228 23.895 26.1117 23.495C25.8006 23.4061 25.5006 23.395 25.2117 23.4617C24.9228 23.5284 24.6894 23.6506 24.5117 23.8284L22.245 25.5617C20.9561 24.8506 19.8672 24.0506 18.9783 23.1617C18.0894 22.2728 17.2894 21.1839 16.5783 19.895L18.245 17.695C18.4672 17.4728 18.6117 17.2172 18.6783 16.9284C18.745 16.6395 18.7339 16.3617 18.645 16.095C18.2894 14.9395 18.1117 13.7395 18.1117 12.495C18.1117 12.0506 17.9561 11.6728 17.645 11.3617C17.3339 11.0506 16.9561 10.895 16.5117 10.895H12.845C12.4006 10.895 12.0228 11.0506 11.7117 11.3617C11.4006 11.6728 11.245 12.0506 11.245 12.495C11.245 15.8284 12.0894 18.9172 13.7783 21.7617C15.3783 24.5617 17.5783 26.7617 20.3783 28.3617C23.2228 30.0506 26.3117 30.895 29.645 30.895C30.0894 30.895 30.4672 30.7395 30.7783 30.4284C31.0894 30.1172 31.245 29.7395 31.245 29.295V25.6284C31.245 25.1839 31.0894 24.8172 30.7783 24.5284C30.4672 24.2395 30.0894 24.095 29.645 24.095Z"
              fill="white"
            />
          </svg>
          <span>{data.C_PhoneNumber}</span>
          </div>
      </div>
    </div>
  </div>
   </div>
</div>

<br />
<br />
<br />
<br />



</>

);
}

export default GetConsultationBannerData;