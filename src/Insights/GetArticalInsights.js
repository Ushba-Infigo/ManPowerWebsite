import React, { useEffect, useState, useContext } from "react";
import { RefreshContext } from "../App";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const GetArticalInsightsData = () => {
  const refreshKey = useContext(RefreshContext);
  
  const { index: encodedIndex, userId: encodedUserId } = useParams(); // encoded params
  const index = atob(encodedIndex);
  const userId = atob(encodedUserId);
  const [insightsData, setInsightsData] = useState(null);
  const [card, setCard] = useState(null);
  const [user, setuser] = useState([]);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await axios.get("http://83.147.38.201:8001/api/GetInsights");
        
        if (response.data && response.data.length > 0) {
          const insight = response.data[0]; // take the first object
          setInsightsData(insight);
          const Userresponse = await axios.get(`http://83.147.38.201:8001/api/GetUser/${userId}`);
          // console.log(Userresponse.data); 
          setuser(Userresponse.data);
          const idx = parseInt(index, 10);
          if (!isNaN(idx) && insight.InsightCards[idx]) {
            setCard(insight.InsightCards[idx]); // pick the card by index
          }
        }
      } catch (error) {
        console.log("Error while fetching insights:", error);
      }
    };

    fetchInsights();
  }, [index, userId, refreshKey]);

  if (!insightsData || !card) return <p>Loading...</p>;
  const userdata = user;
  return (
    <>

      <center style={{ marginTop: "-84px" }} className="homecrumb">
        <span>
          <Link to="/" className="home" style={{ textDecoration: "none", cursor: "pointer" }}>Home</Link>
          &nbsp;&gt;&nbsp;
          <span> <Link to="/GetInsightsDetails" className="home" style={{ textDecoration: "none", cursor: "pointer" }}>Insights</Link></span>&nbsp;&gt;&nbsp;
          <span className="contact" >{card.BlogHeading}</span>
        </span>
      </center>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <center className="smaller">{card.BlogHeading}</center>
        </div>
        <div className="col-md-2"></div>
      </div>

      <br /><br /><br />

      <div style={{ overflow: "hidden", paddingLeft: "63px", paddingRight: "10px" }}>
        <div className="row">
          <div className="col-8">
            <img
              src={
                card.ImagePath
                  ? `http://83.147.38.201:8002/uploads/insights/${card.ImagePath}`
                  : `${process.env.PUBLIC_URL}/img/card1.png`
              }
              className="hon"
              style={{ width: "854px", height: "482px" }}
            />
            <br /><br /><br />

            <p className="expo">{card.BlogHeading}</p>
            <span
              className="presents"
              dangerouslySetInnerHTML={{ __html: card.detailDescription }}
            ></span>

            <br /><br />
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="position-relative profile-card text-start">
              <img
                src={
                  userdata?.ProfilePic
                    ? `http://83.147.38.201:8002${userdata?.ProfilePic}`
                    : `${process.env.PUBLIC_URL}/img/card1.png`
                }
                alt="Profile"
              />
              <p className="mt-4 mb-1 ali">{userdata?.username}</p>
              <p className="mb-3 founder">{userdata?.JobTitle}</p>
              <hr />
              <p className="ux-text">{userdata?.Bio?.replace(/<\/?[^>]+(>|$)/g, "")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetArticalInsightsData;
