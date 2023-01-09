import React, { useEffect, useState } from "react";
import DetailCard from "../DetailCard/DetailCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import fetchNewestData from "../../helpers/fetchNewestData";
import { Ping } from "@uiball/loaders";

const DetailFooter = ({ categoryID, itemID }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNewestData(setData, setLoading, categoryID, itemID);
  }, [categoryID, itemID]);

  /* const slideOne = sliderData.splice(0, 4)
  const slideTwo = sliderData.splice(4, 8)
  const slideThree = sliderData.splice(8, 12)

  console.log(slideOne);
  console.log(slideTwo);
  console.log(slideThree); */

  return (
    <div className="detail-container-footer">
      <div className="detail-container-body">
        <div className="detail-container-body-text">
          <h2 className="font-family-marvel-principal">
            Know about other {categoryID}
          </h2>
        </div>
        {/* carrousel */}
        <div className="detail-container-carrousel">
          <Swiper navigation={true} modules={[Navigation]}>
            <SwiperSlide className="detail-container-carrousel-slide font-family-marvel-principal">
              <div className="detail-container-cards">
                {loading ? (
                  <div className="menu-container-loader">
                    <Ping size={60} speed={2} color="white" />
                  </div>
                ) : (
                  data.results
                    .splice(0, 4)
                    .map((element) => (
                      <DetailCard
                        categoryID={categoryID}
                        elementData={element}
                        key={element.id}
                        heroImage={`${element.thumbnail.path}.${element.thumbnail.extension}`}
                        heroName={
                          categoryID === "characters"
                            ? element.name
                            : element.title
                        }
                      />
                    ))
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide className="detail-container-carrousel-slide font-family-marvel-principal">
              Slide 2
            </SwiperSlide>
            <SwiperSlide className="detail-container-carrousel-slide font-family-marvel-principal">
              Slide 3
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DetailFooter;
