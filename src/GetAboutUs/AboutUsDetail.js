
import React, { useEffect, useState, useContext } from "react";
import { RefreshContext } from "../App";
import axios from "axios";
import { Link } from 'react-router-dom';
const TABS = [
  { key: 'Mission', label: 'Our Mission', id: 'mission', buttonId: 'telecom-tab', className: 'ms-lg-1', style: { marginLeft: '-10px' } },
  { key: 'Vision', label: 'Our Vision', id: 'our', buttonId: 'it-tab', className: 'custom2-margin-lg', style: { marginLeft: '-10px' } },
  { key: 'Goals', label: 'Our Goals', id: 'goals', buttonId: 'education-tab', className: 'custom2-margin-lgi', style: {} }
];
const GetAboutUsDetailData = () => {
  const refreshKey = useContext(RefreshContext);

  const [aboutus, setaboutus] = useState([]);
  const [mission, setMission] = useState([]);
  const [activeTab, setActiveTab] = useState('Mission');
  const [core, setcore] = useState([]);
  const [History, setHistory] = useState([]);
  const [CUheader, setCUheader] = useState([]);
  const [CUDetail, setCUDetail] = useState([]);
  useEffect(() => {

    const GetAboutUs = async () => {

      try {

        const GetAboutUsfromAPI = await axios.get("http://localhost:8001/api/GetAboutUs")
        setaboutus(GetAboutUsfromAPI.data);
      }
      catch (error) {
        console.log("error while fetching");

      }
    }
    const GetAboutMission = async () => {

      try {

        const GetAboutMissionfromAPI = await axios.get("http://localhost:8001/api/GetMission")
        setMission(GetAboutMissionfromAPI.data);
      }
      catch (error) {
        console.log("error while fetching");

      }
    }
    const GetCore = async () => {

      try {

        const GetCorefromAPI = await axios.get("http://localhost:8001/api/GetCore")
        setcore(GetCorefromAPI.data);
      }
      catch (error) {
        console.log("error while fetching");

      }
    }

    const GetHistory = async () => {

      try {

        const GetHistoryfromAPI = await axios.get("http://localhost:8001/api/GetHistory")
        setHistory(GetHistoryfromAPI.data);
      }
      catch (error) {
        console.log("error while fetching");

      }
    }

    const GetCUHeaderData = async () => {

      try {
        const { data } = await axios.get('http://localhost:8001/api/GetChooseUs')
        setCUheader(data);

      }
      catch (error) {

        console.log("error while fetching Choose Us header:", error)
      }


    }
    const GetCUDetailData = async () => {

      try {
        const { data } = await axios.get('http://localhost:8001/api/GetChooseUsDetail')
        setCUDetail(data);

      }
      catch (error) {

        console.log("error while fetching Choose Us header:", error)
      }


    }

    GetCUHeaderData();
    GetCUDetailData();
    GetAboutUs();
    GetAboutMission();
    GetCore();
    GetHistory();
  }, [refreshKey]);

  if (aboutus.length === 0) {
    return null; // or a loader
  }
  
  const data = aboutus[0];
  const dataDetail = data?.About_Detail || [];
  const dataDetailCounter = data?.Detail_Counter || [];
  const dataMission = mission[0];
  const dataMissionDetail = dataMission?.Detail || [];
  const dataCore = core[0];
  const dataHistory = History[0];
  const dataCU = CUheader[0];
  // const dataCoreDetail = coreD[0];
  return (

    < div>
      <div className="overflow-hidden" style={{ marginTop: "-75px" }}>
        <img
          src="/img/vector.png"
          alt="Contact Us Banner"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      <center style={{ marginTop: "-54px" }} className="homecrumb">
        <span>
          <Link to="/" className="home" style={{ textDecoration: "none", cursor: "pointer" }}>Home</Link>&nbsp;&gt;&nbsp;
          <span className="contact">About Us</span>
        </span>
      </center>
  <section className="abtsetting">

   <div className="smaller" style={{ marginLeft: "20%", marginRight: "20%" }}>
        {data?.Heading}
      </div>

      <br />

      <div className="container-fluid my-5" style={{ overflowX: "hidden" }}>
        <div className="row align-items-center">

          {/* IMAGE COLUMN */}
          <div className="col-md-6 text-center mb-4 mb-md-0 position-relative">

            <img
              src={
                data?.ImagePath
                  ? `http://localhost:8002/uploads/about-us/${data.ImagePath}`
                  : `${process.env.PUBLIC_URL}/img/empowering.png`
              }
              alt="About Us"
              className="abouting abtdetail"
              style={{ borderRadius: "32px", width: "100%",height:"35rem", paddingLeft: '40px', paddingRight: '40px' }}
            />

            {/* COUNTERS OVER IMAGE */}
            <div
              className="d-flex gap-3  counter-overlay"
            >
              {data?.Counters?.map((counter, index) => (
                <div
                  key={counter._id}
                  className="first-crd"
                  style={{
                    width: index === 0 ? "192px" : "156px",
                    height: "99px",
                    background: "white",
                    borderRadius: "16px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="card-body">
                    <p className="first" id={`counter-${index}`}>
                      {counter.Value}
                      {index === 0 ? "+" : "%"}
                    </p>
                    <p className="comp" style={{ marginTop: "-10px" }}>
                      {counter.Heading}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* TEXT COLUMN */}
          <div className="col-md-6" style={{ marginTop: '-10%'}}>
            <div className="section-subtitless text-center mb-4" style={{ whiteSpace: "nowrap" }}>Who we are</div>

            <p
              className="smart"
              dangerouslySetInnerHTML={{
                __html: data?.About_Heading?.replace(/\n/g, "<br />"),
              }}
            />

            <p
              className="help"
              style={{ width: "85%" }}>
          {data.Description
                ? new DOMParser()
                    .parseFromString(data.Description, "text/html")
                    .body.textContent 
                : ""}
           </p>


            <br />

            <a href="aboutus.html">
              <button className="learn">Learn More</button>
            </a>
          </div>

        </div>
      </div>

      <br />
      <br />
</section>
     
      {/* Mission Section */}
      {/* Mission Section */}
      <div className="industries-section overflow-hidden hom abtsetting">
        <div className="section-header" style={{ textAlign: 'start' }}>
          <div className="section-subtitlee" >About Mission</div><br />
          <h1 className="section-title textsetting" style={{ textAlign: "left" }}>{dataMission?.MainHeading}</h1><br />
        </div>

        <ul className="nav nav-tabs2" id="industryTabs hus" role="tablist"
          style={{
            borderRadius: '12px', border: '0px',
            textAlign: 'start', width: '900px'
          }}>
          {TABS.map((tab) => (
            <li key={tab.key} className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === tab.key ? 'active' : ''} ${tab.className}`}
                id={tab.buttonId}
                data-bs-toggle="tab"
                data-bs-target={`#${tab.id}`}
                type="button"
                role="tab"
                onClick={() => setActiveTab(tab.key)}
                style={tab.style}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content ghu" id="industryTabContent ">
          {TABS.map((tab, index) => (
            <div
              key={tab.key}
              className={`tab-pane ${activeTab === tab.key ? ' show active' : ' '}`}
              id={tab.id}
              role="tabpanel"
            >
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 content-text" >
                  <p
                    style={index < 2 ? { marginTop: '30px' } : {}}
                    dangerouslySetInnerHTML={{ __html: dataMission?.Tabs?.[tab.key]?.Description }}
                  ></p>
                </div>
                <div className={`col-lg-6 col-md-12 text-center content-image ${index === 0 ? ' ' : ''}`}>
                  <div className="ima" >
                    <img className="gnb" src={
                      dataMission?.Tabs?.[tab.key]?.ImagePath
                        ? `http://localhost:8002/uploads/mission/${dataMission.Tabs[tab.key].ImagePath}`
                        : `${process.env.PUBLIC_URL}/img/empowering.png`
                    }
                      alt="AboutMissions" />

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <br />
      {/* <div
  className="industries-section overflow-hidden"
  style={{ marginLeft: "4.5rem", marginRight: "4.5rem" }}
>

  <div className="section-header text-start">
    <div className="section-subtitlee">{dataMission?.TagHeading}</div>

    <div className="row mt-3">
      <div className="col-lg-6">
        <h1 className="section-title">
          {dataMission?.MainHeading}
        </h1>
      </div>
    </div>
  </div>


  <ul className="nav nav-tabs2 mt-4" role="tablist" style={{gap:"10px",justifyContent:"left"}}>
    {["Mission", "Vision", "Goals"].map((key, index) => (
      <li className="nav-item" role="presentation" key={key}>
        <button
          className={`nav-link ${index === 0 ? "active" : ""}`}
          data-bs-toggle="tab"
          data-bs-target={`#${key}`}
          type="button"
          role="tab"
        >
          {dataMission?.Tabs?.[key]?.TabHeading}
        </button>
      </li>
    ))}
  </ul>


  <div className="tab-content mt-4">
    {["Mission", "Vision", "Goals"].map((key, index) => (
      <div
        key={key}
        className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
        id={key}
        role="tabpanel"
      >
        <div className="row align-items-center mission-wrapper">

         
          <div className="col-lg-5 col-md-12">
            <p className="mission-text">
              {dataMission?.Tabs?.[key]?.Description.replace(
                /<\/?[^>]+(>|$)/g,
                ""
              )}
            </p>
          </div>

         
          <div className="col-lg-7 col-md-12 position-relative">
            <div className="mission-image-wrapper">
              <img
                src={
                  dataMission?.Tabs?.[key]?.ImagePath
                    ? `http://localhost:8002/uploads/mission/${dataMission.Tabs[key].ImagePath}`
                    : `${process.env.PUBLIC_URL}/img/empowering.png`
                }
                alt={key}
                className="mission-image"
              />
            </div>
          </div>

        </div>
      </div>
    ))}
  </div>
</div> */}


      <br />
      <section className="abtsetting">
      <section
        className="contact-section CoreSection"
        style={{ background: "linear-gradient(to bottom, #1e40af 67%, #ffffff 30%" }}
      >
        {/* Background image */}
        <img
          src="./img/white.png"
          alt=""
          style={{
            position: "absolute",
            bottom: "35px",
            right: "50px",
            width: "290px",
            height: "294px",
            zIndex: 0,
            pointerEvents: "none",
            display: "block",
            margin: 0,
            padding: 0,
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-7 contact-left" style={{ marginTop: "-20px" }}>
              <button className="inner-btn osm">
                {dataCore?.TagHeading}
              </button>

              <br />

              <h2
                className="partner2"
                style={{ marginLeft: "-34px", marginTop: "-15px" }}
              >
                {dataCore?.MainHeading}
              </h2>

              <br />
              <br />
              <br />
            </div>
          </div>
        </div>

        <br />
        <br />
      </section>

      <div
        className="container-fluid"
        style={{
          paddingLeft: "60px",
          paddingRight: "60px",
          marginTop: "-120px",
        }}
      >
        <section className="values-section">
          <div className="row hous g-3 justify-content-center">
            {dataCore?.Cards?.map((coreDetail, index) => (
              <div className="col-md-2 col-lg-2" key={index} style={{ marginLeft: '1%', marginRight: '1%' }}>
                <div className="value-card">
                  <div className="value-icon">
                    <img
                      src={
                        coreDetail?.IconPath
                          ? `http://localhost:8002/uploads/core-values/${coreDetail.IconPath}`
                          : `${process.env.PUBLIC_URL}/img/2ndb.png`
                      }
                      alt=""
                    />
                  </div>

                  <h5 className="value-title" style={{ marginTop: "30px" }}>
                    {coreDetail?.CardHeading}
                  </h5>

                  <p className="value-text">
                    {coreDetail?.Description.replace(/<\/?[^>]+(>|$)/g, "")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
</section>
      <br /><br /><br />
      <div
        style={{
          backgroundImage: "url('./img/linebg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "auto"
        }}
        className="Histroy abtsetting"
      >
        <center>
          <br />
          <div className="section-subtitles">{dataHistory?.TagHeading}</div>
        </center>

        <br />

        <center>
          <p className="expert" >
            {dataHistory?.MainHeading}</p>
        </center>

        <center>
          <p className="history text-center"
            style={{ marginLeft: "20%", marginRight: "20%" }}>
            {dataHistory?.Description.replace(/<\/?[^>]+(>|$)/g, "")}
          </p>
        </center>
        <section className="timeline-section container">
          <div className="timeline-block">
            <span className="timeline-dot"></span>

            {dataHistory?.Sections
              ?.sort((a, b) => a.Order - b.Order)
              .map((section, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div className="row align-items-center" key={index}>
                    {isEven ? (
                      <>
                        {/* Image Left */}
                        <div className="col-lg-5">
                          <div className="img-card">
                            <img
                              src={
                                section.ImagePath
                                  ? `http://localhost:8002/uploads/history/${section.ImagePath}`
                                  : `${process.env.PUBLIC_URL}/img/empowering.png`
                              }
                              className="w-100"
                              alt=""
                            />
                          </div>
                        </div>

                        {/* Text Right */}
                        <div className="col-lg-6 ms-auto text-content">
                          <h3
                            className="nah"
                            style={{
                              marginLeft: "100px",
                              fontSize: "19px",
                              fontWeight: "bold",
                            }}
                          >
                            {section.SectionHeading}
                          </h3>
                          <p style={{ marginLeft: "100px", width: "80%" }} class="Historyfirst">
                            {/* <span dangerouslySetInnerHTML={{ __html: section.SectionDescription }}></span> */}
                            <span>{ section?.SectionDescription ? new DOMParser()
                            .parseFromString(section?.SectionDescription, "text/html")
                            .body.textContent
                        : ""}</span>
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Text Left */}
                        <div className="col-lg-6 text-content">
                          <h3
                            className="nah naha"
                            style={{ fontSize: "19px", fontWeight: "bold" }}
                          >
                            {section.SectionHeading}
                          </h3>
                          <p style={{ width: "80%" }} Class="Historyfirst">
                             <span>{ section?.SectionDescription ? new DOMParser()
                            .parseFromString(section?.SectionDescription, "text/html")
                            .body.textContent
                        : ""}</span>
                          </p>
                        </div>

                        {/* Image Right */}
                        <div className="col-lg-5 ms-auto">
                          <div className="img-card">
                            <img
                              src={
                                section.ImagePath
                                  ? `http://localhost:8002/uploads/history/${section.ImagePath}`
                                  : `${process.env.PUBLIC_URL}/img/empowering.png`
                              }
                              className="w-100"
                              alt=""
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
          </div>
        </section>
      </div>



      <br />
      <br />
      <section className="choose-section abtsetting "
        style={{ backgroundColor: "rgba(238, 248, 253, 1)" }}
      >
        <div className="px-lg-5 px-3">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-4 col-md-12">
              <button className="btning" style={{ backgroundColor: "rgba(82, 183, 232, 0.15)", color: "rgba(50, 72, 184, 1)" }} >
                {dataCU?.TagHeading}</button>
              <br />
              <br />
              <h2 style={{ color: "rgba(28, 28, 87, 1)" }}>{dataCU?.MainHeading}</h2>
              <p style={{ color: "rgba(90, 90, 90, 1)" }} className="Choosecolor"><span dangerouslySetInnerHTML={{ __html: dataCU?.Description }}></span></p>
            </div>

            {/* Right Column */}
            <div className="col-lg-8 col-md-12">
              {dataCU?.Cards
                ?.sort((a, b) => a.Order - b.Order)
                .reduce((rows, card, index, array) => {
                  if (index % 2 === 0) {
                    rows.push(array.slice(index, index + 2));
                  }
                  return rows;
                }, [])
                .map((row, rowIndex) => (
                  <div className="row mb-4" key={rowIndex}>
                    {row.map((card, cardIndex) => (
                      <div className="col-md-6" key={cardIndex}>
                        <div className="feature-item">
                          <img
                            src={
                              card.IconPath
                                ? `http://localhost:8002/uploads/why-choose-us/${card.IconPath}`
                                : `${process.env.PUBLIC_URL}/img/logo1.png`
                            }
                            alt="Icon"
                            style={{
                              backgroundClip: "border-box",
                              backgroundColor: "rgb(82 183 232 / 71%)",
                              borderRadius: "50%",
                              padding: "18px",
                              marginTop: "2%"
                            }}
                          />
                          &nbsp;&nbsp;
                          <div>
                            <h5 className="human" style={{ color: "rgba(28, 28, 87, 1)" }}>{card.CardHeading}</h5>
                            <p style={{ color: "rgba(90, 90, 90, 1)" }} className="Choosecolor">
                              <span dangerouslySetInnerHTML={{ __html: card.CardDescription }}></span>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <br />
    </div>

  );




}

export default GetAboutUsDetailData;