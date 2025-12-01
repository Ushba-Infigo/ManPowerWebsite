import React,{useEffect,useState} from "react";
import axios from "axios";

const GetChooseUsData= () =>{

    const [CUheader,setCUheader]=useState([]);
    const [CUDetail,setCUDetail]=useState([]);

useEffect(()=>{

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
},[])

if(CUheader.length==0){return null;}
const data=CUheader[0];
return (
  <section className="choose-section">
    <div className="px-lg-5 px-3">
      <div className="row" >
        {/* Left Column */}
        <div className="col-lg-4 col-md-12">
          <button className="btning">{data.CU_Tag}</button>
          <br />
          <br />
          <h2>{data.CU_Heading}</h2>
          <p>{data.CU_Description}</p>
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
                ChooseUsd.CUD_Image
                  ? `${process.env.PUBLIC_URL}/img/${ChooseUsd.CUD_Image}`
                  : `${process.env.PUBLIC_URL}/img/logo1.png`
              }
              alt="Client Logo"
            />
  &nbsp;&nbsp;
  <div>
    <h5 className="human">{ChooseUsd.CUD_Heading}</h5>
    <p>
      {ChooseUsd.CUD_Description}
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
);


}
export default GetChooseUsData;