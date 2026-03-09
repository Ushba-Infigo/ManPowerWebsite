import React, { useEffect, useState, useContext } from "react";
import { RefreshContext } from "../App";
import axios from "axios";

const GetAboutUsData = () => {
  const refreshKey = useContext(RefreshContext);
  const [aboutus, setAboutUs] = useState([]);

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await axios.get("http://83.147.38.201:8001/api/GetAboutUs");
        setAboutUs(response.data);
      } catch (error) {
        console.log("Error while fetching About Us data:", error);
      }
    };

    fetchAboutUs();
  }, [refreshKey]);

  if (aboutus.length === 0) {
    return null; // Or you can return a loader/spinner here
  }

  const data = aboutus[0];
  const Logos = data.Logos || [];
  const Counters = data.Counters || [];

  return (
    <div className="container-fluid my-5" style={{ overflowX: "hidden" }}>
      <div className="row align-items-center" style={{ marginTop: '7%' }}>
        {/* Left: Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0" style={{ width: '50%' }}>
          <img
            src={
              data.ImagePath

                ? `http://83.147.38.201:8002/uploads/about-us/${data.ImagePath}`
                : "fallback-image.png"
            }
            alt="About Us"
            className="abouting"
            style={{ borderRadius: '32px', width: '80%', height: '632px' }}
          />
        </div>

        {/* Right: Text Content */}
        <div className="col-md-6 mt-lg--200" style={{ width: '50%' }}>
          {/* Tag Heading */}
          <div className="section-subtitless mb-4">
            {data.TagHeading}
          </div>

          {/* Main Heading */}
          <h2 className="smart" >
            {data.Heading}</h2>
          {/* Description */}
           <div className="help" style={{textAlign:"justify",marginRight:"15%"}}>
              {data.Description
                ? new DOMParser()
                    .parseFromString(data.Description, "text/html")
                    .body.textContent 
                : ""}
            </div>

          {/* Counters */}
          <div className="d-flex flex-wrap justify-content-start gap-4 mt-5">
            {Counters.map((counter, index) => (
              <div className="first-crd" key={counter._id} style={{ width: counter === 0 ? '192px' : '156px', height: '99px' }}>
                <div className="card-body">
                  <p className="first" id={`counter-${index}`}>
                    {counter.Value}
                    {index === 0 ? "+" : "%"}
                  </p>
                  <p className="comp">{counter.Heading}</p>
                </div>
              </div>
            ))}
          </div>

          <br /><br />
          <button className="learn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default GetAboutUsData;
