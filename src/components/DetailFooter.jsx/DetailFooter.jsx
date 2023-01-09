import React, { useEffect, useState } from "react";
import DetailCard from "../DetailCard/DetailCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import fetchNewestData from "../../helpers/fetchNewestData";
import { Ping } from "@uiball/loaders";

const DetailFooter = ({ categoryID, itemID }) => {
  const [loading, setLoading] = useState(true);
  const [slideOne, setSlideOne] = useState([]);
  const [slideTwo, setSlideTwo] = useState([]);
  const [slideThree, setSlideThree] = useState([]);

  useEffect(() => {
    fetchNewestData(setSlideOne, setLoading, categoryID, 0);
    fetchNewestData(setSlideTwo, setLoading, categoryID, 4);
    fetchNewestData(setSlideThree, setLoading, categoryID, 8);
  }, [categoryID, itemID]);

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
                  slideOne.map((element) => (
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
              <div className="detail-container-cards">
                {loading ? (
                  <div className="menu-container-loader">
                    <Ping size={60} speed={2} color="white" />
                  </div>
                ) : (
                  slideTwo.map((element) => (
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
              <div className="detail-container-cards">
                {loading ? (
                  <div className="menu-container-loader">
                    <Ping size={60} speed={2} color="white" />
                  </div>
                ) : (
                  slideThree.map((element) => (
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
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DetailFooter;
