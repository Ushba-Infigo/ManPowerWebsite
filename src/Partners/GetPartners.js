
import React,{useEffect,useState} from "react";
import axios from "axios";

const GetPartnerAllData=()=>{

const [partners,setpartners]=useState([]);

useEffect(()=>{

    const GetPartners=async()=>{
try{

    const GetPartnersAPI= await axios.get('http://localhost:8001/api/GetPartners');
    setpartners(GetPartnersAPI.data);
   }
catch(error)
{
console.log("error while fetching")}
        }
GetPartners();
},[]);

if(partners.length==0){
    return null
}
 const data=partners[0];
return(

 <div className="my-5" style={{ padding :"0 60px"}}>
  <div className="row align-items-center">
 <div className="col-md-6">
 <div className="section-subtitles">{data.P_Tag}</div>
 <br/>
      <p className="best">{data.P_Heading}</p>
      <p className="collaborate">

    {data.P_Description.split(' ').map((word, index) => (
    <React.Fragment key={index}>
      {word}{' '}
      {(index + 1) % 7 === 0 && <br />} 
      {/* Inserts a <br/> after every 3 words */}
    </React.Fragment>
  ))}

      </p>
     </div>

    <div className="col-md-6 mb-4 mb-md-0">
      <img
        src={
        data.P_Image
        ?`${process.env.PUBLIC_URL}/img/${data.P_Image}`
       :`${process.env.PUBLIC_URL}/img/group.png}`
        }
       alt="Example Image"
      className="img-fluid"
	
	/>
    </div>
  </div>
 </div>



);

}

export default GetPartnerAllData;
