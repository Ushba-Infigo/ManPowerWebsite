import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const GetInsightsDetailsData = () => {
  const [Insights, setGetInsights] = useState([]);

  // Always define hooks first
  useEffect(() => { 
    const GetInsightsAll = async () => {
      try {
        const GetResponse = await axios.get("http://localhost:8001/api/GetInsights");
        setGetInsights(GetResponse.data);
      } catch (error) {
        console.log("Error while fetching FAQs", error);
      }
    };
    GetInsightsAll();
  }, []);

useEffect(() => {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;

  const handleScroll = () => {
    if (window.scrollY > 200) backToTop.style.display = 'block';
    else backToTop.style.display = 'none';
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);
  backToTop.addEventListener('click', handleClick);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    backToTop.removeEventListener('click', handleClick);
  };
}, []);

    if (!Insights || Insights.length === 0) return null;
  const data = Insights[0];
  const InsightsList = data?.Insights_List || [];
 
//  1-Find the latest publish date
const latestDate = new Date(
  Math.max(...InsightsList.map(item => new Date(item.PublishDate)))
);

// 2- Filter items that have this latest date
const latestInsights = InsightsList.filter(
  item => new Date(item.PublishDate).getTime() === latestDate.getTime()
);

// Sort all insights by PublishDate descending (latest first)
const sortedInsights = [...InsightsList].sort(
  (a, b) => new Date(b.PublishDate) - new Date(a.PublishDate)
);
  return(
  
  <>
      <div className="overflow-hidden" style={{ marginTop: "-75px" }}>
      <img
        src={`${process.env.PUBLIC_URL}/img/vector.png`}
        alt="Contact Us Banner"
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
    <center style={{marginTop: "-84px"}}>
      <span>
    <Link to="/" className="home" style={{textDecoration: "none",cursor:"pointer"}}>Home</Link>&nbsp;&gt;&nbsp;
     <span className="contact">Insights</span>
      </span>
    </center>
<center>
    <p className="flexible">Our Latest Updates and Insights</p>
</center>
 
     <div>
      <br/>  <br/>
  {latestInsights.map((latestinsight, index) => (
    <div
      key={index}
      style={{ overflowX: "hidden", paddingLeft: "60px", paddingRight: "10px" }}
    >
      <div
        className="row align-items-center homs g-7"
        style={{ "--bs-gutter-x": "3.5rem" }}
      >
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={
              latestinsight.CoverImage
                ? `${process.env.PUBLIC_URL}/img/${latestinsight.CoverImage}`
                : `${process.env.PUBLIC_URL}/img/card1.png`
            }
            alt="Image"
            className="img-fluid rounded"
            style={{ display: "block", margin: "0 auto", width: "600px" }}
          />
        </div>

        <div className="col-md-6" style={{marginTop:"-10%"}}>
          <div className="section-subtitlee mb-4">
            {latestinsight.PublishDate}
          </div><br/>
          <p className="smart">{latestinsight.Title}</p>
          <p className="hgs" style={{ width: "87%" }}>
            {latestinsight.Description}
            <br />
          </p>
          <br />
          <Link to={`/GetArticalInsights/${latestinsight._id}`} className="learnsi">
            Read Article
            <i className="bi bi-arrow-right ms-2 fs-5 text-center"></i>
          </Link>
          <br />
        </div>
      </div>
    </div>
  ))}


    </div>
      <div style={{ padding: "4rem", marginTop: "-30px" }}>
        <div className="row g-4">
            {sortedInsights.map((insight, index) => (
           <div className="col-12 col-md-4" style={{ paddingBottom: "6px" }} key={index}>
            <div className="card w-60">
              <img
                //src="./img/card1.png"
                       src={
                        insight.CoverImage
                        ?`${process.env.PUBLIC_URL}/img/${insight.CoverImage}`
                        :`${process.env.PUBLIC_URL}/img/card1.png}`
                     }
                className="card-img-top p-3"
                alt="Design"
              />
              <div className="card-body" style={{ marginTop: "-30px" }}>
                <h5 className="card-title">{insight.Category}</h5>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <p className="Ux" style={{ margin: 0 }}>
                    {insight.Title}
                  </p>
                  <svg
                    style={{ marginLeft: "35px" }}
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17.4395L17 7.43945M17 7.43945H7M17 7.43945V17.4395"
                      stroke="#051441"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <p className="card-text" style={{ marginTop: "10px" }}>
                     {insight.Description}
                  {/* How do you create compelling presentations that wow your
                  colleagues and impress your managers? */}
                </p>
                <br />

                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <img
                     src={
                        insight.AuthorImage
                        ?`${process.env.PUBLIC_URL}/img/${insight.AuthorImage}`
                        :`${process.env.PUBLIC_URL}/img/inner.png}`
                     }
                    alt="Author"
                    style={{ width: "41px", height: "41px" }}
                  />
                  <p className="aliya" style={{ marginTop: "-4px" }}>
                    {insight.AuthorName}
                  </p>
                </span>
                <p
                  className="aug"
                  style={{ marginTop: "-26px", marginLeft: "54px" }}
                >
                   {insight.PublishDate}
                </p>
              </div>
            </div>
          </div>

            ))}
       
        </div>
      </div>
   

    <center>
 
</center>
  <button id="backToTop">  <i class="bi bi-arrow-up"></i>
</button>
  </>)
}
export default GetInsightsDetailsData;