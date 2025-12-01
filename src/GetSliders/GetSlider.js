import React, { useEffect, useState  } from "react";
import './GetSlider.css';
// import first from "../img/first.png";
// import second from "../img/second.png";
// import third from "../img/third.png";
// import forth from "../img/forth.png";
import axios from "axios";

// const imageMap = {
//   "first.png": first,
//   "second.png": second,
//   "third.png": third,
//   "forth.png": forth,
// };

const GetSlidersData = () => {
 const [sliders,setSliders]=useState ([])
 useEffect(()=>{
const getsliders=async()=>{

  try{ 
  const response = await axios.get("http://localhost:8001/api/GetSlider");
        setSliders(response.data);
        //console.log("Fetched sliders:", response.data);
  }
  catch(error){
console.log("error while fetching data");
  }
}

getsliders()
 },[]);

   //  Initialize Bootstrap Carousel here (not in script tag)
  useEffect(() => {
    const heroCarousel = document.querySelector("#heroCarousel");
    if (heroCarousel && window.bootstrap) {
      new window.bootstrap.Carousel(heroCarousel, {
        interval: 3000,
        ride: "carousel",
      });
    }
  }, [sliders]); // re-run only when data is loaded
  return  (

<div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
  <div className="carousel-inner">
{  
sliders.map((slider,index)=>{  

return(
    // <div className="carousel-item active">
     <div  key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>

      <div className="py-7 custom-padding">
        <div className="row align-items-center">

          <div className="col-lg-6 col-md-7 col-12 text-center text-md-start mb-4 mb-md-0">
            <span className="tag">{slider.Tag}</span>
            
            <p className="lg-text mt-lg-4">
             {slider.Heading.split(' ').map((word, index) => (
        <React.Fragment key={index}>
            {word}{' '}
          {(index + 1) % 2 === 0 && <br />} 
          {/* Inserts a <br/> after every 3 words */}
         </React.Fragment>
           ))}
              
               </p>



            <p className="mb-4 text-sm">
                   {slider.Description.split(' ').map((word, index) => (
            <React.Fragment key={index}>
                {word}{' '}
               {(index + 1) % 5 === 0 && <br />} 
            {/* Inserts a <br/> after every 3 words */}
             </React.Fragment>
              ))}
              
               {/* {slider.Description} */}
              </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3">
              <a href="#" className="btn custom-btn">Get a Free Consultation</a>
              <a href="#" className="btn customexplore">Explore Services</a>
            </div>
          </div>

          <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center mt-4 mt-md-0 pt-lg-4">
                  <img
                src={ slider.ImagePath
                  ? `${process.env.PUBLIC_URL}/img/${slider.ImagePath}`
                  : `${process.env.PUBLIC_URL}/img/first.png`}
                style={{ height: "420px" }}
                className="img-fluid custom-img"
                alt="Slide"
              />
             
          </div>
        </div>
      </div>
    </div>


)
 
 })
 }
  
      </div>
      
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active" aria-current="true"></button>
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3"></button>
  </div>

  </div>


  );
}
export default GetSlidersData;
