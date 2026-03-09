import React, { useEffect, useState, useContext } from "react";
import { RefreshContext } from "../App";
import axios from "axios";

const GetChooseUsData = ({

  buttonBackgroundColor,
  buttonColor,
  headingColor,
  descriptionColor,
  iconFill = "#3248B8",
  iconStroke = "#52B7E8",
  itemHeadingColor,
  itemDescriptionColor,
  headingClassName = "nah" // Default to "nah" for About Us page, can be overridden to "human" for Home page
}) => {
  const refreshKey = useContext(RefreshContext);
  const [chooseUs, setChooseUs] = useState([]);
  const buttonStyle = {};
  if (buttonBackgroundColor) buttonStyle.backgroundColor = buttonBackgroundColor;
  if (buttonColor) buttonStyle.color = buttonColor;
  const headingStyle = headingColor ? { color: headingColor } : {};
  const descStyle = descriptionColor ? { color: descriptionColor } : {};
  const itemHeadingStyle = itemHeadingColor ? { color: itemHeadingColor } : {};
  const itemDescStyle = itemDescriptionColor ? { color: itemDescriptionColor } : {};

  useEffect(() => {
    const fetchChooseUs = async () => {
      try {
        const { data } = await axios.get(
          "http://83.147.38.201:8001/api/GetChooseUs"
        );
        setChooseUs(data);
      } catch (error) {
        console.log("Error fetching Why Choose Us:", error);
      }
    };

    fetchChooseUs();
  }, [refreshKey]);

  if (!chooseUs.length) return null;
  
  const data = chooseUs[0];
  const cards = data.Cards || [];

  return (
    <section className="choose-section">
      <div className="px-lg-5 px-3">
        <div className="row">
          {/* LEFT COLUMN */}
          <div className="col-lg-4 col-md-12">
            <button className="btning">{data.TagHeading}</button>
            <br />
            <br />
            <h2>{data.MainHeading}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.Description }}></p>
          </div>

          {/* RIGHT COLUMN */}

          <div className="col-lg-8 col-md-12">
            <div className="row">
              {cards.map((detail) => {
                const uid = detail.Order;
                const maskId = `mask0_115_${uid}`;
                const patternId = `pattern0_115_${uid}`;
                const imageId = `image0_115_${uid}`;

                return (
                  <div key={detail.Order} className="col-md-6">
                    <div className="feature-item">
                      <svg width="85" height="85" viewBox="0 0 70 70" fill="#3248B8">
                        <rect x="0.5" y="0.5" width="65" height="65" rx="32" fill="#3248B8" />
                        <rect x='0.5' y='0.5' width="65" height="65" rx="32" stroke="#52B7E8" />
                        <image
                          href={`http://83.147.38.201:8002/uploads/why-choose-us/${detail.IconPath}`}
                          x="14"
                          y="14"
                          width="36"
                          height="36"
                        />
                      </svg>


                      <div>
                        <h5
                          className='human'
                          style={itemHeadingStyle}
                          dangerouslySetInnerHTML={{
                            __html: detail.CardHeading,
                          }}
                        />
                   <p className="content-area">
                      {detail.CardDescription
                        ? new DOMParser()
                            .parseFromString(detail.CardDescription, "text/html")
                            .body.textContent
                        : ""}
                    </p>


                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetChooseUsData;
