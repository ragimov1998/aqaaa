import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

function Slide() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <section className="slider">
          <div className="contain">
            <div className="left">
              <h1>Bank xidmətlərindən</h1>
              <p>Birbank-la yararlan</p>
              <button className="daxilol">
                <i class="fa-solid fa-circle-check"></i>Daxil ol
              </button>
            </div>

            <div className="right">
              <img
                src="https://birbank.az/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fcontent.birbank.az%2Fdd322e87_edfa_4703_b650_64ccd9836b6d_83e6a2e3f6.jpeg&w=640&q=75"
                alt=""
              />
            </div>

            <button className="btn btn-next">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
            <button className="btn btn-prev">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className="slider">
          <div className="contain">
            <div className="left">
              <h1>Bank xidmətlərindən</h1>
              <p>Birbank-la yararlan</p>
              <button className="daxilol">
                <i class="fa-solid fa-circle-check"></i>Daxil ol
              </button>
            </div>

            <div className="right">
              <img
                src="https://birbank.az/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fcontent.birbank.az%2Fdd322e87_edfa_4703_b650_64ccd9836b6d_83e6a2e3f6.jpeg&w=640&q=75"
                alt=""
              />
            </div>

            <button className="btn btn-next">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
            <button className="btn btn-prev">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className="slider">
          <div className="contain">
            <div className="left">
              <h1>Bank xidmətlərindən</h1>
              <p>Birbank-la yararlan</p>
              <button className="daxilol">
                <i class="fa-solid fa-circle-check"></i>Daxil ol
              </button>
            </div>

            <div className="right">
              <img
                src="https://birbank.az/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fcontent.birbank.az%2Fdd322e87_edfa_4703_b650_64ccd9836b6d_83e6a2e3f6.jpeg&w=640&q=75"
                alt=""
              />
            </div>

            <button className="btn btn-next">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
            <button className="btn btn-prev">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        </section>
      </SwiperSlide>
      
    </Swiper>
  );
}

export default Slide;
