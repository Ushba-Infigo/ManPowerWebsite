import React, { useEffect, useState, useRef, useContext } from "react";
import { RefreshContext } from "../App";
import axios from "axios";

// Utility to format numbers as currency
function formatCurrency(val) {
  if (val == null || val === "") return null;
  if (typeof val === "number") return `$${val.toLocaleString()}`;
  if (typeof val === "string") {
    const cleaned = val.replace(/[^0-9.-]/g, "");
    const n = Number(cleaned);
    if (!isNaN(n)) return `$${n.toLocaleString()}`;
  }
  return val;
}

const GetPricingPlanData = () => {
  const refreshKey = useContext(RefreshContext);
  const [pricingPlans, setPricingPlans] = useState([]);
  const [industries, setIndustries] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [sliderValue, setSliderValue] = useState(10);

  const [directAmount, setDirectAmount] = useState(null);
  const [indirectAmount, setIndirectAmount] = useState(null);
  const [highlightPercent, setHighlightPercent] = useState(null);

  const sliderRef = useRef(null);
  const totalTicks = 10;

  // Fetch pricing plans from backend
  useEffect(() => {
    const fetchPricingPlans = async () => {
      try {
        const { data } = await axios.get("http://83.147.38.201:8001/api/GetPricingPlans");
        setPricingPlans(data);

        // Extract unique industries and locations
        const uniqueIndustries = [...new Set(data.map((p) => p.Industry))];
        const uniqueLocations = [...new Set(data.map((p) => p.Location))];

        setIndustries(uniqueIndustries);
        setLocations(uniqueLocations);

        setSelectedIndustry(uniqueIndustries[0] || null);
        setSelectedLocation(uniqueLocations[0] || null);
      } catch (err) {
        console.error("Pricing plans fetch error:", err);
      }
    };

    fetchPricingPlans();
  }, [refreshKey]);
  const industryImages = {
    "Healthcare": "/img/Health.png",
    "Logistic": "/img/Logistic.png",
    "Telecom": "/img/Telecom.png",
    "Banking": "/img/Banking.png",
    "IT": "/img/IT.png",
    "Education": "/img/Education.png",
  };
  const LocationImages = {
    "Kingdom of Saudi Arabia": "/img/inn2.png",
    "United Arab Emirates": "/img/Emirates.png",
    "United Kingdom": "/img/inn4.png",
    "United States of America": "/img/inn3.png",
  };

  // Update savings whenever slider, industry, or location changes
  useEffect(() => {
    if (!pricingPlans.length || !selectedIndustry || !selectedLocation) return;

    const plan = pricingPlans.find(
      (p) => p.Industry === selectedIndustry && p.Location === selectedLocation
    );

    if (!plan || !plan.PricingRows || !plan.PricingRows.length) return;

    const row =
      plan.PricingRows.sort((a, b) => a.Range - b.Range).find(
        (r) => sliderValue <= r.Range
      ) || plan.PricingRows[plan.PricingRows.length - 1];

    if (row) {
      setDirectAmount(row.DirectAmount);
      setIndirectAmount(row.IndirectAmount);
      setHighlightPercent(row.Percentage);
    }
  }, [sliderValue, selectedIndustry, selectedLocation, pricingPlans]);

  if (!industries.length || !locations.length) return null;

  return (
    <>
      <br /><br /><br />
      <center>
        <div className="section-subtitlee">Pricing Plan</div><br />
        <p className="smart text-center">
          Smart Cost Optimization With XAD
        </p>
      </center>

      <div className="container calculator-container">
        <div className="row g-0" style={{ borderRadius: "18px" }}>
          {/* Left Panel */}
          <div className="col-xl-6 col-lg-6 col-md-12 left-panel" >
            <h5 className="section-titles">
              How many experts does your organization <br /> need today?
            </h5>
            <br />

            {/* Slider */}
            <div className="slider-box" style={{ marginLeft: "-2px", position: "relative" }}>
              <input
                ref={sliderRef}
                type="range"
                min={0}
                max={100}
                value={sliderValue}
                step={1}
                className="custom-slider"
                onChange={(e) => setSliderValue(Number(e.target.value))}
              />
              <span
                style={{
                  left: `${(sliderValue / 100) * 100}%`,
                  transform: "translateX(-50%)",
                  position: "absolute",
                }}
              >
                {sliderValue}
              </span>
              <div className="tick-container" style={{ position: "relative" }}>
                {Array.from({ length: totalTicks + 1 }).map((_, i) => {
                  const percent = (i / totalTicks) * 100;
                  return (
                    <React.Fragment key={i}>
                      <span className="tick" style={{ left: `${percent}%`, position: "absolute" }} />
                      <span
                        className="tick-label"
                        style={{
                          left: `${percent}%`,
                          position: "absolute",
                          transform: "translateX(-50%)",
                        }}
                      >
                        {i * 10}
                      </span>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Industry Selection */}
            <h5 className="section-titles mt-4">Industries</h5>
            <br />
            <div className="d-flex " style={{ gap: "7px", flexWrap: "nowrap" }}>
              {industries.map((industry) => (
                <div
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`toggle-industry ${selectedIndustry === industry ? "selected" : ""}`}
                  style={{
                    cursor: "pointer",
                    opacity: selectedIndustry === industry ? 1 : 0.5,
                    border: selectedIndustry === industry
                      ? "2px solid rgb(7 121 184 / 44%)"
                      : "2px solid transparent",
                    borderRadius: "8px",
                    padding: "10px",
                    textAlign: "center",
                    background: selectedIndustry === industry ? "#4257c04a" : "#0000001f",
                    transition: "0.3s",
                  }}
                >
                  {/* Image */}
                  <img
                    src={industryImages[industry] || "/img/default.png"}
                    alt={industry}
                    className="img-fluid"
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  />

                  {/* Text */}
                  {/* <p style={{ marginTop: "8px", fontSize: "14px" }}>{industry}</p> */}
                </div>
              ))}

            </div>

            {/* Location Selection */}
            <h5 className="section-titles mt-4">Where are you located?</h5>
            <br />
            <div className="d-flex" style={{ gap: "7px" }}>
              {locations.map((loc) => (
                <span
                  key={loc}
                  // src={`${process.env.PUBLIC_URL}/img/${loc}.png`}
                  className={`img-fluid toggle-img ${selectedLocation === loc ? "selected" : ""}`}
                  onClick={() => setSelectedLocation(loc)}
                  alt={loc}
                  style={{
                    cursor: "pointer",
                    opacity: selectedLocation === loc ? 1 : 0.5,
                    border: selectedLocation === loc ? "2px solid rgb(7 121 184 / 44%)" : "2px solid transparent",
                    borderRadius: "8px", padding: "10px",
                    background: selectedLocation === loc ? "#4257c04a" : "#0000001f",
                  }}
                >
                  {/* Image */}
                  <img
                    src={LocationImages[loc] || "/img/default.png"}
                    alt={loc}
                    className="img-fluid"
                    style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  />
                </span>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="col-xl-6 col-lg-6 col-md-12 right-panel" style={{ width: "50%" }}>
            <h5 className="section-titles">&nbsp;&nbsp;&nbsp;&nbsp;Potential annual savings:</h5>

            <div className="row g-3">
              <div className="col-md-6">
                <div className="savings-card">
                  <h2>{formatCurrency(directAmount) || "$20,464"}</h2>
                  <p>Annual savings on one mid-level engineer’s hiring, support, and retention.</p>
                  <ul className="checklist">
                    <li>Office expenses</li>
                    <li>Social packages</li>
                    <li>Insurance</li>
                    <li>Vacations</li>
                    <li>Sick leaves</li>
                    <li>Premiums and bonuses</li>
                    <li>Personal equipment</li>
                    <li>Training and mentoring</li>
                    <li>HR</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="savings-card">
                  <h2>{formatCurrency(indirectAmount) || "$10,832"}</h2>
                  <p>Annual administrative costs optimization for one mid-level engineer.</p>
                  <ul className="checklist">
                    <li>Administration</li>
                    <li>Accounting</li>
                    <li>Lawyers</li>
                    <li>Offices</li>
                    <li>Infrastructure</li>
                    <li>Training programs</li>
                    <li>Recruiting</li>
                    <li>Related services</li>
                  </ul>
                </div>
              </div>
            </div>

            <center>
              <div className="highlight-box">
                {highlightPercent ? `${highlightPercent}%` : "38%"}
                <p className="inners">software development velocity improvement</p>
              </div>
            </center>
            <br />
            <div>
              <a href="#" className="cta-btn">
                → Book a discovery call
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetPricingPlanData;
