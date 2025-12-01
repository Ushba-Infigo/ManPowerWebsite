
import React,{useEffect,useState} from "react";
import axios from "axios";

const GetRecruitmentProcessAllData=()=>{

const [Recruitment,setRecruitment]=useState([]);
const [RecruitmentReq,setRecruitmentReq]=useState([]);

useEffect(()=>{

    const GetRecruitments=async()=>{
try{
    const GetRecruitmentAPI= await axios.get('http://localhost:8001/api/GetRecruitmentProcess');
    setRecruitment(GetRecruitmentAPI.data);
   }
catch(error)
{
console.log("error while fetching")}
 }
const GetRecruitmentsRequirements=async()=>{
  try{
    const GetRecruitmentReqAPI=await axios.get('http://localhost:8001/api/GetRecruitmentRequirements');
    setRecruitmentReq(GetRecruitmentReqAPI.data);
   }
catch(error)
{
console.log("error while fetching")}
 }
 
GetRecruitments();
GetRecruitmentsRequirements();
},[]);

if(Recruitment.length==0){
    return null
}
if(RecruitmentReq.length==0){
    return null
}
 const data=Recruitment[0];
 return (
    <div>
      <br /> <br /> <br />
      <center>
        <div className="section-subtitle">{data.R_Tag}</div>
      </center>
      <br />
      <center>
        <p className="expert">{data.R_Heading}</p>
      </center>

      <div className="px-5">
        <div className="services-box">
          <div className="row">
            {RecruitmentReq.map((processreq, index) => (
              <div className="col-lg-2 col-md-4 col-sm-6" key={index}>
                <div className="service-item divider">
                  {/* Circle Icon */}
                  <div
                    style={{
                      width: "65px",
                      height: "65px",
                      background: "rgba(50, 72, 184, 1)",
                      transition: "0.3s",
                      borderRadius: "50%",
                      marginBottom: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(82, 183, 232, 0.4)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(50, 72, 184, 1)")
                    }
                  >
                        <img
              src={
                processreq.RR_Image
                  ? `${process.env.PUBLIC_URL}/img/${processreq.RR_Image}`
                  : `${process.env.PUBLIC_URL}/img/logo1.png`
              }
              alt="Client Logo"
            />
                  </div>

                  {/* Dynamic Content */}
                  <div className="service-title">{processreq.RR_Heading}</div>
                  <div className="service-desc">
                    {processreq.RR_Description ||
                      "CV screening matches applicant's skills, qualifications, and professional capabilities against my job's requirements."}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

}

export default GetRecruitmentProcessAllData;