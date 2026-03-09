import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { io } from "socket.io-client";

const GetInsightsDetailsData = () => {
  const [insightsData, setInsightsData] = useState([]);
  const [expandedLatest, setExpandedLatest] = useState({});
  const [expandedCards, setExpandedCards] = useState({});

  const fetchInsights = async () => {
    try {
      const response = await axios.get("http://83.147.38.201:8001/api/GetInsights");
      const data = response.data;

      // Collect unique UserIds from all InsightCards
      const allCards = data.flatMap(d => d.InsightCards || []);
      const uniqueUserIds = [...new Set(allCards.map(c => c.UserId).filter(Boolean))];

      // Fetch user data for each unique UserId
      const userMap = {};
      await Promise.all(
        uniqueUserIds.map(async (uid) => {
          try {
            const userRes = await axios.get(`http://83.147.38.201:8001/api/GetUser/${uid}`);
            userMap[uid] = userRes.data;
          } catch (err) {
            console.log(`Error fetching user ${uid}:`, err);
          }
        })
      );

      // Merge user data into each InsightCard
      const enrichedData = data.map(insight => ({
        ...insight,
        InsightCards: (insight.InsightCards || []).map(card => ({
          ...card,
          UserData: userMap[card.UserId] || null
        }))
      }));

      setInsightsData(enrichedData);
    } catch (error) {
      console.log("Error while fetching insights", error);
    }
  };

  useEffect(() => {
    fetchInsights();

    // Listen for real-time updates from backend
    const socket = io("http://83.147.38.201:8001");

    socket.on("insightsUpdated", () => {
      console.log("Real-time update received! Refreshing insights details...");
      fetchInsights();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Back to top button
  useEffect(() => {
    const backToTop = document.getElementById("backToTop");
    if (!backToTop) return;

    const handleScroll = () => {
      backToTop.style.display = window.scrollY > 200 ? "block" : "none";
    };
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    backToTop.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      backToTop.removeEventListener("click", handleClick);
    };
  }, []);

  if (!insightsData || insightsData.length === 0) return null;
  const data = insightsData[0];
  const insightCards = data?.InsightCards || [];

  // 1 - Find the latest publish date
  const latestDate = new Date(
    Math.max(
      ...insightCards.map(item => item.UploadDate ? new Date(item.UploadDate) : 0)
    )
  );

  // 2 - Filter items with latest date
  const latestInsights = insightCards.filter(
    item => item.UploadDate && new Date(item.UploadDate).getTime() === latestDate.getTime()
  );

  // Sort all insights by UploadDate descending (latest first)
  const sortedInsights = [...insightCards].sort(
    (a, b) => new Date(b.UploadDate) - new Date(a.UploadDate)
  );

  return (
    <>
      {/* Banner */}
      <div className="overflow-hidden" style={{ marginTop: "-75px" }}>
        <img
          src={`${process.env.PUBLIC_URL}/img/vector.png`}
          alt="Insights Banner"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* Breadcrumb */}
      <center style={{ marginTop: "-84px" }} className="homecrumb">
        <span>
          <Link to="/" className="home" style={{ textDecoration: "none", cursor: "pointer" }}>Home</Link>
          &nbsp;&gt;&nbsp;
          <span className="contact">Insights</span>
        </span>
      </center>

      {/* Main Heading */}
      <center className="mt-3">
        <p className="flexible">{data?.MainHeading}</p>
      </center>

      {/* Latest Insights */}
      <div>
        <br /> <br />
        {latestInsights.map((insight, index) => (
          <div
            key={index}
            style={{ paddingLeft: "30px", paddingRight: "30px" }}
          >
            <div
              className="row homs g-7"
              style={{ "--bs-gutter-x": "3.5rem" }}
            >
              {/* Image Column */}
              <div className="col-md-6 text-center ">
                <img
                  src={
                    insight.ImagePath
                      ? `http://83.147.38.201:8002/uploads/insights/${insight.ImagePath}`
                      : `${process.env.PUBLIC_URL}/img/card1.png`
                  }
                  alt="Insight"
                  className="img-fluid rounded isigntimage"
                  style={{ display: "block", margin: "0 auto", width: "85%", height: '60%' }}
                />
              </div>

              {/* Text Column */}
              <div className="col-md-6 mt-4">
                <div className="section-subtitlee mb-3">
                  {insight.UploadDate
                    ? new Date(insight.UploadDate).toLocaleDateString()
                    : ""}
                </div>

                <p className="smart insightheading">{insight.BlogHeading}</p>

                <p
                  className="hgs mt-3"
                  style={{
                    width: "87%",
                    marginBottom: 0,
                    ...(!expandedLatest[index] && {
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }),
                  }}
                >
                  {insight?.Description
                        ? new DOMParser()
                            .parseFromString(insight?.Description, "text/html")
                            .body.textContent
                        : ""}
                </p>
                <span
                  onClick={() => setExpandedLatest(prev => ({ ...prev, [index]: !prev[index] }))}
                  style={{ color: "#007bff", cursor: "pointer", fontSize: "13px", fontWeight: "500" }}
                >
                  {expandedLatest[index] ? "Show Less" : "... Read More"}
                </span>

                <div>

                  <Link
                    to={`/GetArticalInsights/${btoa(insightCards.indexOf(insight).toString())}/${btoa(insight.UserId)}`}
                    className="learnsi d-inline-flex align-items-center mt-2"
                    style={{ textDecoration: "none" }}
                  >
                    Read Article
                    <i className="bi bi-arrow-right ms-2 fs-5"></i>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* All Insights Grid */}
      <div style={{ padding: "1rem", marginTop: "6px" }}>
        <div className="row g-4">
          {sortedInsights.map((insight, index) => (
            <div className="col-12 col-md-4" style={{ paddingBottom: "6px" }} key={index}>
              <div className="card w-60">
                <img
                  src={insight.ImagePath
                    ? `http://83.147.38.201:8002/uploads/insights/${insight.ImagePath}`
                    : `${process.env.PUBLIC_URL}/img/card1.png`}
                  className="card-img-top p-3"
                  alt="Insight" style={{ height: "300px" }}
                />
                <div className="card-body" style={{ marginTop: "-30px" }}>
                  <h5 className="card-title">{insight.IndustryHeading}</h5>
                  <Link to={`/GetArticalInsights/${btoa(insightCards.indexOf(insight).toString())}/${btoa(insight.UserId)}`} style={{ textDecoration: "none" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <p className="Ux" style={{ margin: 0 ,textAlign:"left"}}>{insight.BlogHeading}</p>
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

                  </Link>

                  <p
                    className="card-text"
                    style={{
                      marginTop: "10px",
                      color: "rgb(102, 102, 102)",
                      fontSize: "13px",
                      whiteSpaceCollapse: "collapse",
                      marginBottom: 0,
                      ...(!expandedCards[index] && {
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }),
                    }}
                  >
                     {insight?.Description
                        ? new DOMParser()
                            .parseFromString(insight?.Description, "text/html")
                            .body.textContent
                        : ""}
                  </p>
                  <span
                    onClick={() => setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }))}
                    style={{ color: "#007bff", cursor: "pointer", fontSize: "13px", fontWeight: "500" }}
                  >
                    {expandedCards[index] ? "Show Less" : "... Read More"}
                  </span>
                  <div className="d-flex align-items-center gap-2 mt-3">
                    <img
                      src={insight.UserData?.ProfilePic
                        ? `http://83.147.38.201:8002${insight.UserData.ProfilePic}`
                        : `${process.env.PUBLIC_URL}/img/inner.png`}
                      alt="Author"
                      width="40"
                      height="40"
                      style={{ borderRadius: "50%", objectFit: "cover" }}
                    />

                    <div>
                      <p className="mb-0" style={{ fontSize: '12px' }}>{insight.UserData?.username || insight.UserName}</p>
                      <small style={{ fontSize: '12px' }}>
                        {insight.UploadDate
                          ? new Date(insight.UploadDate).toLocaleDateString()
                          : ""}
                      </small>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default GetInsightsDetailsData;
