import React, { useEffect, useState, useContext } from "react";
import { RefreshContext } from "../App";
import axios from "axios";

const IndustriesServicesHeaders = () => {
  const refreshKey = useContext(RefreshContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await axios.get("http://83.147.38.201:8001/api/IndustriesHeader");
        setData(res.data[0]); // single document
      } catch (error) {
        console.log("Error fetching industries:", error);
      }
    };

    fetchIndustries();
  }, [refreshKey]);

  const BulletIcon = () => (
    <svg
      style={{ marginTop: "13px" }}
      width="24"
      height="43"
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
          <path d="M12.7744 5.85962H0V19.507H12.7744V5.85962Z" fill="white" />
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
  );
  const parseDescription = (html) => {
    if (!html) return { text: "", bullets: [] };

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Extract bullets
    const bullets = [...doc.querySelectorAll("li")].map(li => li.textContent.trim());

    // Remove ul/li from main text
    doc.querySelectorAll("ul").forEach(el => el.remove());

    const text = doc.body.textContent.trim();

    return { text, bullets };
  };

  if (!data) return null;

  const { TagHeading, MainHeading, Industries } = data;

  return (
    <div className="industries-section">
      {/* Header */}
      <div className="section-header">
        <center><div className="section-subtitle">{TagHeading}</div></center>
        <br />
        <h1 className="section-title">{MainHeading}</h1><br />
      </div>

      {/* Tabs */}
      <ul
        className="nav nav-tabs mt-4"
        role="tablist"
        style={{
          backgroundColor: "rgba(235, 236, 247, 1)",
          borderRadius: "12px",
          justifyContent: "left",
        }}
      >
        {Industries.map((item, index) => (
          <li className="nav-item" key={item._id}>
            <button
              className={`nav-link ${index === 0 ? "active" : ""}`}
              data-bs-toggle="tab"
              data-bs-target={`#tab-${index}`}
              type="button"
            >
              {item.Name}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="tab-content mt-4">
        {Industries.map((item, index) => {
          const { text, bullets } = parseDescription(item.Description);

          return (
            <div
              key={item._id}
              className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
              id={`tab-${index}`}
            >
              <div className="industry-content d-flex align-items-center" style={{ gap: "20px" }}>
                {/* Text */}
                <div className="content-text" style={{ flex: 1 }}>
                  <h2>{item.IndustryHeading}</h2>
                  <p>{text}</p>
                  <ul className="features-list">
                    {bullets.map((b, i) => (
                      <li key={i} style={i > 0 ? { marginTop: '-17px' } : {}}>
                        <BulletIcon />
                        <span>{b}</span>
                      </li>
                    ))}
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

                {/* Image */}
                <div className="content-image" style={{ flex: 1 }}>
                  <div className="image-wrapper huid">
                    <img
                      src={
                        item.ImagePath
                          ? `http://83.147.38.201:8002/uploads/industries/${item.ImagePath}`
                          : "/img/tab1.png"
                      }
                      alt={item.Name}
                      className="hud"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      </div>
      <br /><br />
    </div>
  );
};

export default IndustriesServicesHeaders;
