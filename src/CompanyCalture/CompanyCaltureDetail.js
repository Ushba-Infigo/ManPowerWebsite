import React, { useEffect, useState } from "react";
import axios from "axios";

const GetCompanyCaltureDetailData = () => {
  const [companycalturedetail, setcompanycalturedetail] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:8001/api/GetCompanyCaltureDetail");
        setcompanycalturedetail(res.data);
      } catch (err) {
        console.log("Error fetching:", err);
      }
    };

    getData();
  }, []);

  const data = companycalturedetail[0] || {};

  const tabs = [
    { key: "AllMoments", data: data.AllMoments },
    { key: "TeamWork", data: data.TeamWork },
    { key: "CompanyEvents", data: data.CompanyEvents },
    { key: "TrainingAndDevelopment", data: data.TrainingAndDevelopment },
    { key: "Celebration", data: data.Celebration },
  ];

  return (
    <>
      {/* Header */}
      <div
        style={{
          backgroundImage: "url('./img/graph.png'), url('./img/right.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left, top right",
          backgroundSize: "80px auto",
        }}
      >
        <center>
          <div className="section-subtitleo">{data.Tag}</div>
        </center>
<br/>
        <center>
          <p className="expert">{data.Heading}</p>
        </center>

        <center>
          <p className="text-center collaborate">{data.Description}</p>
        </center>

        {/* Tabs */}
        <center>
          <ul
            className="nav nav-tabs2"
            role="tablist"
            style={{ width: "900px", marginLeft: "-137px" }}
          >
            {tabs.map((tab, i) => (
              <li className="nav-item" key={tab.key}>
                <button
                  className={`nav-link ${i === 0 ? "active" : ""}`}
                  data-bs-toggle="tab"
                  data-bs-target={`#tab-${tab.key}`}
                  type="button"
                  role="tab"
                  style={{ marginLeft: i === 0 ? "150px" : "0px" }}
                >
                  {tab.data?.Heading}
                </button>
              </li>
            ))}
          </ul>
        </center>
      </div>

      {/* Tab Content */}
      <div className="tab-content my-5" style={{ paddingLeft: "50px", paddingRight: "50px" }}>
        {tabs.map((tab, i) => (
          <div
            key={tab.key}
            className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
            id={`tab-${tab.key}`}
            role="tabpanel"
          >
            <div className="row g-0">
              {tab.data?.Images?.map((img, index) => (
                <div className="col-3" key={index}>
                  <img
                    src={`${process.env.PUBLIC_URL}/img/${img}`}
                    className="w-100"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetCompanyCaltureDetailData;
