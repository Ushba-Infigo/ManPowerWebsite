
import React,{useEffect,useState} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
const GetCompanyInfoAllData=()=>{

const [CompanyInfo,setCompanyInfo]=useState([]);

useEffect(()=>{

    const GetCompanyInfo=async()=>{
try{

    const GetCompanyInfoAPI= await axios.get('http://localhost:8001/api/GetCompanyInfo');
    setCompanyInfo(GetCompanyInfoAPI.data);
   }
catch(error)
{
console.log("error while fetching")}
        }
GetCompanyInfo();
},[]);

if(CompanyInfo.length==0){
    return null
}
 const data=CompanyInfo[0];
return(<>

<footer className="footer">
      <div className="pt-5 pb-3 px-5">
        <div className="row gy-4">
          {/* Logo & About */}
          <div className="col-lg-4 col-md-6" style={{ marginTop: 0 }}>
            <img src="./img/footer.png" alt="Logo" className="mb-3" />
            <p>
              With extensive outsourcing experience,<br />
              we combine technological expertise<br />
              and business insight to deliver<br />
              complex projects efficiently and swiftly.
            </p>
            <div
              className="social-icons mt-3"
              style={{ display: "flex", gap: "12px", marginTop: "29px" }}
            >
              {/* Facebook SVG */}
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.894531" width="30" height="30" rx="15" fill="white" />
                <path
                  d="M19.3703 15.875L19.7851 13.3413H17.1913V11.6971C17.1913 11.004 17.5536 10.3283 18.7153 10.3283H19.8945V8.17117C19.8945 8.17117 18.8244 8 17.8013 8C15.6652 8 14.269 9.21352 14.269 11.4103V13.3413H11.8945V15.875H14.269V22H17.1913V15.875H19.3703Z"
                  fill="#1E8ECC"
                />
              </svg>

              {/* Instagram SVG */}
              <svg
                width="31"
                height="30"
                viewBox="0 0 31 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.894531" width="30" height="30" rx="15" fill="white" />
                <path
                  d="M15.6445 11.0078C18.1055 11.0078 20.1367 13.0391 20.1367 15.5C20.1367 18 18.1055 19.9922 15.6445 19.9922C13.1445 19.9922 11.1523 18 11.1523 15.5C11.1523 13.0391 13.1445 11.0078 15.6445 11.0078ZM15.6445 18.4297C17.2461 18.4297 18.5352 17.1406 18.5352 15.5C18.5352 13.8984 17.2461 12.6094 15.6445 12.6094C14.0039 12.6094 12.7148 13.8984 12.7148 15.5C12.7148 17.1406 14.043 18.4297 15.6445 18.4297ZM21.3477 10.8516C21.3477 10.2656 20.8789 9.79688 20.293 9.79688C19.707 9.79688 19.2383 10.2656 19.2383 10.8516C19.2383 11.4375 19.707 11.9062 20.293 11.9062C20.8789 11.9062 21.3477 11.4375 21.3477 10.8516ZM24.3164 11.9062C24.3945 13.3516 24.3945 17.6875 24.3164 19.1328C24.2383 20.5391 23.9258 21.75 22.9102 22.8047C21.8945 23.8203 20.6445 24.1328 19.2383 24.2109C17.793 24.2891 13.457 24.2891 12.0117 24.2109C10.6055 24.1328 9.39453 23.8203 8.33984 22.8047C7.32422 21.75 7.01172 20.5391 6.93359 19.1328C6.85547 17.6875 6.85547 13.3516 6.93359 11.9062C7.01172 10.5 7.32422 9.25 8.33984 8.23438C9.39453 7.21875 10.6055 6.90625 12.0117 6.82812C13.457 6.75 17.793 6.75 19.2383 6.82812C20.6445 6.90625 21.8945 7.21875 22.9102 8.23438C23.9258 9.25 24.2383 10.5 24.3164 11.9062ZM22.4414 20.6562C22.9102 19.5234 22.793 16.7891 22.793 15.5C22.793 14.25 22.9102 11.5156 22.4414 10.3438C22.1289 9.60156 21.543 8.97656 20.8008 8.70312C19.6289 8.23438 16.8945 8.35156 15.6445 8.35156C14.3555 8.35156 11.6211 8.23438 10.4883 8.70312C9.70703 9.01562 9.12109 9.60156 8.80859 10.3438C8.33984 11.5156 8.45703 14.25 8.45703 15.5C8.45703 16.7891 8.33984 19.5234 8.80859 20.6562C9.12109 21.4375 9.70703 22.0234 10.4883 22.3359C11.6211 22.8047 14.3555 22.6875 15.6445 22.6875C16.8945 22.6875 19.6289 22.8047 20.8008 22.3359C21.543 22.0234 22.168 21.4375 22.4414 20.6562Z"
                  fill="#1E8ECC"
                />
              </svg>

              {/* Twitter SVG */}
              {/* Add other SVGs similarly */}
            </div>
          </div>

          {/* Discover */}
          <div className="col-lg-2 col-md-6 dua">
            <h6>Discover Manpower</h6>
            <ul>
              <li><Link  to="/">Home</Link></li>
              <li><Link  to="/AboutUsDetail">About Us </Link></li>
              <li><Link  to="/GetContactUs">Contact Us</Link></li>
              <li><Link  to="/GetCompanyCalture">Company Culture</Link></li>
              <li><Link to="/GetInsightsDetails">Insights</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 dua" style={{ paddingLeft: "58px" }}>
            <h6>Quick Links</h6>
            <ul>
              <li><Link  to="/IndustriesServicesHeaders">Industries</Link></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><Link  to="/AboutUsDetail">About Us </Link></li>
              <li><Link  to="/GetPricingDetail">Pricing</Link></li>
              <li><Link to="/GetFAQs">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6 dua" style={{ paddingLeft: "86px" }}>
  

    <h6>Stay Tuned With Us</h6>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.8944 13.9304C14.6175 13.9304 16.0144 12.5336 16.0144 10.8104C16.0144 9.0873 14.6175 7.69043 12.8944 7.69043C11.1713 7.69043 9.77441 9.0873 9.77441 10.8104C9.77441 12.5336 11.1713 13.9304 12.8944 13.9304Z"
        stroke="#D7D7D7"
        strokeWidth="2"
      />
      <path
        d="M4.51424 8.99C6.48424 0.330002 19.3142 0.340003 21.2742 9C22.4242 14.08 19.2642 18.38 16.4942 21.04C14.4842 22.98 11.3042 22.98 9.28424 21.04C6.52424 18.38 3.36424 14.07 4.51424 8.99Z"
        stroke="#D7D7D7"
        strokeWidth="2"
      />
    </svg><p style={{ marginLeft: "30px", marginTop: "-25px" }}>

     {data.Address}
    </p>

  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.1445 21H8.14453C5.14453 21 3.14453 19.5 3.14453 16V9C3.14453 5.5 5.14453 4 8.14453 4H18.1445C21.1445 4 23.1445 5.5 23.1445 9V16C23.1445 19.5 21.1445 21 18.1445 21Z"
        stroke="#D7D7D7"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.1445 9.5L15.0145 12C13.9845 12.82 12.2945 12.82 11.2645 12L8.14453 9.5"
        stroke="#D7D7D7"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <p style={{ margin: 0 }}> {data.Email}</p>
  </div>

  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.8645 18.83C22.8645 19.19 22.7845 19.56 22.6145 19.92C22.4445 20.28 22.2245 20.62 21.9345 20.94C21.4445 21.48 20.9045 21.87 20.2945 22.12C19.6945 22.37 19.0445 22.5 18.3445 22.5C17.3245 22.5 16.2345 22.26 15.0845 21.77C13.9345 21.28 12.7845 20.62 11.6445 19.79C10.4945 18.95 9.40453 18.02 8.36453 16.99C7.33453 15.95 6.40453 14.86 5.57453 13.72C4.75453 12.58 4.09453 11.44 3.61453 10.31C3.13453 9.17 2.89453 8.08 2.89453 7.04C2.89453 6.36 3.01453 5.71 3.25453 5.11C3.49453 4.5 3.87453 3.94 4.40453 3.44C5.04453 2.81 5.74453 2.5 6.48453 2.5C6.76453 2.5 7.04453 2.56 7.29453 2.68C7.55453 2.8 7.78453 2.98 7.96453 3.24L10.2845 6.51C10.4645 6.76 10.5945 6.99 10.6845 7.21C10.7745 7.42 10.8245 7.63 10.8245 7.82C10.8245 8.06 10.7545 8.3 10.6145 8.53C10.4845 8.76 10.2945 9 10.0545 9.24L9.29453 10.03C9.18453 10.14 9.13453 10.27 9.13453 10.43C9.13453 10.51 9.14453 10.58 9.16453 10.66C9.19453 10.74 9.22453 10.8 9.24453 10.86C9.42453 11.19 9.73453 11.62 10.1745 12.14C10.6245 12.66 11.1045 13.19 11.6245 13.72C12.1645 14.25 12.6845 14.74 13.2145 15.19C13.7345 15.63 14.1645 15.93 14.5045 16.11C14.5545 16.13 14.6145 16.16 14.6845 16.19C14.7645 16.22 14.8445 16.23 14.9345 16.23C15.1045 16.23 15.2345 16.17 15.3445 16.06L16.1045 15.31C16.3545 15.06 16.5945 14.87 16.8245 14.75C17.0545 14.61 17.2845 14.54 17.5345 14.54C17.7245 14.54 17.9245 14.58 18.1445 14.67C18.3645 14.76 18.5945 14.89 18.8445 15.06L22.1545 17.41C22.4145 17.59 22.5945 17.8 22.7045 18.05C22.8045 18.3 22.8645 18.55 22.8645 18.83Z"
        stroke="#D7D7D7"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
    <p style={{ margin: 0 }}> {data.Phone}</p>
  </div>
</div>

        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom d-flex justify-content-between align-items-center flex-wrap mt-4">
          <p className="mb-0">Copyright © 2025 All Rights Reserved</p>
          <p className="mb-0">
            <a href="#">Privacy Policy</a>{" "}
            <a href="#">Term of Service</a>
          </p>
        </div>
      </div>
    </footer>

</>)}

export default GetCompanyInfoAllData;