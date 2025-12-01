
import React,{useEffect,useState} from "react";
import axios from "axios";

const GetAboutUsData=()=>{

const [aboutus,setaboutus]=useState([]);
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

GetAboutUs()
},[]);

if (aboutus.length === 0) {
    return null; // or a loader
  }

  const data = aboutus[0];
return(


    <div className="container-fluid my-5" style={{overflowX: "hidden"}}>
  <div className="row align-items-center">
<div className="col-md-6 text-center mb-4 mb-md-0 abouting-container">
  {aboutus.length > 0 && (
    <img 
      src={
        data.About_Image
          ? `${process.env.PUBLIC_URL}/img/${ aboutus[0].About_Image}`
          : `${process.env.PUBLIC_URL}/img/about2.png}`
      } 
      alt="Image"
     className="abouting" style={{borderRadius: "32px"}}
    />
  )} 
</div>

    <div className="col-md-6 mt-lg--200">
      <div className="section-subtitless mb-4">
          {data.About_Tag}
          
        </div>
    <p className="smart">
    {data.About_Heading.split(' ').map((word, index) => (
    <React.Fragment key={index}>
      {word}{' '}
      {(index + 1) % 3 === 0 && <br />} 
      {/* Inserts a <br/> after every 3 words */}
    </React.Fragment>
  ))}
</p>

     {/* Split the text into lines */}
   {aboutus.length > 0 && (
  <p className="help">
    {aboutus[0].About_Description.split(' ').map((word, index) => (
      <>
        {word + ' '}
        {(index + 1) % 40=== 0 && <><br/><br/></>} 
        {/* adds 2 line breaks roughly after 4 visual lines */}
      </>
    ))}
  </p>
)}

<br/>

   <div className="d-flex flex-wrap justify-content-start gap-4">
   <div className="first-crd">
  <div className="card-body ">
    <p className="first" id="projects">100+</p>
    <p className="comp">Projects Completed</p>
  </div>
</div>

      <div className="first-crd ">
  <div className="card-body ">
    <p className="first" id="clients">98%</p>
    <p className="comp">Client Satisfied</p>
  </div>
</div>
      <div className="first-crd ">
  <div className="card-body ">
    <p className="first" id="industry">80%</p>
    <p className="comp">Industry Project</p>
  </div>
</div>
      </div><br/><br/>
      <button className="learn">Learn More</button>

    </div>
  </div>
</div>

);
}

export default GetAboutUsData;