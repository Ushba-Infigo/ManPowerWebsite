
import React,{useEffect,useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const GetArticalAllInsights=()=>{
const { id } = useParams(); 
const [articalInsights,setArticalInsights]=useState([]);
const [Insight,setInsight]=useState([]);
const [insights,setInsights]=useState(null);

useEffect(()=>{

    const GetArticalInsights=async()=>{
try{

    const GetArticalInsightsAPI= await axios.get('http://localhost:8001/api/GetArticalInsightDetails');
    setArticalInsights(GetArticalInsightsAPI.data);
        if (id) {
    const GetInsightsByIDAPI= await axios.get(`http://localhost:8001/api/GetInsightsDataById/${id}`);
    setInsights(GetInsightsByIDAPI.data);
        }
            const GetInsightAPI= await axios.get(`http://localhost:8001/api/GetArticalInsights`);
    setInsight(GetInsightAPI.data);
   }
catch(error)
{
console.log("error while fetching")}
        }
GetArticalInsights();
},[id]);
// debugger
if(articalInsights.length==0){
    return null
}
 const data=articalInsights[0];
 const Insightdata=Insight[0];
 const insightList=Insightdata?.Insights_List||[];
 const insight=insights;

return (
  <>
   
    <center style={{ marginTop: "-84px" }}>
      <span>
        <span className="home">Home</span>&nbsp;&gt;&nbsp;
        <span className="home">Insights</span>&nbsp;&gt;&nbsp;
        <span className="contact">{insight?.Title}</span>
      </span>
    </center>
<div className="row">
    <div className="col-md-2"></div>
    <div class="col-md-8">
       <center className="smaller">
        {data?.Title}
         </center>
    </div>
    <div className="col-md-2"></div>
    </div>
    

    <br /><br /><br />

    <div style={{ overflow: "hidden", paddingLeft: "63px", paddingRight: "10px" }}>
      <div className="row">
        <div className="col-8">
          <img
                src={
                        insight?.CoverImage
                        ?`${process.env.PUBLIC_URL}/img/${insight?.CoverImage}`
                        :`${process.env.PUBLIC_URL}/img/card1.png}`
                     }
            className="img-fluid hon"
            style={{ maxWidth: "825px", height: "462px" }}
          />
          <br /><br /><br />

          <p className="expo">{data?.Heading1}</p>
          <span className="presents">
           {data?.Description1} </span>
        
          <br /><br />

          <p className="expo">{data?.Heading2}</p>
          <span className="presents">{data?.Description2}</span>
          <br /><br />


          <p className="expo">{data?.Heading3}</p>
          <span className="presents">{data?.Description3}</span>
      
          <br /><br />

          <p className="expo">{data?.Heading4}</p>
          <span className="presents">{data?.Description4}</span>
        
          <br /><br />
         <p className="expo">{data?.Heading5}</p>
          <span className="presents">{data?.Description5}</span>
                <br /><br />
        <p className="expo">{data?.Heading6}</p>
          <span className="presents">{data?.Description6}</span>    
              <br /><br />
       <p className="expo">{data?.Heading7}</p>
          <span className="presents">{data?.Description7}</span>
          <br /><br />
        

          <div className="bottom-section2 text-center">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <p className="share2" style={{ margin: 0 }}>Like what you see? Share with a friend.</p>
              <div className="social-icons" style={{ display: 'flex', gap: '10px', marginLeft: '90px' }}>
                <a href="#">
                  {/* Facebook Icon */}
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.6055 0H4.39453C1.97159 0 0 1.97159 0 4.39453V25.6055C0 28.0284 1.97159 30 4.39453 30H13.2422V19.3945H9.72656V14.1211H13.2422V10.5469C13.2422 7.63893 15.6077 5.27344 18.5156 5.27344H23.8477V10.5469H18.5156V14.1211H23.8477L22.9688 19.3945H18.5156V30H25.6055C28.0284 30 30 28.0284 30 25.6055V4.39453C30 1.97159 28.0284 0 25.6055 0Z" fill="white"/>
                  </svg>
                </a>
                <a href="#">
                  {/* X Icon */}
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.0033 14.4882L22.7544 24.1446H19.9838L14.4747 16.2649L13.6659 15.1077L7.23047 5.90234H10.0011L15.1945 13.3314L16.0033 14.4882Z" fill="white"/>
                    <path d="M26.7584 0H3.24156C1.45134 0 0 1.45134 0 3.24156V26.7584C0 28.5487 1.45134 30 3.24156 30H26.7584C28.5487 30 30 28.5487 30 26.7584V3.24156C30 1.45134 28.5487 0 26.7584 0ZM19.135 25.4406L13.5601 17.3271L6.58044 25.4406H4.77653L12.7592 16.1619L4.77653 4.54401H10.865L16.144 12.2269L22.7533 4.54401H24.5572L16.9452 13.3924L25.2235 25.4406H19.135Z" fill="white"/>
                  </svg>
                </a>
                <a href="#">
                  {/* LinkedIn Icon */}
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_916_3067)">
                      <path d="M25.9091 0H4.09091C1.83156 0 0 1.83156 0 4.09091V25.9091C0 28.1684 1.83156 30 4.09091 30H25.9091C28.1684 30 30 28.1684 30 25.9091V4.09091C30 1.83156 28.1684 0 25.9091 0Z" fill="white"/>
                      <path d="M10.807 8.18182C10.807 8.68751 10.657 9.18184 10.3761 9.60231C10.0951 10.0228 9.69583 10.3505 9.22863 10.544C8.76143 10.7375 8.24734 10.7882 7.75137 10.6895C7.25539 10.5909 6.79981 10.3473 6.44224 9.98976C6.08466 9.63218 5.84114 9.1766 5.74249 8.68063C5.64383 8.18465 5.69447 7.67056 5.88799 7.20337C6.08151 6.73617 6.40922 6.33685 6.82969 6.0559C7.25015 5.77495 7.74449 5.625 8.25018 5.625C8.92829 5.625 9.57863 5.89438 10.0581 6.37387C10.5376 6.85337 10.807 7.50371 10.807 8.18182Z" fill="url(#paint0_linear_916_3067)"/>
                      <path d="M10.2275 12.4427V23.7387C10.2279 23.822 10.2119 23.9046 10.1803 23.9818C10.1487 24.0589 10.1022 24.129 10.0435 24.1881C9.9847 24.2472 9.91483 24.294 9.83789 24.326C9.76094 24.358 9.67843 24.3745 9.59509 24.3745H6.90021C6.81687 24.3747 6.73432 24.3585 6.65729 24.3267C6.58025 24.2949 6.51026 24.2482 6.45133 24.1893C6.39241 24.1304 6.34571 24.0604 6.31393 23.9833C6.28214 23.9063 6.26589 23.8237 6.26612 23.7404V12.4427C6.26612 12.2745 6.33292 12.1132 6.45184 11.9943C6.57075 11.8754 6.73204 11.8086 6.90021 11.8086H9.59509C9.76297 11.809 9.92381 11.8761 10.0424 11.9949C10.1609 12.1138 10.2275 12.2748 10.2275 12.4427Z" fill="url(#paint1_linear_916_3067)"/>
                      <path d="M24.3139 18.3234V23.7916C24.3141 23.8682 24.2992 23.9441 24.27 24.0149C24.2408 24.0857 24.1979 24.1501 24.1437 24.2043C24.0895 24.2584 24.0251 24.3014 23.9543 24.3306C23.8835 24.3598 23.8076 24.3747 23.731 24.3745H20.8332C20.7566 24.3747 20.6807 24.3598 20.6099 24.3306C20.5391 24.3014 20.4747 24.2584 20.4205 24.2043C20.3663 24.1501 20.3234 24.0857 20.2942 24.0149C20.265 23.9441 20.2501 23.8682 20.2503 23.7916V18.4921C20.2503 17.7012 20.4821 15.0285 18.1827 15.0285C16.4014 15.0285 16.0383 16.8575 15.9668 17.679V23.7916C15.9668 23.9447 15.9065 24.0917 15.799 24.2008C15.6915 24.3099 15.5455 24.3723 15.3923 24.3745H12.5935C12.517 24.3745 12.4413 24.3594 12.3706 24.3301C12.3 24.3008 12.2358 24.2578 12.1818 24.2037C12.1279 24.1495 12.0851 24.0852 12.056 24.0145C12.0269 23.9438 12.012 23.868 12.0122 23.7916V12.3933C12.012 12.3168 12.0269 12.241 12.056 12.1703C12.0851 12.0996 12.1279 12.0353 12.1818 11.9811C12.2358 11.927 12.3 11.884 12.3706 11.8547C12.4413 11.8254 12.517 11.8103 12.5935 11.8103H15.3923C15.5469 11.8103 15.6952 11.8717 15.8045 11.981C15.9139 12.0904 15.9753 12.2386 15.9753 12.3933V13.3785C16.6366 12.3864 17.6168 11.6211 19.7082 11.6211C24.3412 11.6211 24.3139 15.9472 24.3139 18.3234Z" fill="url(#paint2_linear_916_3067)"/>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_916_3067" x1="5.74308" y1="7.22751" x2="9.16286" y2="7.67003" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3248B8"/>
                        <stop offset="0.107524" stopColor="#4257C0"/>
                        <stop offset="0.359783" stopColor="#374EC0"/>
                        <stop offset="1" stopColor="#467EBB"/>
                      </linearGradient>
                      {/* ... other gradients ... */}
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <br />
          <div style={{ borderBottom: '1px solid rgba(108, 120, 128, 1)', width: '73%' }}></div>
          <br />
          <p className="real">Related Articles</p>
        </div>

        {/* Sidebar */}
      <div className="col-lg-4 col-md-6 col-sm-10">
  <div className="position-relative profile-card text-start">
    <img
       src={
                        insight?.AuthorImage
                        ?`${process.env.PUBLIC_URL}/img/${insight?.AuthorImage}`
                        :`${process.env.PUBLIC_URL}/img/card1.png}`
                     }
 
    
    alt="Profile"/>
   
<svg style={{marginTop: '50px', marginLeft: '10px'}} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"/>

    <p className="mt-4 mb-1 ali">{insight?.AuthorName}</p>
    <p className="mb-3 founder">{insight?.Category}</p>
    <hr/>
    <p className="ux-text">
    {insight?.Description}
    </p>
  </div><br/>
  {/* ... rest of sidebar ... */}

        <div className="bottom-section text-center mb-3">
          <p className="mb-3 share">Share with your community!</p>
          <div className="social-icons text-start">
            <a href="#">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_916_3020)">
<path d="M25.6055 0H4.39453C1.97159 0 0 1.97159 0 4.39453V25.6055C0 28.0284 1.97159 30 4.39453 30H13.2422V19.3945H9.72656V14.1211H13.2422V10.5469C13.2422 7.63893 15.6077 5.27344 18.5156 5.27344H23.8477V10.5469H18.5156V14.1211H23.8477L22.9688 19.3945H18.5156V30H25.6055C28.0284 30 30 28.0284 30 25.6055V4.39453C30 1.97159 28.0284 0 25.6055 0Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_916_3020">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg></a>
            <a href="#">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_916_3022)">
<path d="M16.0033 14.4882L22.7544 24.1446H19.9838L14.4747 16.2649V16.2644L13.6659 15.1077L7.23047 5.90234H10.0011L15.1945 13.3314L16.0033 14.4882Z" fill="white"/>
<path d="M26.7584 0H3.24156C1.45134 0 0 1.45134 0 3.24156V26.7584C0 28.5487 1.45134 30 3.24156 30H26.7584C28.5487 30 30 28.5487 30 26.7584V3.24156C30 1.45134 28.5487 0 26.7584 0ZM19.135 25.4406L13.5601 17.3271L6.58044 25.4406H4.77653L12.7592 16.1619L4.77653 4.54401H10.865L16.144 12.2269L22.7533 4.54401H24.5572L16.9452 13.3924L25.2235 25.4406H19.135Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_916_3022">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg></a>
            <a href="#">
<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_916_3025)">
<path d="M25.9091 0H4.09091C1.83156 0 0 1.83156 0 4.09091V25.9091C0 28.1684 1.83156 30 4.09091 30H25.9091C28.1684 30 30 28.1684 30 25.9091V4.09091C30 1.83156 28.1684 0 25.9091 0Z" fill="white"/>
<path d="M10.807 8.18182C10.807 8.68751 10.657 9.18184 10.3761 9.60231C10.0951 10.0228 9.69583 10.3505 9.22863 10.544C8.76143 10.7375 8.24734 10.7882 7.75137 10.6895C7.25539 10.5909 6.79981 10.3473 6.44224 9.98976C6.08466 9.63218 5.84114 9.1766 5.74249 8.68063C5.64383 8.18465 5.69447 7.67056 5.88799 7.20337C6.08151 6.73617 6.40922 6.33685 6.82969 6.0559C7.25015 5.77495 7.74449 5.625 8.25018 5.625C8.92829 5.625 9.57863 5.89438 10.0581 6.37387C10.5376 6.85337 10.807 7.50371 10.807 8.18182Z" fill="#465BC3"/>
<path d="M10.2275 12.4427V23.7387C10.2279 23.822 10.2119 23.9046 10.1803 23.9818C10.1487 24.0589 10.1022 24.129 10.0435 24.1881C9.9847 24.2472 9.91483 24.294 9.83789 24.326C9.76094 24.358 9.67843 24.3745 9.59509 24.3745H6.90021C6.81687 24.3747 6.73432 24.3585 6.65729 24.3267C6.58025 24.2949 6.51026 24.2482 6.45133 24.1893C6.39241 24.1304 6.34571 24.0604 6.31393 23.9833C6.28214 23.9063 6.26589 23.8237 6.26612 23.7404V12.4427C6.26612 12.2745 6.33292 12.1132 6.45184 11.9943C6.57075 11.8754 6.73204 11.8086 6.90021 11.8086H9.59509C9.76297 11.809 9.92381 11.8761 10.0424 11.9949C10.1609 12.1138 10.2275 12.2748 10.2275 12.4427Z" fill="#465BC3"/>
<path d="M24.3139 18.3234V23.7915C24.3141 23.8682 24.2992 23.9441 24.27 24.0149C24.2408 24.0857 24.1979 24.1501 24.1437 24.2043C24.0895 24.2584 24.0251 24.3014 23.9543 24.3306C23.8835 24.3598 23.8076 24.3747 23.731 24.3745H20.8332C20.7566 24.3747 20.6807 24.3598 20.6099 24.3306C20.5391 24.3014 20.4747 24.2584 20.4205 24.2043C20.3663 24.1501 20.3234 24.0857 20.2942 24.0149C20.265 23.9441 20.2501 23.8682 20.2503 23.7915V18.4921C20.2503 17.7012 20.4821 15.0285 18.1827 15.0285C16.4014 15.0285 16.0383 16.8575 15.9668 17.679V23.7915C15.9668 23.9447 15.9065 24.0917 15.799 24.2008C15.6915 24.3099 15.5455 24.3723 15.3923 24.3745H12.5935C12.517 24.3745 12.4413 24.3594 12.3706 24.3301C12.3 24.3008 12.2358 24.2578 12.1818 24.2037C12.1279 24.1495 12.0851 24.0852 12.056 24.0145C12.0269 23.9438 12.012 23.868 12.0122 23.7915V12.3933C12.012 12.3168 12.0269 12.241 12.056 12.1703C12.0851 12.0996 12.1279 12.0353 12.1818 11.9811C12.2358 11.927 12.3 11.884 12.3706 11.8547C12.4413 11.8254 12.517 11.8103 12.5935 11.8103H15.3923C15.5469 11.8103 15.6952 11.8717 15.8045 11.981C15.9139 12.0904 15.9753 12.2386 15.9753 12.3933V13.3785C16.6366 12.3864 17.6168 11.6211 19.7082 11.6211C24.3412 11.6211 24.3139 15.9472 24.3139 18.3234Z" fill="#465BC3"/>
</g>
<defs>
<clipPath id="clip0_916_3025">
<rect width="30" height="30" fill="white"/>
</clipPath>
</defs>
</svg></a>
          </div>
        </div><br/>
                <div className="article-box">
          <h6>In this article</h6><br/>
          <ul className="article-list">
            <li className="active">Exploring the Art of UX Review<br/> Presentations</li>
            <li>Steering Clear of Common Presentation<br/> Pitfalls</li>
            <li>Defining Your Style and Flow</li>
            <li>Understanding Your Audience</li>
            <li>Creating Presentations That Stand Out</li>
            <li>Conclusion: Mastering the UX Review Presentation</li>
            <li>Afterword: The Designer Behind This <br/>Article</li>
          </ul>
        </div>

      </div>
    </div>
</div>
  

{/* Insights Attachment */}
<div style={{padding: "4rem", marginTop: "-30px"}} >
  <div className="row g-4">
        {insightList.map((insightl, index) => (
    <div className="col-12 col-md-4" style={{paddingBottom: "6px"}}>
      <div className="card w-60">
        <img 
         src={
                        insightl.CoverImage
                        ?`${process.env.PUBLIC_URL}/img/${insightl.CoverImage}`
                        :`${process.env.PUBLIC_URL}/img/inner.png}`
                     }
        className="card-img-top p-3" alt="..."/>
        <div className="card-body" style={{marginTop: "-30px"}}>
          <h5 className="card-title">{insightl.Category}</h5>
        <span style={{display:"flex", alignItems:"center", gap:"5px"}}>
  <p className="Ux" style={{margin:0}}>{insightl.Title}</p>
  <svg style={{marginLeft: "35px"}} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17.4395L17 7.43945M17 7.43945H7M17 7.43945V17.4395" stroke="#051441" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</span>

          <p className="card-text" style={{marginTop: "10px"}}>
    {insightl.Description}    </p><br/>
<span style={{display: "inline-flex", alignItems: "center", gap: "8px"}}>
  <img src={
                        insightl.AuthorImage
                        ?`${process.env.PUBLIC_URL}/img/${insightl.AuthorImage}`
                        :`${process.env.PUBLIC_URL}/img/inner.png}`
                     }
  
  alt="" style={{width: "41px", height: "41px"}}/>
  <p className="aliya" style={{marginTop: "-4px"}}>{insightl.AuthorName}</p>
</span>
<p className="aug" style={{marginTop: "-26px", marginLeft: "54px"}}>{insightl.PublishDate}</p>
</div>
      </div>
    </div>
        ))}
  </div>
 </div>


  </>
);


}

export default GetArticalAllInsights;