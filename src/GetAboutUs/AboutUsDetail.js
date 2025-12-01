
import React,{useEffect,useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const GetAboutUsDetailData=()=>{

const [aboutus,setaboutus]=useState([]);
const [mission,setMission]=useState([]);
const [core,setcore]=useState([]);
const [coreD,setcoreD]=useState([]);
const [History,setHistory]=useState([]);
const [HistoryD,setHistroyD]=useState([]); 
const [CUheader,setCUheader]=useState([]);
const [CUDetail,setCUDetail]=useState([]);
useEffect(()=>{

    const GetAboutUs=async()=>{

        try{

    const GetAboutUsfromAPI= await axios.get("http://localhost:8001/api/GetAboutUs")
    setaboutus(GetAboutUsfromAPI.data);
        }
        catch(error)
        {
       console.log("error while fetching");

        }
       }
    const GetAboutMission=async()=>{

        try{

    const GetAboutMissionfromAPI= await axios.get("http://localhost:8001/api/GetMission")
    setMission(GetAboutMissionfromAPI.data);
        }
        catch(error)
        {
       console.log("error while fetching");

        }
       }
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
    const GetHistory=async()=>{

        try{

  const GetHistoryfromAPI= await axios.get("http://localhost:8001/api/GetHistory")
  setHistory(GetHistoryfromAPI.data);
    }
    catch(error)
    {
     console.log("error while fetching");

        }
       }
    const GetHistoryDetail=async()=>{

        try{

    const GetHistoryDetailfromAPI= await axios.get("http://localhost:8001/api/GetHistoryDetail")
    setHistroyD(GetHistoryDetailfromAPI.data);
        }
        catch(error)
        {
       console.log("error while fetching");

        }
       }
     const GetCUHeaderData=async()=>{

try{
const {data}=await axios.get('http://localhost:8001/api/GetChooseUs')
setCUheader(data);

}
catch(error){

console.log("error while fetching Choose Us header:",error)
}


       }
    const GetCUDetailData=async()=>{

try{
const {data}=await axios.get('http://localhost:8001/api/GetChooseUsDetail')
setCUDetail(data);

}
catch(error){

console.log("error while fetching Choose Us header:",error)
}


       }

GetCUHeaderData();
GetCUDetailData();   
GetAboutUs();
GetAboutMission();
GetCore();
GetCoreDetail();
GetHistory();
GetHistoryDetail();
},[]);

if (aboutus.length === 0) {
    return null; // or a loader
  }
debugger
  const data = aboutus[0];
  const dataDetail = data?.About_Detail||[];
  const dataDetailCounter = data?.Detail_Counter||[];
  const dataMission = mission[0];
   const dataMissionDetail = dataMission?.Detail||[]; 
  const dataCore = core[0];
  const dataHistory = History[0];
  const dataCU=CUheader[0];
 // const dataCoreDetail = coreD[0];
return(

<>
 <div className="overflow-hidden" style={{ marginTop: "-75px" }}>
  <img
    src="/img/vector.png"
    alt="Contact Us Banner"
    style={{ width: "100%", height: "auto", display: "block" }}
  />
</div>

<center style={{ marginTop: "-84px" }}>
  <span>
    <Link to="/" className="home" style={{textDecoration: "none",cursor:"pointer"}}>Home</Link>&nbsp;&gt;&nbsp;
   <span className="contact">About Us</span>
  </span>
</center>

<center className="smaller">
{data?.About_Heading}
</center>

<br />

<div className="container-fluid my-5" style={{ overflowX: "hidden" }}>
  <div className="row align-items-center">
    {/* IMAGE COLUMN */}
    <div className="col-md-6 text-center mb-4 mb-md-0">
      <img
         src={
        data.About_Image
          ? `${process.env.PUBLIC_URL}/img/${ aboutus[0].About_Image}`
          : `${process.env.PUBLIC_URL}/img/empowering.png}`
      } 
        alt="Image"
        className="img-fluid rounded"
        style={{ height: "730px", display: "block", margin: "0 auto" }}
      />
    </div>

    {/* TEXT COLUMN */}
    <div className="col-md-6 mt-lg--200">
      <div className="section-subtitlee mb-4">Who we are</div>
      <div className="row">
    
      <div className="col-md-0 mt-lg--200"></div>
      <div className="col-md-8">
      <p className="smart">
       {data?.About_Heading}
      </p>
      </div>
      <div className="col-md-2 mt-lg--200"></div>
</div>
      <p className="help" style={{ width: "85%" }}>
      {data?.About_Description}
      </p>

    

      {/* FEATURES LIST */}
      {/* Feature 1 */}
      {dataDetail.map((detail,index) =>(
        <>
   <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "5px",
          verticalAlign: "middle",
          marginBottom:"-15px"
        }}
        key={index}  >
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

        {/* <span className="Tail">Tailored Solutions</span> */}
        <span className="out">{detail?.Detail_Description}</span>
      </span> <br />
      </>
      ))}
     

      {/* COUNTER CARDS */}
    
  <div
        className="d-flex flex-wrap  justify-content-start gap-3"
        style={{ marginLeft: "-594px", marginTop: "-36px" }}
      >
          {dataDetailCounter.map((counter,index)=>(
        <div
          className="first-crd"
          style={{
            width: "154px",
            height: "99px",
            backgroundColor: "white",
          }}
        >
          <div className="card-body" style={{ width: "148px", margin: "auto" }}>
            <p className="first" id="projects">
             {counter?.Counter}
            </p>
            <p className="comp" style={{ marginTop: "-10px", fontSize: "14px" }}>
             {counter?.Counter_Desc}
            </p>
          </div>
        </div>

   ))}
        
      </div>

   
    
    </div>
  </div>
</div>

<br />
{/* Mission Section */}
<div className="industries-section overflow-hidden">
  <div className="section-header" style={{ textAlign: "start" }}>
    <div className="section-subtitlee">{dataMission?.Tag}</div>
    <br />
     <div className="row">
      <div className="col-4">
       <h1 className="section-title">
      {dataMission?.Heading}
    </h1></div></div>
    <br />
  </div>

<ul
  className="nav nav-tabs2"
  role="tablist"
  style={{
    borderRadius: "12px",
    border: "0px",
    width: "900px",
    marginTop: "-20px",
    marginLeft: "-20px",
    display: "flex",
    justifyContent: "flex-start",
    gap: "10px",
  }}
>
  {dataMissionDetail.map((MissionDetail, index) => (
    <li className="nav-item" role="presentation" key={index}>
      <button
        className={`nav-link ${index === 0 ? "active" : ""}`}
        id={`tab-${index}`}
        data-bs-toggle="tab"
        data-bs-target={`#content-${index}`}
        type="button"
        role="tab"
      >
        {MissionDetail?.Tab_Heading}
      </button>
    </li>
  ))}
</ul>


  <div className="tab-content" id="industryTabContent">
    {/* Mission */}
         {dataMissionDetail.map((MissionDetail2, index) => (
    <div className={`tab-pane show ${index === 0 ? "active" : ""}`}
    id={`content-${index}`} role="tabpanel">
      <div className="industry-content">
        <div className="content-text" style={{ marginTop: "-160px" }}>
      
          <p key={index}>
          {MissionDetail2?.Tab_Description}
          </p>
          
        </div>

        <div className="content-image">
          <div style={{ marginTop: "-276px" }}>
            <img className="gnb"

               src={
            MissionDetail2.Tab_Attachment
          ? `${process.env.PUBLIC_URL}/img/${ MissionDetail2.Tab_Attachment}`
          : `${process.env.PUBLIC_URL}/img/empowering.png}`
      } 
             
             alt="Telecommunication Tower" />
          </div>
        </div>
      </div>
    </div>
 ))}
 
  </div>
</div>

<br />
<section className="contact-section" style={{background: "linear-gradient(to bottom, #1e40af 67%, #ffffff 30%"}}>

  {/* Background image */}
  <img
    src="./img/white.png"
    alt=""
    style={{
      position: "absolute",
      bottom: "35px",
      right: "50px",
      width: "290px",
      height: "294px",
      zIndex: 0,
      pointerEvents: "none",
      display: "block",
      margin: 0,
      padding: 0,
    }}
  />

  <div className="container" style={{ position: "relative", zIndex: 1 }}>
    <div className="row align-items-center">
      {/* LEFT SIDE */}
      <div className="col-lg-7 contact-left" style={{ marginTop: "-20px" }}>
        <button className="inner-btn osm">{dataCore?.Tag}</button>
        <br />

        <h2
          className="partner2"
          style={{ marginLeft: "-34px", marginTop: "-15px" }}
        >
         {dataCore?.Heading}
        </h2>

        <br />
        <br />
        <br />
      </div>
    </div>
  </div>

  <br />
  <br />
</section>
<div
  className="container-fluid"
  style={{
    paddingLeft: "60px",
    paddingRight: "60px",
    marginTop: "-120px",
  }}
>
  <section className="values-section">
    <div className="row hous g-3 justify-content-center">
        {coreD.map((coreDetail, index) => (
      <div className="col-md-2 col-lg-2">
        

        <div className="value-card" key={index}>
          <div className="value-icon">
            <img 
           src={ coreDetail.Tab_Icon
                  ? `${process.env.PUBLIC_URL}/img/${coreDetail?.Tab_Icon}`
                  : `${process.env.PUBLIC_URL}/img/2ndb.png`}
             
            
            alt="" />
          </div>
          <h5 className="value-title" style={{ marginTop: "30px" }}>
           
        {coreDetail?.Tab_Heading}
          </h5>
          <p className="value-text">
            {coreDetail?.Tab_Description}
          </p>
        </div>

      </div>))}
    </div>
  </section>
</div>
<br/><br/><br/>
<div
  style={{
    backgroundImage: "url('./img/linebg.png')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "auto"
  }}
>
  <center>
    <br />
    <div className="section-subtitles">{dataHistory?.Tag}</div>
  </center>

  <br />

  <center>
    <p className="expert">{dataHistory?.Heading}</p>
  </center>

  <center>
    <p className="history text-center">{dataHistory?.Description}</p>
  </center>
</div>
  <section className="timeline-section container">
      {/* Block 1 */}
      <div className="timeline-block">
        <span className="timeline-dot"></span>
    {HistoryD.map((historyD, index) => {
  const isEven = index % 2 === 0; // even index: text right, image left
  return (
    <div className="row align-items-center mb-5" key={index}>
      {isEven ? (
        <>
          {/* Image Left */}
          <div className="col-lg-5">
            <div className="img-card">
              <img
                src={
                  historyD.H_Attachment
                    ? `${process.env.PUBLIC_URL}/img/${historyD?.H_Attachment}`
                    : `${process.env.PUBLIC_URL}/img/empowering.png`
                }
                className="w-100"
                alt=""
              />
            </div>
          </div>

          {/* Text Right */}
          <div className="col-lg-6 ms-auto text-content">
            <h3
              className="nah"
              style={{ marginLeft: "100px", fontSize: "19px", fontWeight: "bold" }}
            >
              {historyD?.H_Heading}
            </h3>
            <p style={{ marginLeft: "100px", width: "80%" }}>
              {historyD?.H_Description}
            </p>
          </div>
        </>
      ) : (
        <>
          {/* Text Left */}
          <div className="col-lg-6 text-content">
            <h3
              className="nah"
              style={{ fontSize: "19px", fontWeight: "bold" }}
            >
              {historyD?.H_Heading}
            </h3>
            <p style={{ width: "80%" }}>{historyD?.H_Description}</p>
          </div>

          {/* Image Right */}
          <div className="col-lg-5 ms-auto">
            <div className="img-card">
              <img
                src={
                  historyD?.H_Attachment
                    ? `${process.env.PUBLIC_URL}/img/${historyD?.H_Attachment}`
                    : `${process.env.PUBLIC_URL}/img/empowering.png`
                }
                className="w-100"
                alt=""
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
})}

   
      </div>
    </section>
<br />
<br />

<section className="choose-section" style={{backgroundColor:" rgba(238, 248, 253, 1) !important;"}}>
    <div className="px-lg-5 px-3">
      <div className="row" >
        {/* Left Column */}
        <div className="col-lg-4 col-md-12">
          <button className="btning">{dataCU?.CU_Tag}</button>
          <br />
          <br />
          <h2>{dataCU?.CU_Heading}</h2>
          <p>{dataCU?.CU_Description}</p>
        </div>

        {/* Right Column */}
        <div className="col-lg-8 col-md-12">
              {CUDetail.map((ChooseUsd, index) =>{
          if (index % 2 === 0){
            return(

          <div className="row" key={index}>
             <div className="col-md-6">
            <div className="feature-item">
              <img
              src={
                ChooseUsd?.CUD_Image
                  ? `${process.env.PUBLIC_URL}/img/${ChooseUsd?.CUD_Image}`
                  : `${process.env.PUBLIC_URL}/img/logo1.png`
              }
              alt="Client Logo"
            />
  &nbsp;&nbsp;
  <div>
    <h5 className="human">{ChooseUsd?.CUD_Heading}</h5>
    <p>
      {ChooseUsd?.CUD_Description}
    </p>
  </div>
</div>
        </div>
            {CUDetail[index + 1] && (
         <div className="col-md-6">
        <div className="feature-item">
           <img
              src={
                CUDetail[index + 1].CUD_Image
                  ? `${process.env.PUBLIC_URL}/img/${CUDetail[index + 1].CUD_Image}`
                  : `${process.env.PUBLIC_URL}/img/logo1.png`
              }
              alt="Client Logo"
            />
      &nbsp;&nbsp;
      <div>
      <h5 className="human">{CUDetail[index + 1] .CUD_Heading}</h5>
      <p>
      {CUDetail[index + 1] .CUD_Description}
    </p>
  </div>
    </div>
       </div>
            )}
          
          </div>

            )
        
             } })}
            
        </div>
                
      </div>
    </div>
  </section>
<br/><br/><br/>
</>

);




}

export default GetAboutUsDetailData;