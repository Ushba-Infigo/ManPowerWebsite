import React, { useEffect, useState, useContext } from "react";
import { RefreshContext } from "../App";
import axios from "axios";

const GetReviewAllData = () => {

  const refreshKey = useContext(RefreshContext);
  const [reviews, setReviews] = useState([]);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  useEffect(() => {

    const fetchReviews = async () => {
      try {
        debugger
        const res = await axios.get("http://83.147.38.201:8001/api/reviews");

        // show only active reviews
        
    const reviewArray = Array.isArray(res.data) ? res.data : res.data.data;

    const activeReviews = reviewArray.filter(r => r.IsActive === true);

        setReviews(activeReviews);
      } catch (error) {
        console.log("error while fetching reviews");
      }
    };

    fetchReviews();

  }, [refreshKey]);



  useEffect(() => {

    const items = document.querySelectorAll(".profile-item");
    const indicatorDots = document.getElementById("indicatorDots");

    if (!items.length || !indicatorDots) return;

    let startIndex = 0;

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

      const activeIndex = visible[0];

      items[activeIndex].classList.add("active");
      items[activeIndex].style.opacity = "1";

      dots.forEach(dot => dot.classList.remove("active-dot"));
      dots[startIndex].classList.add("active-dot");

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

    return () => clearInterval(intervalId);

  }, [reviews]);



  if (reviews.length === 0) return null;

  return (

    <>
      <section className="testimonial-section py-16">
          <div className="text-center">
          <center><h6 class="section-subtitlee">Reviews</h6>
          </center>
        </div>
        <h2 className="check" style={{ fontWeight: "600" }}> Check What Our Client Are Saying </h2>
       
        <div className="profile-images">

          {reviews.map((review, index) => (

            <div className="profile-item" key={review._id}>

              <img
                src={
                  review.ImagePath
                    ? `http://83.147.38.201:8002/uploads/reviews/${review.ImagePath}`
                    : `${process.env.PUBLIC_URL}/img/benefits.png`
                }
                alt={review.Name}
              />

              <div className="desc">
                <h6>{review.Name}</h6>
                <p>{review.Bio}</p>
              </div>

            </div>

          ))}

        </div>

        <br />

        <div className="testimonial-box mt-4">

          <div className="stars mb-2">

            {[...Array(reviews[activeReviewIndex]?.Stars || 0)].map((_, i) => (
              <i key={i} className="bi bi-star-fill"></i>
            ))}

          </div>

          <br />

          <p id="clientText">
            {reviews[activeReviewIndex]?.Description}
          </p>

        </div>

        <div
          className="d-flex justify-content-center mt-3 gap-2"
          id="indicatorDots"
        ></div>

      </section>
    </>
  );
};

export default GetReviewAllData;