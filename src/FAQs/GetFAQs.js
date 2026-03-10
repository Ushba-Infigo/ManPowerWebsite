import React, { useEffect, useState, useContext } from "react";
import { RefreshContext } from "../App";
import axios from "axios";

const GetFAQsData = () => {
  const refreshKey = useContext(RefreshContext);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const { data } = await axios.get("http://localhost:8001/api/GetFAQs");
        setFaqs(data);
      } catch (error) {
        console.error("Error while fetching FAQs", error);
      }
    };

    fetchFAQs();
  }, [refreshKey]);

  if (!faqs.length) return null;

  const data = faqs[0];

  // sort accordions by Order
  const accordions = [...(data.Accordions || [])].sort(
    (a, b) => a.Order - b.Order
  );

  return (
    <>
      <br /><br /><br />
      <div style={{ padding: "0 30px", overflowX: "hidden" }}>
        <center>
          <div className="faq-label">{data.TagHeading}</div>
        </center>

        <br />
        <h1 className="faq-title text-center">{data.MainHeading}</h1>
        <br /><br />

        <div className="row">
          {accordions.map((item, index) => (
            <div className="col-lg-6 mb-5" key={index}>
              <div className="faq-item">
                <button
                  className="faq-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq${index}`}
                  aria-expanded="false"
                  aria-controls={`faq${index}`}
                >
                  <span>{item.AccordionHeading}</span>
                  <span className="faq-icon">+</span>
                </button>

                <div id={`faq${index}`} className="collapse">
                  <div className="faq-collapse">
                    <span dangerouslySetInnerHTML={{ __html: item.Description }}></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GetFAQsData;
