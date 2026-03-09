import React, { useEffect, useState, useContext } from "react";
import { RefreshContext } from "../App";
import axios from "axios";

const GetRecruitmentProcessAllData = () => {
  const refreshKey = useContext(RefreshContext);
  const [onboarding, setOnboarding] = useState([]);

  useEffect(() => {
    const getOnboarding = async () => {
      try {
        const response = await axios.get(
          "http://83.147.38.201:8001/api/GetRecruitmentProcess"
        );
        setOnboarding(response.data);
      } catch (error) {
        console.log("Error while fetching onboarding data", error);
      }
    };

    getOnboarding();
  }, [refreshKey]);

  if (onboarding.length === 0) return null;

  const data = onboarding[0];
  const cards = data.Cards || [];

  return (
    <div>
      <br /><br /><br />

      {/* TAG HEADING */}
      <center>
        <div className="section-subtitle">
          {data.TagHeading}
        </div>
      </center>

      <br />

      {/* MAIN HEADING */}
      <center>
        <p className="expert py-5">
          {data.MainHeading}
        </p>
      </center>

      {/* CARDS */}
      <div className="px-3">
        <div className="services-box">
          <div className="row">
            {cards
              .sort((a, b) => a.Order - b.Order)
              .map((card) => (
                <div
                  className="col-lg-2 col-md-4 col-sm-6 service-wrapper"
                  key={card._id}
                >
                  <div className="service-item divider" style={{ width: "100%" }}>

                    {/* ICON */}
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
                          card.IconPath
                            ? `http://83.147.38.201:8002/uploads/onboarding/${card.IconPath}`
                            : `${process.env.PUBLIC_URL}/img/logo1.png`
                        }
                        alt={card.CardHeading}
                        style={{ width: "32px", height: "32px" }}
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="service-title">
                      {card.CardHeading}
                    </div>

                    <div
                      className="service-desc"
                    >
                      {card.Description
                ? new DOMParser()
                    .parseFromString(card.Description, "text/html")
                    .body.textContent 
                : ""}
                    </div>
 

                  </div>
                </div>
              ))}
          </div>
        </div>
      </div><br /><br />
    </div>
  );
};

export default GetRecruitmentProcessAllData;
