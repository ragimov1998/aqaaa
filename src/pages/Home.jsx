import React from "react";
import Slide from "./Slide";
import Homecenter from "./page components/Homecenter";
import {widget} from "./page components/productwidget"
function Home() {
  return (
    <>
      <div className="carusel">
        <Slide></Slide>
      </div>

        <div className="product">
        {widget.map((item)=>(<div className="product_container">

          <div className="product_container_item">
            <div className="item_foto">
            <img src={item.img} alt="product1"/>
            </div>
            <div className="text">
               <h1 className="title">{item.title}</h1>
            <p className="about">{item.about}</p>
            <button className="btn">{item.btn}</button>
            </div>
           
            </div>

            <div className="product_container_item">
            <div className="item_foto">
            <img src={item.img2} alt="product2"/>
            </div>
            <div className="text">
              <h1 className="title">{item.title2}</h1>
            <p className="about">{item.about2}</p>
            <button className="btn">{item.btn}</button>
            </div>
            
            </div>

          </div>
         
        ))}
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

          <table>
            <tr>
              <td>Valyuta</td>
              <td>Alış</td>
              <td>Satış</td>
            </tr>

            <tr className="exchange-row">
              <td className="country">
                <img
                  src="https://birbank.az/images/svg/flags/usd.svg"
                  alt="flag"
                />
                <span>USD</span>
              </td>

              <td>1.6970</td>

              <td>1.7020</td>
            </tr>

            <tr className="exchange-row">
              <td className="country">
                <img
                  src="https://birbank.az/images/svg/flags/eur.svg"
                  alt="flag"
                />
                <span>EUR</span>
              </td>

              <td>1.8474</td>

              <td>1.8929</td>
            </tr>

            <tr className="exchange-row">
              <td className="country">
                <img
                  src="https://birbank.az/images/svg/flags/rub.svg"
                  alt="flag"
                />
                <span>RUB</span>
              </td>

              <td>0.0203</td>

              <td>0.0239</td>
            </tr>

            <tr className="exchange-row">
              <td className="country">
                <img
                  src="https://birbank.az/images/svg/flags/tr.svg"
                  alt="flag"
                />
                <span>TRL</span>
              </td>

              <td>0.0688</td>

              <td>0.0988</td>
            </tr>
          </table>
        </div>
      </div>

    
    </>
  );
}

export default Home;
