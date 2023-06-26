import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import Homecenter from "./page components/Homecenter";
import { widget } from "./page components/productwidget";
import { Link } from "react-router-dom";
import { valyuta } from "./page components/securi";
function Home() {
  const [ayliqOdenis, setAyliqOdenis] = useState(0);
  const [alinacaq, setalinacaq] = useState(10000);
  const [faiz, setfaiz] = useState(15);
  const [muddet, setmuddet] = useState(12);

  const handleInputChange = (e) => {
    const value = +e.target.value;
    setalinacaq(value);
    const eded=((value + ((value * (faiz * 0.554)) / 100 / 12) * muddet) / muddet);
    const tamhisse =Math.trunc((value + ((value * (faiz * 0.554)) / 100 / 12) * muddet) / muddet);
    const qaliq= Math.trunc((eded-tamhisse)*100)/100;
    const ayliqOdenis=tamhisse+qaliq;
    setAyliqOdenis(ayliqOdenis);
  };
  const handlefaizChange = (e) => {
    const value = +e.target.value;
    setfaiz(value);
    const eded=((alinacaq + ((alinacaq * (value * 0.554)) / 100 / 12) * muddet) / muddet);
    const tamhisse =Math.trunc((alinacaq + ((alinacaq * (value * 0.554)) / 100 / 12) * muddet) / muddet);
    const qaliq= Math.trunc((eded-tamhisse)*100)/100;
    const ayliqOdenis=tamhisse+qaliq;

    setAyliqOdenis(ayliqOdenis);
  };
  const handlemuddet = (e) => {
    const value = +e.target.value;
    setmuddet(value);
    const eded=((alinacaq + ((alinacaq * (faiz * 0.554)) / 100 / 12) * value) / value);
    const tamhisse =Math.trunc((alinacaq + ((alinacaq * (faiz * 0.554)) / 100 / 12) * value) / value);
    const qaliq= Math.trunc((eded-tamhisse)*100)/100;
    const ayliqOdenis=tamhisse+qaliq;

    setAyliqOdenis(ayliqOdenis);
  };

  return (
    <div className="home">
      <div className="carusel">
        <Slide></Slide>
      </div>

      <div className="product">
        {widget.map((item) => (
          <div className="product_container">
            <div className="product_container_item">
              <div className="item_foto">
                <img src={item.img} alt="product1" />
              </div>
              <div className="text">
                <h1 className="title">{item.title}</h1>
                <p className="about">{item.about}</p>
                <Link to="/kreditler">
                  <button className="btn">{item.btn}</button>
                </Link>
              </div>
            </div>

            <div className="product_container_item">
              <div className="item_foto">
                <img src={item.img2} alt="product2" />
              </div>
              <div className="text">
                <h1 className="title">{item.title2}</h1>
                <p className="about">{item.about2}</p>
                <Link to="/kartlar">
                  <button className="btn">{item.btn}</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="loan_calculator">
        <div className="loan_calculator_container">
          <div className="left">
            <div className="input_container">
              <div className="inputs">
                <div className="text">
                  <p>Mebleg</p>
                  <h3 className="mebleg">{alinacaq}</h3>
                </div>

                <div>
                  <input
                    onChange={handleInputChange}
                    type="range"
                    max="30000"
                    min="0"
                    value={alinacaq}
                    class="inp"
                    step="100"
                  />
                </div>
              </div>
              <div className="inputs">
                <div className="text">
                  <p>Faiz</p>
                  <h3 className="mebleg">{faiz}</h3>
                </div>

                <div>
                  <input
                    onChange={handlefaizChange}
                    type="range"
                    max="20"
                    min="12"
                    value={faiz}
                    class="inp"
                    step="0.5"
                  />
                </div>
              </div>
              <div className="inputs">
                <div className="text">
                  <p>Muddet(ay)</p>
                  <h3 className="mebleg">{muddet}</h3>
                </div>

                <div>
                  <input
                    onChange={handlemuddet}
                    type="range"
                    max="59"
                    min="3"
                    value={muddet}
                    class="inp"
                    step="1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <p>Aylıq ödəniş</p>
            <h1>{ayliqOdenis}AZN</h1>
          </div>
        </div>
      </div>

      <div className="homecenter">
        <Homecenter></Homecenter>{" "}
      </div>

      <div className="exchange">
        <div className="left">
          <h1>iOS, Android və Huawei üçün mobil tətbiqlər</h1>
          <p>Bütün mövcud bank əməliyyatları sizin smartfonunuzda</p>
          <div className="social">
            <a href="https://apps.apple.com/us/app/birbank/id1293207342">
              <button className="apps-item">
                <i class="fa-brands fa-app-store-ios"></i>
              </button>
            </a>

            <a href="https://play.google.com/store/apps/details?id=az.kapitalbank.mbanking">
              <button className="apps-item">
                <i class="fa-brands fa-google-play"></i>
              </button>
            </a>

            <a href="https://appgallery.huawei.com/#/app/C102156391">
              <button className="apps-item">
                <i class="fa-solid fa-mobile"></i>
              </button>
            </a>

            <img src="https://birbank.az/images/svg/mobile/mobile.svg" alt="" />
          </div>
        </div>

        <div className="right">
          <h1>Valyuta mübadiləsi</h1>

          <div className="exchange_container">
            <div className="title">
              <span className="val">Valyuta</span>
              <span className="alis">Alış</span>
              <span className="satis">Satış</span>
            </div>

            {valyuta.map((a, b) => (
              <div key={b} className="exchange_container_item">
                <div className="country">
                  <img src={a.img} alt="" />
                  <span>{a.olke}</span>
                </div>

                <div className="same">
                  <span>{a.alis}</span>
                </div>

                <div className="same">
                  <span>{a.satis}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
