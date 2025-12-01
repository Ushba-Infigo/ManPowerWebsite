import React, { useState, useEffect } from "react";
import axios from "axios";

const IndustriesServicesHeaders = () => {
  const [industryheader, setIndustryHeader] = useState([]);
  const [industrytabs, setIndustryTabs] = useState([]);

  useEffect(() => {
    // Fetch industry header
    const GetIndustryHeader = async () => {
      try {
        const { data } = await axios.get("http://localhost:8001/api/IndustriesHeader");
        setIndustryHeader(data);
      } catch (error) {
        console.log("Error while fetching industry header:", error);
      }
    };

    // Fetch tabs data
    const GetIndustryTabs = async () => {
      try {
        const { data } = await axios.get("http://localhost:8001/api/IndustriesTabs");
        setIndustryTabs(data);
      } catch (error) {
        console.log("Error while fetching industry tabs:", error);
      }
    };

    GetIndustryHeader();
    GetIndustryTabs();
  }, []);

  if (industryheader.length === 0) return null;

  const headerData = industryheader[0];

  return (
    <div className="industries-section">
      <div className="section-header">
        <center>
          <div className="section-subtitle">{headerData.Industry_Tag}</div>
        </center>
        <br />
        <h1 className="section-title">{headerData.Industry_Heading}</h1>
        <br />
      </div>

      {/*  Navigation Tabs */}
      <ul
        className="nav nav-tabs"
        id="industryTabs"
        role="tablist"
        style={{
          backgroundColor: "rgba(235, 236, 247, 1)",
          borderRadius: "12px",
          justifyContent:"left"
        }}
      >
        {industrytabs.map((tab, index) => (
          <li className="nav-item" role="presentation" key={index}>
            <button
              className={`ms-lg-3 nav-link ${index === 0 ? "active" : ""}`}
              id={`${tab.Tab?.toLowerCase().replace(/\s+/g, "-")}-tab`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.Tab?.toLowerCase().replace(/\s+/g, "-")}`}
              type="button"
              role="tab"
            >Ushba
              {tab.Tab}
            </button>
          </li>
        ))}
      </ul>

      <br />

      {/* ✅ Tab Content */}
      <div className="tab-content" id="industryTabContent">
        {industrytabs.map((tab, index) => (
          <div
            className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
            id={tab.Tab?.toLowerCase().replace(/\s+/g, "-")}
            role="tabpanel"
            key={index}
          >
            <div className="industry-content">
              <div className="content-text">
                <h2>{tab.Tab_Heading}</h2>
                <br />
                <p>{tab.Tab_Description}</p>

                <ul className="features-list">
                  {tab.Tab_Bullets?.split(".").map((bullet, i) =>
                    bullet.trim() ? (
                      <li key={i} style={{marginTop:"-17px"}}>
                        <svg
                          style={{
                            marginTop: "13px",
                            width: "24px",
                            height: "43px",
                          }}
                          viewBox="0 0 24 43"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_305_379)">
                            <mask
                              id="mask0_305_379"
                              style={{ maskType: "luminance" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="5"
                              width="13"
                              height="15"
                            >
                              <path
                                d="M12.7744 5.85962H0V19.507H12.7744V5.85962Z"
                                fill="white"
                              />
                            </mask>
                            <g mask="url(#mask0_305_379)">
                              <path
                                d="M4.61483 19.5075C7.16353 19.5075 9.22965 17.4414 9.22965 14.8926C9.22965 12.344 7.16353 10.2778 4.61483 10.2778C2.06612 10.2778 0 12.344 0 14.8926C0 17.4414 2.06612 19.5075 4.61483 19.5075Z"
                                fill="#89CBEB"
                              />
                              <path
                                d="M12.7748 11.5172L2.9751 5.85962V17.1757L12.7748 11.5172Z"
                                fill="#3248B8"
                              />
                            </g>
                          </g>
                          <defs>
                            <clipPath id="clip0_305_379">
                              <rect
                                width="12.8"
                                height="13.6533"
                                fill="white"
                                transform="translate(0 5.85962)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>{bullet.trim()}.</span>
                      </li>
                    ) : null
                  )}
                </ul>

                <button
                  className="explore-btn"
                  style={{
                    width: "191px",
                    fontSize: "13px",
                    backgroundColor: "rgba(50, 72, 184, 1)",
                  }}
                >
                  Explore all Services
                </button>
              </div>
                        <div className="content-image">
                        <div className="image-wrapper huid">
                            <img 
                            src={tab.Tab_Image
                            ?`${process.env.PUBLIC_URL}/img/${tab.Tab_Image}`
                            :`${process.env.PUBLIC_URL}/img/tab1.png}`

                            }
                            className="hud"
                            alt="Healthcare"/>
                        </div>
                    </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesServicesHeaders;
