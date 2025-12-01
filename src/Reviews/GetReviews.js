
import React,{useEffect,useState} from "react";
import axios from "axios";

const GetReviewAllData=()=>{

const [Reviews,setReview]=useState([]);
const [ReviewsDetail,setReviewDetail]=useState([]);
const [activeReviewIndex, setActiveReviewIndex] = useState(0);

useEffect(()=>{

    const GetReviews=async()=>{
try{

    const GetReviewAPI= await axios.get('http://localhost:8001/api/GetClientsReviews');
    setReview(GetReviewAPI.data);
   }
catch(error)
{
console.log("error while fetching")}
    }
    const GetReviewsDetail=async()=>{
try{

    const GetReviewDetailAPI= await axios.get('http://localhost:8001/api/GetClientsReviewsDetail');
    setReviewDetail(GetReviewDetailAPI.data);
   }
catch(error)
{
console.log("error while fetching")}
        }
GetReviews();GetReviewsDetail();
},[]);





 useEffect(() => {
  const items = document.querySelectorAll(".profile-item");
  const indicatorDots = document.getElementById("indicatorDots");

  if (!items.length || !indicatorDots) return;

  let startIndex = 0;

  // Create dots only once
  indicatorDots.innerHTML = "";

  items.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active-dot");
    dot.dataset.index = index;
    indicatorDots.appendChild(dot);
  });

  const dots = indicatorDots.querySelectorAll(".dot");

  function updateActive() {
  items.forEach(item => item.classList.remove("active"));

  const visible = Array.from(items).map((_, i) => (startIndex + i) % items.length);

  visible.forEach((index, position) => {
    items[index].style.order = position;
    items[index].style.opacity = "1";

    if (position === 0 || position === visible.length - 1) {
      items[index].style.opacity = "0.4";
    }
  });

  const activeIndex = visible[3];
  items[activeIndex].classList.add("active");
  items[activeIndex].style.opacity = "1";

  dots.forEach(dot => dot.classList.remove("active-dot"));
  dots[startIndex].classList.add("active-dot");

  // ✅ Update active review index here
  setActiveReviewIndex(activeIndex);
}
  const intervalId = setInterval(() => {
    startIndex = (startIndex + 1) % items.length;
    updateActive();
  }, 2500);

  updateActive();

  dots.forEach(dot => {
    dot.addEventListener("click", e => {
      startIndex = parseInt(e.target.dataset.index);
      updateActive();
    });
  });

  // Cleanup
  return () => clearInterval(intervalId);

}, [ReviewsDetail]);
if(Reviews.length==0){
    return null
}
 const data=Reviews[0];
 const datad=ReviewsDetail[0];
 const dataDetail=datad?.Review_List||[];
return(

    <>
    <section className="testimonial-section py-16">
      <div className="text-center">
     <center><h6 class="section-subtitlee">{data.R_Tag}</h6></center><br/>
      </div>
      <br />
      <h2 className="check" style={{fontWeight: "600 !important;"}}>
        {data.R_Heading}
      </h2>
      <p className="subtitle text-center">
       {data.R_SubHeading}
      </p>
      <div className="profile-images">
        {dataDetail.map((d,index)=>(
        <div className="profile-item" data-index="0" key={index}>
          <img 
          src={
                              d.ClientImage
                              ?`${process.env.PUBLIC_URL}/img/${d.ClientImage}`
                              :`${process.env.PUBLIC_URL}/img/benefits.png}`
                              }
          alt="profile1" />
          <div className="desc">
            <h6>{d.ClientName}</h6>
            <p>{d.ClientDesignation}</p>
          </div>
        </div>
        ))}

      </div>
<br />
<div className="testimonial-box mt-4">
  <div className="stars mb-2">
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
  </div>
  <br />
  <p id="clientText">
    {dataDetail[activeReviewIndex]?.ReviewText}
  </p>
  <br />
  <svg width={74} height={22}>
    <rect fill="url(#pattern0_935_7460)" />
    <defs>
      <pattern id="pattern0_935_7460">
        <use xlinkHref="#image0_935_7460" />
      </pattern>
      <image id="image0_935_7460" xlinkHref="data:image/png;base64,..." />
    </defs>
  </svg>
</div>

  <div className="d-flex justify-content-center mt-3 gap-2" id="indicatorDots"></div>
    </section>
    
    </>
)

}
export default GetReviewAllData;