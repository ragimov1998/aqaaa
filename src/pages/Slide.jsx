import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { data } from "./page components/slide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function Slide() {
  return (
    <>
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
            {data.map((item, id) => (
              <div key={id} className="contain">
                <div className="left">
                  <h1>{item.title}</h1>
                  <p>{item.about}</p>
                  <Link to="/login">
                    <button className="daxilol">
                      <i className={item.icon}></i>
                      {item.btn}
                    </button>
                  </Link>
                </div>

                <div className="right">
                  <img src={item.img} alt="img" />
                </div>
              </div>
            ))}
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="slider">
            {data.map((item, id) => (
              <div key={id} className="contain">
                <div className="left">
                  <h1>{item.title}</h1>
                  <p>{item.about}</p>
                  <Link to="/login">
                    <button className="daxilol">
                      <i className={item.icon}></i>
                      {item.btn}
                    </button>
                  </Link>
                </div>

                <div className="right">
                  <img src={item.img} alt="img" />
                </div>
              </div>
            ))}
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="slider">
            {data.map((item, id) => (
              <div key={id} className="contain">
                <div className="left">
                  <h1>{item.title}</h1>
                  <p>{item.about}</p>
                  <Link to="/login">
                    <button className="daxilol">
                      <i className={item.icon}></i>
                      {item.btn}
                    </button>
                  </Link>
                </div>

                <div className="right">
                  <img src={item.img} alt="img" />
                </div>
              </div>
            ))}
          </section>
        </SwiperSlide>

        <SwiperSlide>
          <section className="slider">
            {data.map((item, id) => (
              <div key={id} className="contain">
                <div className="left">
                  <h1>{item.title}</h1>
                  <p>{item.about}</p>
                  <Link to="/login">
                    <button className="daxilol">
                      <i className={item.icon}></i>
                      {item.btn}
                    </button>
                  </Link>
                </div>

                <div className="right">
                  <img src={item.img} alt="img" />
                </div>
              </div>
            ))}
          </section>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
