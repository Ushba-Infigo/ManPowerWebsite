
import React,{useEffect,useState} from "react";
import axios from "axios";

const GetPerformanceCounterAllData=()=>{

const [performancecounter,setperformancecounter]=useState([]);

useEffect(()=>{

    const Getperformancecounter=async()=>{
try{

    const GetPerformancecounterAPI= await axios.get('http://localhost:8001/api/GetPerformanceCounter');
    setperformancecounter(GetPerformancecounterAPI.data);
   }
catch(error)
{
console.log("error while fetching")}
        }
Getperformancecounter();
},[]);

if(performancecounter.length==0){
    return null
}
 const data=performancecounter[0];
return(

 <div className="container mt-5">
    <div className="stats-wrapper">
      <div className="stats-content row">
   {
    performancecounter.map((performance,index)=>{
    
    return(
        <div className="col-12 col-md-3 stats-item">
          <div className="stats-icon">

           <img
              src={
                performance.PIC_Image
                  ? `${process.env.PUBLIC_URL}/img/${performance.PIC_Image}`
                  : `${process.env.PUBLIC_URL}/img/logo1.png`
              }
              alt="Client Logo" style={{marginTop:"-42px ", width:"52", height:"53"}}
            />
     
   </div>
    <div className="stats-text-block">
    <h3 id="satisfaction" style={{color:"white"}}>{performance.counter}</h3>
 
    <p style={{color:"white"}}>{performance.PIC_Heading}</p>
    
  </div>

        </div>
 )}
    )}
      </div>
    </div>
  </div>



);

}

export default GetPerformanceCounterAllData;
