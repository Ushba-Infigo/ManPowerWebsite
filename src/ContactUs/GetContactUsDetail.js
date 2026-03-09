import React, { useEffect, useState,useContext  } from "react";
import CountryContext from "../CountryContext";
import axios from "axios";
import { Link } from "react-router-dom";

const GetContactUsDetailData = () => { 
   const { selectedCountry } = useContext(CountryContext);
  const [contactUs, setContactUs] = useState([]);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    helpType: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    await axios.post("http://83.147.38.201:8001/api/consulation", formData);
    setSuccess("Consultation Submitted Successfully!");
  };
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(''), 3000); // match animation duration
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  useEffect(() => {
    const fetchContactUs = async () => {
      try {
        const res = await axios.get(
          `http://83.147.38.201:8001/api/GetContactUsDetail?country=${selectedCountry}`
        );
        setContactUs(res.data);
      } catch (error) {
        console.log("Error while fetching contact us data");
      }
    };
    fetchContactUs();
  }, [selectedCountry]);

  useEffect(() => {
    const backToTop = document.getElementById("backToTop");
    if (!backToTop) return;

    const handleScroll = () => {
      backToTop.style.display = window.scrollY > 200 ? "block" : "none";
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    backToTop.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      backToTop.removeEventListener("click", handleClick);
    };
  }, []);

  if (contactUs.length === 0) return null;

  const data = contactUs[0];

  return (
    <>
      <section
        className="contact-section abtsetting"
        style={{
          background:
            "linear-gradient(to bottom, #1e40af 30%, rgba(235, 237, 248, 1) 30%)",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT */}
            <div className="col-lg-6 contact-left">
              <button className="inner-btn">{data.TagHeading}</button>
              <br />
              <br />

              <h2 className="partner partner-heading" >{data.MainHeading}</h2>

              <p className="answer" style={{textAlign: 'left'}} dangerouslySetInnerHTML={{ __html: data.Description }}></p>

              <p className="call mt-4">
                Call us at: <span>{data.CallUs}</span>
              </p>

              <h6 className="benf mt-4">Your benefits:</h6>
              <p dangerouslySetInnerHTML={{ __html: data.BenefitDescription }}></p>

              <h6 className="happen mt-4">What happens next?</h6>
              <p dangerouslySetInnerHTML={{ __html: data.WhatHappensNext }}></p>
              {/* <Link className="submit float-end text-decoration-none" to="/GetConsultation">
              View ConsulationToUs
               </Link > */}
            </div>

            {/* RIGHT – FORM */}
            <div className="col-lg-6">
              <div className="contact-box">

                <h5 className="Us">Contact Us for Consultation</h5>
                {success && (<div key={success} className="custom-toast success-toast"> {success} </div>)}
                {error && (<div key={error} className="custom-toast error-toast">{error}</div>)}
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">First name</label>
                      <input type="text" name="firstName" className="form-control" onChange={handleChange} />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">Last name</label>
                      <input type="text" name="lastName" className="form-control" onChange={handleChange} />
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        Company / Organization
                      </label>
                      <input type="text" name="company" className="form-control" onChange={handleChange} />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Company email</label>
                      <input type="email" name="email" className="form-control" onChange={handleChange} />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Phone</label>
                      <input type="text" name="phone" className="form-control" onChange={handleChange} />
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        How Can We Help You?
                      </label>
                      <select name="helpType" className="form-select" onChange={handleChange}>
                        <option disabled>Select Option</option>
                        <option>Consultation</option>
                        <option>Support</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea
                        name="message"
                        className="form-control"
                        rows="3"
                        placeholder="Describe how we can help..."
                        onChange={handleChange} ></textarea>
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit" className="submit" onClick={handleSubmit}>
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br /><br />
    </>
  );
};

export default GetContactUsDetailData;
