
import React,{useEffect,useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
const GetContactUsData=()=>{

const [ContactUs,setContactUs]=useState([]);
useEffect(()=>{

    const GetContactUs=async()=>{

        try{

    const GetContactUsfromAPI= await axios.get("http://localhost:8001/api/GetContactUs")
    setContactUs(GetContactUsfromAPI.data);
        }
        catch(error)
        {
       console.log("error while fetching");

        }
       }

GetContactUs()
},[]);
if (ContactUs.length === 0) {
    return null; // or a loader
  }

  const data = ContactUs[0];
return(<>
<div className="overflow-hidden" style={{ marginTop: "-75px" }}>
  <img
    src={`${process.env.PUBLIC_URL}/img/vector.png`}
    alt="Contact Us Banner"
    style={{ width: "100%", height: "auto", display: "block" }}
  />
</div>

<center style={{ marginTop: "-84px" }}>
  <span>
   <Link to="/" className="home" style={{textDecoration: "none",cursor:"pointer"}}>Home</Link>&nbsp;&gt;&nbsp;
   
    <span className="contact">Contact us</span>
  </span>
</center>

<div
  style={{
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/graphic.png)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "left top",
    height: "240px",
    position: "relative",
  }}
>
  <div className="build">
   {data?.Title}
  </div>
</div>


<div style={{ padding: "80px", backgroundColor: "white" }}>
  <div className="row contact-section" style={{ marginTop: "-160px" }}>
    
    {/* Left Side */}
    <div className="col-lg-4 col-md-5 contact-left" style={{ marginTop: "-40px" }}>
      <h4 className="contact-title">{data?.Heading}</h4>
      <br />

      {/* Address Card */}
      <div className="contact-card">
        <svg
          className="nos"
          width="30"
          height="36"
          viewBox="0 0 30 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 0C7.025 0 0.5 6.48 0.5 14.4C0.5 24.12 13.1875 35.1 13.7313 35.64C14.0938 35.82 14.6375 36 15 36C15.3625 36 15.9062 35.82 16.2687 35.64C16.8125 35.1 29.5 24.12 29.5 14.4C29.5 6.48 22.975 0 15 0ZM15 31.86C11.1938 28.26 4.125 20.52 4.125 14.4C4.125 8.46 9.01875 3.6 15 3.6C20.9813 3.6 25.875 8.46 25.875 14.4C25.875 20.34 18.8062 28.26 15 31.86ZM15 7.2C11.0125 7.2 7.75 10.44 7.75 14.4C7.75 18.36 11.0125 21.6 15 21.6C18.9875 21.6 22.25 18.36 22.25 14.4C22.25 10.44 18.9875 7.2 15 7.2ZM15 18C13.0063 18 11.375 16.38 11.375 14.4C11.375 12.42 13.0063 10.8 15 10.8C16.9937 10.8 18.625 12.42 18.625 14.4C18.625 16.38 16.9937 18 15 18Z"
            fill="#3248B8"
          />
        </svg>
        &nbsp;&nbsp;&nbsp;
        <p>
         {data?.Location}
        </p>
      </div>

      <br />

      {/* Phone Card */}
      <div className="contact-card">
        <svg
          className="nos"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.39015 3.14972H10.4611L12.7399 8.84755L9.07842 11.2886C8.8628 11.4324 8.68602 11.6273 8.56377 11.8559C8.44152 12.0844 8.37758 12.3397 8.37762 12.5989C8.38234 12.7469 8.37762 12.6004 8.37762 12.6004V12.6335C8.37855 12.7039 8.3817 12.7743 8.38707 12.8445C8.39652 12.9737 8.41227 13.1485 8.44219 13.3642C8.50361 13.7895 8.62172 14.3753 8.85164 15.0651C9.31464 16.451 10.2217 18.2447 11.9887 20.0117C13.7556 21.7787 15.5494 22.6858 16.9336 23.1488C17.625 23.3788 18.2093 23.4953 18.6376 23.5583C18.8794 23.5921 19.1228 23.6131 19.3668 23.6213L19.3872 23.6229H19.3998C19.3998 23.6229 19.5762 23.6134 19.4014 23.6229C19.6938 23.6227 19.9804 23.5412 20.229 23.3874C20.4777 23.2335 20.6786 23.0135 20.8093 22.752L21.8644 20.6417L28.8503 21.8071V28.6105C25.5259 29.0908 16.5462 29.5648 9.49102 22.5095C2.4358 15.4541 2.90825 6.47267 3.39015 3.14972ZM11.6422 13.3642L14.4879 11.4681C15.0891 11.0671 15.5341 10.4716 15.7483 9.78139C15.9625 9.0912 15.9329 8.34835 15.6643 7.67743L13.3856 1.9796C13.1517 1.39518 12.7481 0.894228 12.2269 0.541376C11.7056 0.188525 11.0906 -4.21959e-05 10.4611 7.08249e-09H3.30826C1.87674 7.08249e-09 0.530266 0.993736 0.295617 2.54655C-0.239823 6.07738 -0.965817 16.5061 7.26422 24.7363C15.4943 32.9665 25.9227 32.2389 29.4535 31.705C31.0063 31.4688 32 30.1239 32 28.6923V21.8071C32.0001 21.0615 31.7357 20.34 31.2538 19.771C30.772 19.2021 30.1039 18.8225 29.3685 18.6999L22.3825 17.5361C21.7181 17.4251 21.0356 17.5302 20.4353 17.8357C19.835 18.1413 19.3484 18.6313 19.0471 19.2337L18.5022 20.3251C18.3095 20.2777 18.1188 20.2225 17.9305 20.1598C16.9541 19.8353 15.5982 19.1676 14.2155 17.7849C12.8328 16.4022 12.1651 15.0462 11.8407 14.0682C11.7632 13.837 11.6975 13.6021 11.6438 13.3642H11.6422Z"
            fill="#3248B8"
          />
        </svg>
        &nbsp;&nbsp;
        <p style={{ marginTop: "10px" }}>{data?.PhoneNo}</p>
      </div>

      <br />

      {/* Email Card */}
      <div className="contact-card">
        <svg
          className="nos"
          width="35"
          height="28"
          viewBox="0 0 35 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.025 0.5H28.975C30.3862 0.499908 31.744 1.03587 32.7698 1.99795C33.7956 2.96002 34.4116 4.27526 34.4915 5.67387L34.5 5.98437V22.0156C34.5001 23.4165 33.9602 24.7643 32.991 25.7825C32.0218 26.8008 30.6968 27.4123 29.2878 27.4916L28.975 27.5H6.025C4.61377 27.5001 3.25599 26.9641 2.23021 26.0021C1.20442 25.04 0.588398 23.7247 0.5085 22.3261L0.5 22.0156V5.98437C0.499908 4.58352 1.03984 3.23573 2.00904 2.21749C2.97824 1.19924 4.30323 0.587748 5.7122 0.508438L6.025 0.5ZM31.95 9.56694L18.095 16.8063C17.9386 16.8883 17.7666 16.9372 17.5901 16.9497C17.4137 16.9622 17.2365 16.938 17.0699 16.8789L16.9067 16.808L3.05 9.56862V22.0156C3.05003 22.7568 3.33079 23.4708 3.83656 24.016C4.34232 24.5612 5.03611 24.8976 5.7802 24.9586L6.025 24.9687H28.975C29.7219 24.9687 30.4414 24.6898 30.9907 24.1874C31.54 23.685 31.8788 22.9959 31.9398 22.2569L31.95 22.0156V9.56694ZM28.975 3.03125H6.025C5.27838 3.03128 4.55906 3.30998 4.00984 3.81202C3.46061 4.31407 3.12164 5.00276 3.0602 5.74137L3.05 5.98437V6.70831L17.5 14.2565L31.95 6.70662V5.98437C31.9499 5.24297 31.6689 4.52872 31.1628 3.98349C30.6567 3.43827 29.9625 3.10196 29.2181 3.04138L28.975 3.03125Z"
            fill="#3248B8"
          />
        </svg>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <p>
       {data?.Email}
        </p>
      </div>
    </div>

    <br />

    {/* Right Side Map */}
    <div className="col-lg-8 col-md-7 p-0">
      <img
        className="map"
              src={
                data?.Attachment
                  ? `${process.env.PUBLIC_URL}/img/${data?.Attachment}`
                  : `${process.env.PUBLIC_URL}/img/logo1.png`
              }
        alt="Map"
        style={{ width: "834px", height: "511px" }}
      />
    </div>
  </div>
</div>


</>)
}
export default GetContactUsData;