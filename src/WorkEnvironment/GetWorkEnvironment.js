import React, { useEffect, useState, useContext } from "react";
import { RefreshContext } from "../App";
import axios from "axios";

const GetWorkEnvironmentData = () => {
  const refreshKey = useContext(RefreshContext);
  const [workEnvironment, setWorkEnvironment] = useState([]);

  useEffect(() => {
    
    const fetchWorkEnvironment = async () => {
      try {
        const response = await axios.get(
          "http://83.147.38.201:8001/api/GetWorkEnvironment"
        );
        setWorkEnvironment(response.data);
      } catch (error) {
        console.error("Error while fetching work environment data", error);
      }
    };

    fetchWorkEnvironment();
  }, [refreshKey]);

  const data = workEnvironment[0] || {};
  const images = data.Images || [];

  return (
    <>
      <div className="my-5 EnvironmnetSetting" style={{ padding: "0 60px" }}>
        <div className="row align-items-center gx-5 gy-4">
          {/* LEFT COLUMN */}
          <div className="col-md-6">
            <div className="section-subtitlee" style={{ width: "220px" }}>
              {data.TagHeading}
            </div>

            <br />

            <p className="besti">{data.MainHeading}</p>

            <p
              className="collaborate"
              dangerouslySetInnerHTML={{ __html: data.Description }}
            ></p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-6 d-flex justify-content-start flex-wrap gap-3" style={{ width: "40%", marginLeft: "5%" }}>
            {images
              .sort((a, b) => a.Order - b.Order)
              .slice(0, 4)
              .map((img, index) => (
                <div
                  className="circle-img"
                  key={index}
                  style={{ flex: "1 1 calc(50% - 8px)", maxWidth: "calc(50% - 8px)" }}
                >
                  <img
                    src={
                      img.ImagePath
                        ? `http://83.147.38.201:8002/uploads/work-environment/${img.ImagePath}`
                        : `${process.env.PUBLIC_URL}/img/2ndb.png`
                    }
                    alt="Work Environment"
                    className="img-fluid rounded"
                  />
                </div>
              ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default GetWorkEnvironmentData;
