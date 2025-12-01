import React, { useEffect, useState } from "react";
import axios from "axios";

const GetFAQsData = () => {
  const [FAQs, setFAQs] = useState([]);

  // Always define hooks first
  useEffect(() => {
    const GetFAQsAll = async () => {
      try {
        const GetResponse = await axios.get("http://localhost:8001/api/GetFAQs");
        setFAQs(GetResponse.data);
      } catch (error) {
        console.log("Error while fetching FAQs", error);
      }
    };
    GetFAQsAll();
  }, []);

  const data = FAQs[0];
  const FAQsList = data?.FAQ_List || [];

  useEffect(() => {
    if (FAQsList.length === 0) return; // fine to guard inside effect

    const buttons = document.querySelectorAll('.faq-button');

    buttons.forEach(button => {
      const icon = button.querySelector('.faq-icon');
      const collapseEl = document.querySelector(button.getAttribute('data-bs-target'));

      if (!collapseEl) return;

      const handleShow = () => (icon.textContent = '-');
      const handleHide = () => (icon.textContent = '+');

      collapseEl.addEventListener('shown.bs.collapse', handleShow);
      collapseEl.addEventListener('hidden.bs.collapse', handleHide);

      return () => {
        collapseEl.removeEventListener('shown.bs.collapse', handleShow);
        collapseEl.removeEventListener('hidden.bs.collapse', handleHide);
      };
    });
  }, [FAQsList]);

  // Early return after hooks
  if (FAQs.length === 0) return null;

  return (
    <>
    <br/> <br/> <br/>
      <div style={{ padding: "0 60px", overflowX: "hidden", gap: "20px" }}>
        <center>
          <div className="faq-label">{data.FAQ_SubHeading}</div>
        </center><br/>
        <h1 className="faq-title">{data.FAQ_Heading}</h1>
<br/><br/>
        <div className="row">
          {FAQsList.map((faq, index) => (
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
                  <span>{faq.Question}</span>
                  <span className="faq-icon">+</span>
                </button>

                <div id={`faq${index}`} className="collapse">
                  <div className="faq-collapse">{faq.Answer}</div>
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
