import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import { io } from "socket.io-client";

const GetInsightsData = () => {
  const [insights, setInsights] = useState([]);
  const [expandedCards, setExpandedCards] = useState({});

  const fetchInsights = async () => {
    try {
      const res = await axios.get("http://localhost:8001/api/GetInsights");
      const data = res.data;

      // Collect unique UserIds from all InsightCards
      const allCards = data.flatMap(d => d.InsightCards || []);
      const uniqueUserIds = [...new Set(allCards.map(c => c.UserId).filter(Boolean))];

      // Fetch user data for each unique UserId
      const userMap = {};
      await Promise.all(
        uniqueUserIds.map(async (uid) => {
          try {
            const userRes = await axios.get(`http://localhost:8001/api/GetUser/${uid}`);
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

      setInsights(enrichedData);
    } catch (error) {
      console.error("Error fetching insights", error);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchInsights();

    // Listen for real-time updates from CMS changing DB
    const socket = io("http://localhost:8001");

    socket.on("insightsUpdated", () => {
      console.log("Real-time update received! Refreshing insights...");
      fetchInsights();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  if (!insights || insights.length === 0) return null;

  const data = insights[0]; 
  const insightCards = (data?.InsightCards || [])
    .slice()
    .sort((a, b) => new Date(b.UploadDate) - new Date(a.UploadDate))
    .slice(0, 3);

  return (
    <>
      <center>
        <div className="section-subtitleei">{data.TagHeading}</div>
        <br />
        <p className="latest text-center">{data.MainHeading}</p>
      </center>

      <div style={{ padding: "1rem" }}>
        <div className="row g-4">
          {insightCards.map((insight, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div className="card">

                <img
                  src={
                    insight.ImagePath
                      ? `http://localhost:8002/uploads/insights/${insight.ImagePath}`
                      : `${process.env.PUBLIC_URL}/img/card1.png`
                  }
                  className="card-img-top p-3"
                  alt="Insight" style={{ height: "300px" }}
                />

                <div className="card-body">
                  <h6 className="card-title">{insight.IndustryHeading}</h6>

                  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <h5 className="Ux" style={{textAlign:"left"}}>{insight.BlogHeading}</h5>
                    <svg style={{ marginLeft: " 35px;" }} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17.4395L17 7.43945M17 7.43945H7M17 7.43945V17.4395" stroke="#051441" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg></span>
                  <p
                    className="card-text"
                    style={{
                      marginBottom: 0,
                      ...(!expandedCards[index] && {
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }),
                    }}>
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
                      src={
                        insight.UserData?.ProfilePic
                          ? `http://localhost:8002${insight.UserData.ProfilePic}`
                          : `${process.env.PUBLIC_URL}/img/inner.png`
                      }
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
      <center>
        <Link to="/GetInsightsDetails">
          <button className="see">See All Insights</button>
        </Link>
      </center>
    </>
  );
};

export default GetInsightsData;
