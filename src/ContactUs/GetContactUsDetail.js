
import React,{useEffect,useState} from "react";
import axios from "axios";

const GetContactUsDetailData=()=>{

const [ContactUs,setContactUs]=useState([]);
useEffect(()=>{

    const GetContactUs=async()=>{

        try{

    const GetContactUsfromAPI= await axios.get("http://localhost:8001/api/GetContactUsDetail")
    setContactUs(GetContactUsfromAPI.data);
        }
        catch(error)
        {
       console.log("error while fetching");

        }
       }

GetContactUs()
},[]);
  useEffect(()=>{

     const backToTop = document.getElementById("backToTop");
     if(!backToTop) return //
     const handleScroll=()=>{
      if (window.scrollY > 200) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
     }
      const handclick=()=>{
      window.scrollTo({ top: 0, behavior: "smooth" });
      }
     window.addEventListener("scroll",handleScroll);
      backToTop.addEventListener("click",handclick);
      // Cleanup (important for React)
    return () => {
      window.removeEventListener("scroll", handleScroll);
      backToTop.removeEventListener("click", handclick);
    };
  },[])
if (ContactUs.length === 0) {
    return null; // or a loader
  }

  const data = ContactUs[0];
  const dataContactUs = data.Benefits||[];
  const dataHappenNext = data.HappenNext||[];
 
return(

    <>
    <section
  className="contact-section"
  style={{
    background: "linear-gradient(to bottom, #1e40af 30%, rgba(235, 237, 248, 1) 30%)",
    borderRadius: "0px"
  }}
>
  <div className="container">
    <div className="row align-items-center">

      {/* LEFT SIDE */}
      <div className="col-lg-6 contact-left">
        <button className="inner-btn">{data.Tag}</button><br /><br />
     <div className="row"> <div className="col-md-2"></div> 
     <div className="col-md-6">
         <h2
          className="partner"
          style={{ marginLeft: "-190px", marginTop: "-55px" }}>
            {data.Heading}
        </h2>
        </div> </div>
       
        <br /><br /><br />

        <p className="answer">
          <br />
            {data.Description}
        </p>
        <br />

        <div className="nan">
          <p className="call" style={{ marginLeft: "-373px" }}>
            Call us at: <span className="call">   {data.ContactNo}</span>
          </p>
        </div>
        <br />

        <p className="benf">Your benefits:</p>

        <div className="row hor mt-4" style={{ marginLeft: "-43px" }}> 
            {dataContactUs.map((benefits,index)=>(
          <div className="col-md-6" key={index}>
            <ul>
              
              <li>{benefits}</li>
              
           
            </ul>
          </div> 
        ))} 

          
        </div>

        <br />

        <h6 className="happen">What happens next?</h6>
        <br />

<ol className="custom-steps" style={{ marginLeft: "-20px" }}>
  <div className="row">
    {dataHappenNext.map((next, index) => (
      <div className="col-md-4" key={index}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px", // spacing between text and arrow
            marginBottom: "20px", // spacing between steps
          }}
        >
          <li style={{ margin: 0 }}>{next}</li>
 {/* SVG — hide if last column */}
      {index !== dataHappenNext.length - 1 && (
          <svg
             style={{ width: "90px", height: "70px" }} 
            viewBox="0 0 62 73"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.4624 4.12907L25.3968 3.83398L35.4394 33.952L25.3869 63.116L24.4525 62.7914L34.3968 33.952L24.4624 4.12907Z"
              fill="black"
              fillOpacity="0.15"
            />
          </svg>)}
        </div>
      </div>
    ))}
  </div>
</ol>



      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="col-lg-6">
        <div className="contact-box">
          <h5 className="Us">
            Contact Us for Consultation
            <br />
            
          </h5>

          <form>
            <div className="row g-3">

              <div className="col-md-6 mb-3">
                <label className="form-label">First name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Last name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">Company / Organization</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">Company email</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12">
                <label className="form-label">How Can We Help You?</label>
                <select className="form-select">
                  <option disabled>Select Option</option>
                  <option>Consultation</option>
                  <option>Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="col-12">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="To better assist you, please describe how we can help..."
                ></textarea>
              </div>

              <div className="col-12 text-center">
                <button type="submit" className="submit">Submit</button>
              </div>

            </div>
          </form>
        </div>
      </div>

    </div>
  </div>
</section>

<br />
<br />

<button id="backToTop">
  <i className="bi bi-arrow-up"></i>
</button>

    </>
)

}
export default GetContactUsDetailData;