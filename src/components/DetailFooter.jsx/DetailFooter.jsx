import React from "react";
import DetailCard from "../DetailCard/DetailCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const DetailFooter = () => {
  return (
    <div className="detail-container-footer">
      <div className="detail-container-body">
        <div className="detail-container-body-text">
          <h2 className="font-family-marvel-principal">
            Know about other characters
          </h2>
        </div>
        {/* carrousel */}
        <div className="detail-container-carrousel">
          <Swiper navigation={true} modules={[Navigation]}>
            <SwiperSlide className="detail-container-carrousel-slide font-family-marvel-principal">
              <div className="detail-container-cards">
                <DetailCard
                  heroImage={
                    "https://static01.nyt.com/images/2022/10/31/business/00Superheroes-print/00Superheroes-black-adam-mediumSquareAt3X.jpg"
                  }
                  heroName={"Spiderman"}
                />
                <DetailCard
                  heroImage={
                    "https://static01.nyt.com/images/2022/10/31/business/00Superheroes-print/00Superheroes-black-adam-mediumSquareAt3X.jpg"
                  }
                  heroName={"Spiderman"}
                />
                <DetailCard
                  heroImage={
                    "https://static01.nyt.com/images/2022/10/31/business/00Superheroes-print/00Superheroes-black-adam-mediumSquareAt3X.jpg"
                  }
                  heroName={"Spiderman"}
                />
                <DetailCard
                  heroImage={
                    "https://static01.nyt.com/images/2022/10/31/business/00Superheroes-print/00Superheroes-black-adam-mediumSquareAt3X.jpg"
                  }
                  heroName={"Spiderman"}
                />
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
