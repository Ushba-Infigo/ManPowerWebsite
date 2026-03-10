import React, { useEffect, useState } from "react";
import axios from "axios";

const GetCompanyCultureHeadersData = () => {
  const [companyCulture, setCompanyCulture] = useState([]);

  useEffect(() => {
    const fetchCompanyCulture = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8001/api/GetCompanyCalture"
        );
        setCompanyCulture(res.data);
      } catch (error) {
        console.log("Error while fetching company culture", error);
      }
    };

    fetchCompanyCulture();
  }, []);

  const data = companyCulture[0] || {};

  return (
    <div style={{ overflowX: "hidden", paddingLeft: "30px", paddingRight: "30px" }}>
      <div className="row align-items-center homs g-6" style={{ "--bs-gutter-x": "2.5rem" }}>
        {/* IMAGE COLUMN */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={
              data?.ImagePath
                ? `http://localhost:8002/uploads/culture/${data.ImagePath}`
                : `${process.env.PUBLIC_URL}/img/empowering.png`
            }
            alt="Company Culture"
            className="img-fluid rounded"
            style={{ display: "block", margin: "0 auto" }}
          />
        </div>

        {/* TEXT COLUMN */}
        <div className="col-md-6">
          <div className="section-subtitlee mb-4">{data?.TagHeading}</div>
<br/>
          <div className="row">
            <div className="col-md-8">
              <p className="smart" style={{textAlign: 'left'}}>{data?.Heading}</p>
            </div>
          </div>


          <p className="hgs CultureSet" style={{ width: "87%" }} >
         
             {data.Description
                ? new DOMParser()
                    .parseFromString(data.Description, "text/html")
                    .body.textContent 
                : ""}
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default GetCompanyCultureHeadersData;
