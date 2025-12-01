import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

function formatCurrency(val) {
  if (val == null || val === "") return null;

  // if it's already a number
  if (typeof val === 'number') return `$${val.toLocaleString()}`;

  // if it's a string
  if (typeof val === 'string') {
    // remove all characters except digits, dot, and minus
    const cleaned = val.replace(/[^0-9.-]/g, '');
    const n = Number(cleaned);
    if (!isNaN(n)) return `$${n.toLocaleString()}`;
  }

  // fallback (in case parsing failed)
  return val;
}

export const GetPricingPlanData = () => {
  const [CostOptimizationheader, setCostOptimizationheader] = useState([]);
  const [pricingplan, setpricingplan] = useState([]);
  const [services, setServices] = useState([]); // [{service: 'Health.png', locations: ['inno.png', ...]}]
  const [selectedService, setSelectedService] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  // slider state / refs
  const [sliderValue, setSliderValue] = useState(15);
  const sliderRef = useRef(null);
  const valueRef = useRef(null);
  const tickContainerRef = useRef(null);
  const totalTicks = 10; // 10 ticks => 0,10,...100
  const [pricingPlansData, setPricingPlansData] = useState([]);
  const [savingsPrimary, setSavingsPrimary] = useState(null);
  const [savingsSecondary, setSavingsSecondary] = useState(null);
  const [adminCost, setAdminCost] = useState(null);
  const [highlightPercent, setHighlightPercent] = useState(null);
 
  useEffect(() => {
    const GetCostOptimizationheader = async () => {
      try {
        const GetCostOptimization = await axios.get(
          "http://localhost:8001/api/GetCostOptimization"
        );
        setCostOptimizationheader(GetCostOptimization.data);
      } catch (error) {
        console.error("Failed to fetch GetCostOptimization:", error);
      }
    };

    const Getpricingplans = async () => {
      try {
        const resp = await axios.get(
          "http://localhost:8001/api/GetExpertRequests"
        );
       // console.log("GetExpertRequests response:", resp.status, resp.data);
        setpricingplan(resp.data || []);

        // group by Selected_Service to build services list with locations
        const map = {};
        (resp.data || []).forEach((item) => {
          const svc = item.Selected_Service || "Health.png";
          const loc = item.Selected_Location || null;
          if (!map[svc]) map[svc] = { service: svc, locations: [] };
          if (loc && !map[svc].locations.includes(loc)) map[svc].locations.push(loc);
        });
        const svcArr = Object.values(map);
        setServices(svcArr);
        if (!selectedService && svcArr.length > 0) setSelectedService(svcArr[0].service);
      } catch (error) {
        console.error(
          "Failed to fetch GetExpertRequests:",
          error && error.response
            ? { status: error.response.status, data: error.response.data }
            : error.message || error
        );
      }
      
    };

    const GetPricingPlans = async () => {
      try {
        const resp = await axios.get("http://localhost:8001/api/GetPricingPlans");
        setPricingPlansData(resp.data || []);
      } catch (err) {
        console.error('Failed to fetch GetPricingPlans', err);
      }
    };

    GetCostOptimizationheader();
    Getpricingplans();
    GetPricingPlans();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // update savings when slider/service/location/pricing data changes
  useEffect(() => {
    const updateSavings = () => {
      // try to find expert request that matches selected service & location
      if (selectedService && selectedLocation && pricingplan.length > 0) {
        const match = pricingplan.find(p => p.Selected_Service === selectedService && p.Selected_Location === selectedLocation);
        if (match) {
          // Savings_Cost and Administrative_Cost exist on ExpertRequests model
          setSavingsPrimary(match.Savings_Cost || null);
          setSavingsSecondary(match.Potential_Annual_Savings || match.Savings_Cost || null);
          setAdminCost(match.Administrative_Cost || null);
          return;
        }
      }

      // fallback: use PricingPlansData Potential_Annual_Savings by bucket
      if (pricingPlansData.length > 0 && selectedService) {
        // try to match by service name (strip extension)
        const svcName = selectedService.replace(/\.[^/.]+$/, "");
        let plan = pricingPlansData.find(p => (p.ServiceID && p.ServiceID.includes(svcName)) || (p.service && p.service.includes(svcName)));
        if (!plan) plan = pricingPlansData[0];
        if (plan && Array.isArray(plan.Potential_Annual_Savings) && plan.Potential_Annual_Savings.length > 0) {
          // map sliderValue to index: 0..totalTicks
          const idx = Math.round(sliderValue / (100 / totalTicks));
          const entry = plan.Potential_Annual_Savings[Math.min(idx, plan.Potential_Annual_Savings.length - 1)];
          if (entry) {
            setSavingsPrimary(entry.Amount || null);
            setSavingsSecondary(entry.Amount || null);
            // admin cost fallback not available here
            setAdminCost(null);
            return;
          }
        }
      }

      // default fallback values
      setSavingsPrimary(null);
      setSavingsSecondary(null);
      setAdminCost(null);
    };

    updateSavings();
  }, [sliderValue, selectedService, selectedLocation, pricingplan, pricingPlansData]);

  // derive highlight percent from ExpertRequests (RequestedExpertSchema)
  useEffect(() => {
    if (pricingplan && pricingplan.length > 0) {
      let found = null;
      if (selectedService && selectedLocation) {
        found = pricingplan.find(p => p.Selected_Service === selectedService && p.Selected_Location === selectedLocation);
      }
      if (!found && selectedService) {
        found = pricingplan.find(p => p.Selected_Service === selectedService) || pricingplan[0];
      }
      if (!found) found = pricingplan[0];
      if (found && found.Percentage) {
        console.debug('Selected Percentage source:', { found });
        setHighlightPercent(found.Percentage);
      } else {
        setHighlightPercent(null);
      }
    }
  }, [pricingplan, selectedService, selectedLocation]);

  if (CostOptimizationheader.length == 0) {
    return null;
  }
  const dataCost = CostOptimizationheader[0];
  return (
    <>
      <br />
      <br />
      <br />
      <center>
        <div className="section-subtitlee">{dataCost.XCO_Tag}</div>
      </center>
      <br />
      <center>
        <p className="smart text-center">{dataCost.XCO_Heading}</p>
      </center>
  

      <div className="container calculator-container">
        <div className="row g-0" style={{ borderRadius: "18px" }}>
          {/* Left Column (white) */}
          <div className="col-lg-6 left-panel" style={{ width: "52%" }}>
            <h5 className="section-titles">
              How many experts does your organization
              <br /> need today?
            </h5>
            <br />

            {/* Slider (single instance) */}
            <div className="slider-box" style={{ marginLeft: "-2px", position: 'relative' }}>
              <input
                ref={sliderRef}
                type="range"
                min={0}
                max={100}
                value={sliderValue}
                step={1}
                className="custom-slider"
                id={`progressSlider`}
                onChange={(e) => setSliderValue(Number(e.target.value))}
              />

              {/* Tooltip positioned by percent + translateX to center */}
              {typeof sliderValue === 'number' && (
                (() => {
                  const percent = (sliderValue - 0) / (100 - 0);
                  return (
                    <span
                      ref={valueRef}
                      id={`progressValue`}
                      className="slider-tooltip"
                      style={{ left: `${percent * 100}%`, transform: 'translateX(-50%)', position: 'absolute' }}
                    >
                      {sliderValue}
                    </span>
                  );
                })()
              )}

              <div className="tick-container" id={`tickContainer`} ref={tickContainerRef} style={{ position: 'relative' }}>
                {Array.from({ length: totalTicks + 1 }).map((_, i) => {
                  const percent = (i / totalTicks) * 100;
                  return (
                    <React.Fragment key={`tick-${i}`}>
                      <span className="tick" style={{ left: `${percent}%`, position: 'absolute' }} />
                      <span className="tick-label" style={{ left: `${percent}%`, position: 'absolute', transform: 'translateX(-50%)' }}>
                        {i * 10}
                      </span>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <h5 className="section-titles mt-4">Industries</h5>
            <br />

            <div className="row" style={{ marginTop: "-8px" }}>
              <div className="d-flex flex-wrap" style={{ gap: "7px" }}>
                {/* render unique services as selectable icons */}
                {services.length > 0 ? (
                  services.map((s, idx) => (
                    <img
                      key={`${s.service}-${idx}`}
                      src={
                        s.service
                          ? `${process.env.PUBLIC_URL}/img/${s.service}`
                          : `${process.env.PUBLIC_URL}/img/Health.png`
                      }
                      alt={s.service}
                      className={`img-fluid toggle-img ${selectedService === s.service ? "selected" : ""}`}
                      style={{ cursor: "pointer", opacity: selectedService === s.service ? 1 : 0.5, transition: 'opacity 200ms', border: selectedService === s.service ? '2px solid rgba(7,121,184,1)' : '2px solid transparent', borderRadius: '8px', objectFit: 'cover', display: 'block' }}
                      onClick={() => {
                        setSelectedService(s.service);
                        // default-select the first location for this service if available
                        setSelectedLocation(s.locations && s.locations.length > 0 ? s.locations[0] : null);
                      }}
                    />
                  ))
                ) : (
                  <div>No services found</div>
                )}
              </div>
            </div>

            <h5 className="section-titles mt-4">Where are you located?</h5>
            <br />
            <div className="row" style={{ marginTop: "-8px" }}>
              <div className="d-flex flex-wrap" style={{ gap: "7px" }}>
                {/* show locations for selected service */}
                {(services.find((s) => s.service === selectedService)?.locations || []).length > 0 ? (
                  services
                    .find((s) => s.service === selectedService)
                    .locations.map((loc, i) => (
                      <img
                        key={`${loc}-${i}`}
                        src={
                          loc && (loc.startsWith("/") || loc.startsWith("http"))
                            ? loc
                            : `${process.env.PUBLIC_URL}/img/${loc}`
                        }
                        alt={loc}
                        className={`img-fluid toggle-img ${selectedLocation === loc ? 'active' : ''}`}
                        style={{ cursor: "pointer  !important", opacity: selectedLocation === loc ? 1 : 0.5, transition: 'opacity 200ms', border: selectedLocation === loc ? '2px solid rgba(7,121,184,1)' : '2px solid transparent', borderRadius: '8px', objectFit: 'cover', display: 'block' }}
                        onClick={() => setSelectedLocation(prev => prev === loc ? null : loc)}
                      />
                    ))
                ) : (
                  // fallback to the first pricingplan entry if no grouped locations
                  pricingplan.length > 0 &&
                  pricingplan.slice(0, 4).map((p, i) => (
                    <img
                      key={`fallback-${i}`}
                      src={
                        p.Selected_Location
                          ? `${process.env.PUBLIC_URL}/img/${p.Selected_Location}`
                          : `${process.env.PUBLIC_URL}/img/Health.png`
                      }
                      alt={`loc-${i}`}
                      className="img-fluid toggle-img"
                      style={{ cursor: "pointer  !important", border: '2px solid transparent', borderRadius: '8px', objectFit: 'cover', display: 'block' }}
                    />
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Right Column (light gray) */}
          <div className="col-lg-6 right-panel" style={{ width: "48%" }}>
            <h5 className="section-titles">&nbsp;&nbsp;&nbsp;&nbsp;Potential annual savings:</h5>

            <div className="row g-3">
              <div className="col-md-6">
                <div className="savings-card">
                    <h2>{formatCurrency(savingsPrimary) || "$20,464"}</h2>
                  <p>
                    Annual savings on one mid level engineer’s hiring, support and
                    retention.
                  </p>
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
                  <h2>{formatCurrency(adminCost) || "$10,832"}</h2>
                  <p>
                    Annual administrative costs optimization for one mid-level
                    engineer.
                  </p>
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
          {highlightPercent ? highlightPercent : '38%'} <br />
          <p className="inners">software development velocity improvement</p>
        </div>
      </center>
   <br/>
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