import React from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { xeber } from "./page components/news";

function Newspage() {
  const { id } = useParams();
  const [data, setdata] = useState(xeber[id - 1]);
  return (
    <div className="newspage">
      <div className="sablon">
        <h1 className="title">Xəbərlər</h1>

        <p className="ana_page">
          <Link to="/">
            <span>Ana səhifə</span>{" "}
          </Link>
          <i class="fa-solid fa-angles-right"></i>
          <span>Xəbərlər</span>
        </p>
      </div>
      {data.page &&
        data.page.map((item, ind) => (
          <div key={ind} className="newspage_container">
            <h2 className="title">{item.title}</h2>
            <div className="newspage_container_item">
              <div className="left">
                <img src={item.img}></img>
                <div className="text">
                  {item.p && <p className="p">{item.p}</p>}
                  {item.about && <p className="p">{item.about}</p>}
                  {item.basliq && <p className="sertler">{item.basliq}</p>}
                  {item.sert&&item.sert.map((it,ina)=>(<li className="last" key={ina}>{it}</li>))}
                  {item.basliq2&&(<p className="sertler">{item.basliq2}</p>)}
                  {item.numune&&item.numune.map((it,ina)=>(<li className="list" key={ina}>{it}</li>))}
                  {item.p2 && <p className="p italic">{item.p2}</p>}
                  {item.p3 && <p className="p italic">{item.p3}</p>}
                </div>
              </div>
              <div className="right">
                <p>Paylaş:</p>
                <li>
                  <a target="blank" href="https://www.facebook.com/">
                  <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="http://www.linkedin.com" target="_blank">
                  <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="http://www.twitter.com" target="_blank">
                  <i class="fa-brands fa-twitter"></i>
                  </a>
                  <a href="">
                  <i class="fa-solid fa-link"></i>
                  </a>
                </li>
                <p className="time">
                  <i class="fa-solid fa-calendar-days"></i>
                  {item.time}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Newspage;
