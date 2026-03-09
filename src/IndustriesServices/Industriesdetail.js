import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const GetIndustryData = () => {
  const { industryName } = useParams(); // URL param
  const [industryData, setIndustryData] = useState(null);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://83.147.38.201:8001/api/GetIndustrydetailByName/${industryName}`);
        setIndustryData(res.data);
      } catch (error) {
        console.log("Error fetching industry data:", error);
      }
    };
    fetchData();
  }, [industryName]);

  if (!industryData) return null;

  const ServicesList = industryData.Services || [];
  const FAQs = industryData.FAQs || []; // adjust based on schema
  const Technologies = industryData.Technologies || {};

  return (
    <>

 <div className="overflow-hidden" style={{ marginTop: "-75px" }}>
        <img
          src={`${process.env.PUBLIC_URL}/img/vector.png`}
          alt="Insights Banner"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
      <center style={{ marginTop: "-84px" }} className="homecrumb">
        <span>
          <Link to="/" className="home" style={{ textDecoration: "none", cursor: "pointer" }}>
            Home
          </Link>{" "}
          &gt; <span className="contact">{industryData.IndustryName}</span>
        </span>
      </center>

      {/* Title */}
      <section>
   <div className="flexible" style={{ marginTop: "20px", marginBottom: "20px" }}>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 headingsize" >{industryData.Title}</div>

          <div className="col-md-2"></div>
        </div>
      </div>
      <br />

      <div className="container-fluid" style={{ padding: "0px 30px" }}>
        <div className="row" style={{ margin: 0 }}>
          {/* Left Column */}
          <div className="col-md-3 col-12 industry-left" style={{ padding: "10px", marginLeft: "40px" }}>
            <div className="srvice-bg p-3">
              <h4 className="fw-bold mb-4 ser">All Services</h4>
              {ServicesList.map((service, index) => (
                <div
                  className={`service-box p-3 mb-3 d-flex justify-content-between align-items-center ${activeServiceIndex === index ? "active-service" : ""
                    }`}
                  key={service.ServiceName || index}
                  onClick={() => setActiveServiceIndex(index)}
                  style={{
                    cursor: "pointer",
                    backgroundColor: activeServiceIndex === index ? "#3248B8" : "#f5f5f5",
                    color: activeServiceIndex === index ? "white" : "black",
                    borderRadius: "5px",
                    transition: "0.3s",
                  }}
                >
                  <span className="azi">{service.ServiceName}</span>
                  <i className="bi bi-arrow-right"></i>
                </div>
              ))}
            </div>
            <br />

            {/* Technologies */}
            {Technologies.Tabs && (
              <div className="srvice-bg2 p-3">
                <h4 className="fw-bold mb-4 serv">{Technologies.SectionHeading}</h4>
                {Technologies.Tabs.map((tab, index) => (
                  <div className="service-box p-3 mb-3 d-flex justify-content-between align-items-center" key={index}>
                    <span className="azi">{tab.TabName}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="col-md-9 col-12 industry_right" style={{ width: "50.5%" }}>
            <div className="" style={{ backgroundColor: "white", borderRadius: "8px" }}>
              {/* Section1 */}
              {ServicesList[activeServiceIndex]?.Section1 && (
                <div>
                  {ServicesList[activeServiceIndex].Section1.AttachmentPath && (
                    <div className="image-frame">
                      <img
                        src={`http://83.147.38.201:8002/uploads/industries-detail/${ServicesList[activeServiceIndex].Section1.AttachmentPath}`}
                        alt={ServicesList[activeServiceIndex].Section1.Heading}
                        className="img-fluid image-full-height"
                      />
                    </div>
                  )}
                  <p className="expose mt-3">{ServicesList[activeServiceIndex].Section1.Heading}</p>
                  <p className="expo-smal" dangerouslySetInnerHTML={{ __html: ServicesList[activeServiceIndex].Section1.Description }}></p>
                </div>
              )}

              {/* Section2 */}
              {ServicesList[activeServiceIndex]?.Section2 && (
                <div className="mt-4">

                  {/* SECTION 2 WRAPPER FOR FLOAT LAYOUT */}
                  <div className="clearfix">
                    {/* FIRST IMAGE (Floated Left) */}
                    {ServicesList[activeServiceIndex].Section2.Images?.[0] && (
                      <img
                        src={`http://83.147.38.201:8002/uploads/industries-detail/${ServicesList[activeServiceIndex].Section2.Images[0].ImagePath}`}
                        alt="section2-main"
                        className="img-fluid huz mb-3 me-4"
                        style={{ float: "left", maxWidth: "40%", height: "auto", borderRadius: "8px" }}
                      />
                    )}

                    {/* SECTION2 HEADING */}
                    {ServicesList[activeServiceIndex].Section2.Heading && (
                      <p className="expose">
                        {ServicesList[activeServiceIndex].Section2.Heading}
                      </p>
                    )}

                    {/* SECTION2 DESCRIPTION */}
                    {ServicesList[activeServiceIndex].Section2.Description && (
                      <p
                        className="expo-smal"
                        dangerouslySetInnerHTML={{
                          __html: ServicesList[activeServiceIndex].Section2.Description,
                        }}
                      />
                    )}
                  </div>

                  {/* REMAINING IMAGES */}
                  {ServicesList[activeServiceIndex].Section2.Images?.length > 1 && (
                    <div className="d-flex gap-4 mt-3 imagesecondary">
                      {ServicesList[activeServiceIndex].Section2.Images
                        .slice(1)
                        .map((imgObj, index) => (
                          <img
                            key={index}
                            src={`http://83.147.38.201:8002/uploads/industries-detail/${imgObj.ImagePath}`}
                            alt={`section2-${index + 1}`}
                            className="img-fluid huz"
                          />
                        ))}
                    </div>
                  )}

                </div>
              )}


              {/* FAQs */}
              {industryData?.FAQs?.Cards?.length > 0 && (
                <div className="mt-4">
                  <p className="expose">
                    {industryData.FAQs.Heading}
                  </p>

                  <p className="expo-smal">
                    {industryData.FAQs.Description
                      ?.replace(/<\/?[^>]+(>|$)/g, "")}
                  </p>

                  <div id="customFaqAccordion">
                    {industryData.FAQs.Cards.map((q, i) => (
                      <div className="faq-item mb-3" key={i}>
                        <button
                          className="faq-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faqBox-${i}`}
                          aria-expanded="false"
                        >

                          {q.Question}
                          <span class="faq-icon">+</span>
                        </button>

                        <div
                          id={`faqBox-${i}`}
                          className="faq-body collapse"
                          data-bs-parent="#customFaqAccordion"
                        >
                          <p style={{ fontSize: "12px", marginLeft: "40px" }}>{q.Answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      </section>
   
    </>
  );
};

export default GetIndustryData;
