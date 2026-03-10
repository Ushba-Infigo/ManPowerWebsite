import React, { useEffect, useState, useContext } from "react";
import { RefreshContext } from "../App";
import axios from "axios";

const GetWorkProcessData = () => {
  const refreshKey = useContext(RefreshContext);
  const [howItWorks, setHowItWorks] = useState(null);

  useEffect(() => {
    const fetchHowItWorks = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8001/api/GetHowItWorks"
        );
        setHowItWorks(data[0]); // single document
      } catch (error) {
        console.log("Error while fetching How It Works:", error);
      }
    };

    fetchHowItWorks();
  }, [refreshKey]);

  if (!howItWorks) return null;

  const processes = [...howItWorks.Processes].sort(
    (a, b) => a.Order - b.Order
  );

  return (
    <div>
      {/* ===== HEADER ===== */}
      <center>
        <div className="section-subtitlee">
          {howItWorks.TagHeading}
        </div>
      </center>

      <br />

      <center>
        <p className="check" style={{ fontWeight: "600" }}>
          {howItWorks.MainHeading}
        </p>
      </center>

      {/* ===== PROCESS STEPS ===== */}
      <div className="container mt-5">
        {processes.map((process, index) => {
          if (index % 2 === 0) {
            return (
              <React.Fragment key={index}>
                <div className="row">
                  {/* LEFT COLUMN */}
                  <div className="col-md-6 col-12 p-3">
                    <center>
                      <p className="project">
                        {process.ProcessHeading}
                      </p>
                    </center>

                   <p className="Review">
                      {splitIntoLines(
                        process?.Description
                          ? new DOMParser()
                              .parseFromString(process.Description, "text/html")
                              .body.textContent
                          : ""
                      )}
                    </p>
                    
                  </div>
                  {/* RIGHT COLUMN */}
                  {processes[index + 1] && (
                    <div className="col-md-6 col-12 p-3">
                      <center>
                        <p className="project">
                          {processes[index + 1].ProcessHeading}
                        </p>
                      </center>

                    <p className="Review">
                  {splitIntoLines(
                    processes[index + 1]?.Description
                      ? new DOMParser()
                          .parseFromString(
                            processes[index + 1].Description.replace(/<br\s*\/?>/gi, "\n"),
                            "text/html"
                          )
                          .body.textContent
                      : ""
                  )}
                </p>
                    </div>
                  )}
                </div>

                {/* CONNECTOR IMAGE */}
                {index + 2 < processes.length && (
                  <div
                    style={{
                      marginLeft: "8%",
                      marginBottom: "60px",
                    }}
                  >
                    <img
                      src="./img/circle.png"
                      alt="workflow connector"
                      style={{
                        width: "90%",
                        maxWidth: "1188px",
                        height: "auto",
                      }}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          }
          return null;
        })}
      </div>

      {/* ===== CTA BUTTON ===== */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "10px",
        }}
      >
        <button className="shedule">Schedule a Meeting</button>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

/* ===== Helper Function ===== */
const splitIntoLines = (text) => {
  const words = text.split(" ");
  const chunkSize = Math.ceil(words.length / 3);
  const lines = [];

  for (let i = 0; i < words.length; i += chunkSize) {
    lines.push(words.slice(i, i + chunkSize).join(" "));
  }

  return lines.map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

export default GetWorkProcessData;
