import React, { useEffect, useState, useContext } from "react";
import { RefreshContext } from "../App";
import axios from "axios";

const GetCompanyCaltureDetailData = () => {
  const refreshKey = useContext(RefreshContext);
  const [companyCulture, setCompanyCulture] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8001/api/GetCompanyCaltureDetail");
        setCompanyCulture(res.data);
      } catch (err) {
        console.log("Error fetching:", err);
      }
    };
    fetchData();
  }, [refreshKey]);

  const data = companyCulture[0] || {};

  // Define tabs dynamically based on ImageType
  const tabs = ["Company Event", "New Year", "Team Building", "Office Space", "Achievement", "Other"];

  return (
    <>
      {/* Header */}
      <div
        className="culture-header-section"
      >
        <center >
          <div className="section-subtitleo">{data.TagHeading}</div>
        </center>
        <br />
        <div className="text-center">
          <p className="expert">{data.Heading}</p>
        </div>
        <div className="text-center">
          <p className="text-center collaborate culture-description Culturesetting" 
          style={{ paddingLeft: '25%', paddingRight: '25%' }}>
            {/* {data.Description} */}
             {data.Description
                ? new DOMParser()
                    .parseFromString(data.Description, "text/html")
                    .body.textContent 
                : ""}
            </p>
        </div>

        {/* Tabs */}
        <div className="tabs-container" style={{ paddingLeft: '23%', paddingRight: '23%' }}>
          <ul
            className="nav nav-tabs2 justify-content-center flex-wrap"
            role="tablist"
          >
            {tabs.map((tabType, i) => (
              <li className="nav-item" key={tabType}>
                <button
                  className={`nav-link ${i === 0 ? "active" : ""}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#tab-${tabType.replace(/\s+/g, "")}`}
                  type="button"
                  role="tab"
                  style={{ marginLeft: "20px" }}
                >
                  {tabType}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content culture-tab-content my-5">
        {tabs.map((tabType, i) => {
          // Filter images by ImageType and IsActive
          const images = data.Images?.filter(img => img.ImageType === tabType && img.IsActive) || [];

          return (
            <div
              key={tabType}
              className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
              id={`tab-${tabType.replace(/\s+/g, "")}`}
              role="tabpanel"
            >
              <div className="culture-gallery row" style={{ marginLeft: "3%", marginRight: '3%' }}>
                {images.map((img, index) => (
                  <div className="gallery-item col-sm-3 col-md-3 col-lg-3 imgsize" key={index}>
                    <img
                      src={`http://localhost:8002/uploads/company-culture/${img.ImagePath}`}
                      alt={tabType}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetCompanyCaltureDetailData;
