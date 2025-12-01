import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const GetITData = () => {
  const [ITData, setITData] = useState([]);
  const [TechnologiesData, setTechnologiesData] = useState([]);
  const [ContactInfoData, setContactInfoData] = useState([]);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0); // First service active by default

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ITRes, TechRes, ContactRes] = await Promise.all([
          axios.get("http://localhost:8001/api/GetIT"),
          axios.get("http://localhost:8001/api/GetTechnologies"),
          axios.get("http://localhost:8001/api/GetContactInfo"),
        ]);
        setITData(ITRes.data);
        setTechnologiesData(TechRes.data);
        setContactInfoData(ContactRes.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (ITData.length === 0) return null;

  const data = ITData[0];
  const ServicesList = data?.services || [];
  const dataTechnology = TechnologiesData[0];
  const dataContactInfo = ContactInfoData[0];

  return (
    <>
      {/* Banner */}
      <div className="overflow-hidden" style={{ marginTop: "-75px" }}>
        <img
          src="./img/vector.png"
          alt="Contact Us Banner"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      <center style={{ marginTop: "-84px" }}>
        <span>
         <Link to="/" className="home" style={{textDecoration: "none",cursor:"pointer"}}>Home</Link>&nbsp;&gt;&nbsp;
         <span className="contact">Information Technology</span>
        </span>
      </center>

      {/* Title */}
      <div className="flexible" style={{ marginTop: "20px" }}>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">{data?.title}</div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <br />

      <div className="container-fluid py-4" style={{ paddingInline: "70px" }}>
        <div className="row" style={{ margin: 0 }}>
          {/* Left Column */}
          <div className="col-md-3 col-12" style={{ padding: "10px", marginLeft: "40px" }}>
            <div className="srvice-bg p-3">
              <h4 className="fw-bold mb-4 ser">All Services</h4>
              {ServicesList.map((service, index) => (
                <div
                  className={`service-box p-3 mb-3 d-flex justify-content-between align-items-center ${
                    activeServiceIndex === index ? "active-service" : ""
                  }`}
                  key={service._id || index}
                  onClick={() => setActiveServiceIndex(index)}
                  style={{
                    cursor: "pointer",
                    backgroundColor: activeServiceIndex === index ? "#3248B8" : "#f5f5f5",
                    color: activeServiceIndex === index ? "white" : "black",
                    borderRadius: "5px",
                    transition: "0.3s",
                  }}
                >
                  <span className="azi">{service?.serviceName}</span>
                  <i className="bi bi-arrow-right"></i>
                </div>
              ))}
            </div>
            <br />

            {/* Technologies */}
            <div className="srvice-bg2 p-3">
              <h4 className="fw-bold mb-4 serv">{dataTechnology?.Title}</h4>
              {dataTechnology?.categories?.map((category, index) => (
                <div
                  className="service-box p-3 mb-3 d-flex justify-content-between align-items-center"
                  key={index}
                >
                  <span className="azi">{category?.name}</span>
                </div>
              ))}
            </div>
            <br />

            {/* Contact */}
            <div className="help-card">
              <div className="phone-icon">
                <svg
                  className="homi"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="6" y="6" width="48" height="48" rx="24" fill="white" />
                  <path
                    d="M37.9688 34.7637L37.25 37.9199C37.1042 38.3991 36.7812 38.6491 36.2812 38.6699C33.6354 38.6491 31.2396 37.9928 29.0938 36.7012C26.9479 35.4303 25.2396 33.722 23.9688 31.5762C22.6771 29.4303 22.0208 27.0345 22 24.3887C22.0208 23.8887 22.2708 23.5658 22.75 23.4199L25.9062 22.7012C26.4062 22.6178 26.7812 22.8053 27.0312 23.2637L28.4688 26.6387C28.6354 27.097 28.5417 27.4824 28.1875 27.7949L26.5312 29.1387C27.0521 30.222 27.7396 31.1908 28.5938 32.0449C29.4479 32.8991 30.4167 33.597 31.5 34.1387L32.875 32.4512C33.1875 32.097 33.5729 32.0033 34.0312 32.1699L37.4062 33.6074C37.8438 33.8783 38.0312 34.2637 37.9688 34.7637Z"
                    fill="#3248B8"
                  />
                  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" />
                </svg>
              </div>

              <h3>{dataContactInfo?.Heading}</h3>
              <a href={`tel:${dataContactInfo?.Number}`} className="phone-number">
                {dataContactInfo?.Number}
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-9 col-12" style={{ width: "69.5%" }}>
            <div className="p-3" style={{ backgroundColor: "white", borderRadius: "8px" }}>
              {/* Render sections of active service */}
              {ServicesList[activeServiceIndex]?.sections?.map((section, secIndex) => (
                <div key={secIndex}>
                  {section.images?.[0] && (
                  <div className="image-frame">
  <img
    src={`${process.env.PUBLIC_URL}/img/${section.images[0]}`}
    alt={section.heading}
    className="img-fluid image-full-height"
  />
</div>
                  )}
                  <p className="expose">{section.heading}</p>
                  {section.description?.map((desc, i) => (
                    <p className="expo-smal" key={i}>
                      {desc}
                    </p>
                  ))}

                  {/* Optional additional images */}
                  {section.images?.slice(1).map((img, i) => (
                    <img
                      key={i}
                      src={`${process.env.PUBLIC_URL}/img/${img}`}
                      alt="additional"
                      className="img-fluid huz me-3"
                    />
                  ))}
                </div>
              ))}

              {/* FAQs */}
          {ServicesList[activeServiceIndex]?.faqs && (
  <div className="mt-4">
    <p className="expose">{ServicesList[activeServiceIndex].faqs.Heading}</p>
    <p className="expo-smal">{ServicesList[activeServiceIndex].faqs.Description}</p>

    {/* UNIQUE ID — this is the magic fix */}
    <div id={`customFaqAccordion-${activeServiceIndex}`}>
      
      {ServicesList[activeServiceIndex].faqs.questions?.map((q, i) => (
        <div className="faq-item mb-3" key={q.id || i}>
          <button
            className="faq-header collapsed"
            data-bs-toggle="collapse"
            data-bs-target={`#faqBox${q.id || i}`}
            aria-expanded="false"
          >
            {q.question}
            <span className="faq-arrow"></span>
          </button>

          <div
            id={`faqBox${q.id || i}`}
            className="faq-body collapse"
            data-bs-parent={`#customFaqAccordion-${activeServiceIndex}`}
          >
           
              <p>{q.answer}</p>
         
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
    </>
  );
};

export default GetITData;
