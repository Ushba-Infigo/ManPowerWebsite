import React, { useEffect, useState } from "react";
import axios from "axios";

const GetInsightsData = () => {
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
 

  return(
  
  <>
  
    <div>
      <center>
        <div className="section-subtitleei">{data.Insight_Tag}</div>
      </center>
      <br />

      <center>
        <p className="latest text-center">{data.Insight_Heading}</p>
      </center>

      <div style={{ padding: "4rem", marginTop: "-30px" }}>
        <div className="row g-4">
            {InsightsList.slice(0, 3).map((insight, index) => (
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
    </div>

    <center>
  <button class="see">
    See All Insights
  </button>
</center>
  <button id="backToTop">  <i class="bi bi-arrow-up"></i>
</button>
  </>)
}
export default GetInsightsData;