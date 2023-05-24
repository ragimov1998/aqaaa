import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const links = [
    "kartlar",
    "ödənişlər",
    "partnyorlar",
    "kampaniyalar",
    "müraciətlər",
  ];
  const news = ["xəbərlər", "tariflər", "FAQ"];
  return (
    <div className="footer-contain">
      <div className="left">
        <ul>
          <li className="icons">
            <i class="fa-solid fa-phone">
              <span className="qaynar-xett">196</span>
            </i>

            <a href="https://www.facebook.com/birbank">
              <i class="fa-brands  fa-facebook"></i>
            </a>

            <a href="https://www.instagram.com/birbank.az/">
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.youtube.com/channel/UC1p5TDF6qfzUm4sPqSYSGUA">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>
        <ul className="links">
          {links.map((item, index) => (
            <li className="list" key={index}>
              <Link to={item}>
                {" "}
                <a href="">{item}</a>{" "}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="news">
          {news.map((item, index) => (
            <li className="list" key={index}>
              <Link to={item}>
                {" "}
                <a href="">{item}</a>{" "}
              </Link>
            </li>
          ))}
        </ul>

        <p className="rule">
          © 2023 «Kapital Bank» ASC. Bütün hüquqlar Rəhimov Rəhim tərəfindən
          qorunur. İçiniz rahat olsun.
        </p>
      </div>
      <div className="right">

          <a href="https://apps.apple.com/us/app/birbank/id1293207342">
        <button className="apps-item">
        <i class="fa-brands fa-app-store-ios"></i>
        <p>
        App Store
        <pre></pre>
        <span>mobil tətbiqi yüklə</span>
        </p>
        </button>
          </a>

          <a href="https://play.google.com/store/apps/details?id=az.kapitalbank.mbanking">
        <button className="apps-item">
        <i class="fa-brands fa-google-play"></i>
        <p>
        Google Play
        <pre></pre>
        <span>mobil tətbiqi yüklə</span>
        </p>
        </button>
          </a>

          <a href="https://appgallery.huawei.com/#/app/C102156391">
        <button className="apps-item">
        <i class="fa-solid fa-mobile"></i>
        <p>
        AppGallery
        <pre></pre>
        <span>ilə kəşf edin</span>
        </p>
        </button>
          </a>

      </div>
    </div>
  );
}

export default Footer;
