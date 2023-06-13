import React, { useState } from "react";
import { part } from "./page components/partnyordata";
import { Link } from "react-router-dom";

function Partnyorlar() {
  const [datalar,setdatalar]=useState(part);
  // const deyisen=setdatalar(data)

  return (
    <div className="partnyorlar">
      <div className="partnyorlar_container">
        <div className="header">
          <h1>Partnyorlar</h1>
        </div>

        <div className="filter">
          <input type="seach" />
        </div>

        <div className="items">
          {datalar.map((item, index) => (
            <Link
            to={item.id}
            >
              <a href="">
              <div key={index} className="item">
              <div className="foto">
              <img src={item.img} alt="img" />
              </div>
              <div className="text">
              <h1>{item.title}</h1>
              <p>{item.faiz}</p>
              <p>{item.kesbek}</p>
              <p>{item.mil}</p>
              </div>
              
            </div>
              </a> 
            
            </Link>
           
          ))}
        </div>

      </div>
    </div>
  );
}

export default Partnyorlar;
