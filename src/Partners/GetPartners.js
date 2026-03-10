import React, { useEffect, useState, useContext } from "react";
import { RefreshContext } from "../App";
import axios from "axios";

const GetPartnerAllData = () => {
  const refreshKey = useContext(RefreshContext);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const getPartners = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8001/api/GetPartners"
        );
        setPartners(response.data);
      } catch (error) {
        console.log("Error while fetching partners:", error);
      }
    };

    getPartners();
  }, [refreshKey]);

  if (partners.length === 0) return null;

  const data = partners[0];
  // ✅ REMOVE HTML TAGS HERE
  const cleanDescription = data.Description
    ? data.Description.replace(/<\/?[^>]+(>|$)/g, "")
    : "";
  return (
    <div style={{ paddingRight: "5rem", paddingLeft: "6rem" }} className="partnertext">


      <div className="row align-items-center">

        {/* LEFT CONTENT */}
        <div className="col-md-6">
          <div className="section-subtitles">
            {data.TagHeading}
          </div>

          <br />

          <p className="best">
            {data.MainHeading}
          </p>

          <p className="collaborate">
            {cleanDescription.split(" ").map((word, index) => (
              <React.Fragment key={index}>
                {word}{" "}
                {(index + 1) % 7 === 0 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={
              data.ImagePath
                ? `http://localhost:8002/uploads/partners/${data.ImagePath}`
                : `${process.env.PUBLIC_URL}/img/group.png`
            }
            alt="Partners"
            className="img-fluid"
          />
        </div>

      </div>
    </div>
  );
};

export default GetPartnerAllData;
