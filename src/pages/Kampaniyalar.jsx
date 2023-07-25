import React from "react";
import { Link } from "react-router-dom";
import { komp } from "./page components/kampanyadata";
import { useState } from "react";
import { useEffect } from "react";

function Kampaniyalar() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const [dt, setdt] = useState(komp);
  const currentDate = new Date();
  const day =
    currentDate.getDate().toString() +
    "." +
    (currentDate.getMonth() + 1) +
    "." +
    currentDate.getFullYear();
  console.log(`${day}`);
  const time = currentDate.getFullYear().toString();

  // console.log(currentDate);
  return (
    <div className="kampaniya">
      <div className="sablon">
        <h1 className="title">Kampaniyalar</h1>

        <p className="ana_page">
          <Link to="/">
            <span>Ana səhifə</span>{" "}
          </Link>
          <i className="fa-solid fa-angles-right"></i>
          <span>Kampaniyalar</span>
        </p>
      </div>
      <div className="container">
        {dt.map((it, ind) => (
          <Link to={it.id}>
           <div key={ind} className="container_contain">
            <div className="img">
              <img src={it.img} alt="ki" />
            </div>
            <h4>{it.title&&it.title}</h4>
            {/* <h5>{`${day}`}</h5> */}
            <h5>{it.vaxt&&it.vaxt}</h5>
          </div>
          </Link>
         
        ))}
      </div>

      {/* <h5>{currentDate.toString()}</h5> */}
    </div>
  );
}

export default Kampaniyalar;
