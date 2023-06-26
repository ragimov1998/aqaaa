import React from "react";
import { Link } from "react-router-dom";
import { kocurme } from "./page components/securi";
function Kocurmeler() {
  return (
    <div className="kocurmeler">
      <div className="sablon">
          <h1 className="title">Köçürmələr</h1>

          <p className="ana_page">
          <Link to="/"><span>Ana səhifə</span> </Link>
             <i className="fa-solid fa-angles-right"></i>
            <span>Köçürmələr</span>
          </p>
      </div>
      
      <div className="contain">
        
      <ul className="bottom">
        {kocurme.map((item,ind)=>(<li key={ind}>
            <img src={item.img} alt="img" />
           <span> {item.span}
          <i className={item.icon}></i>
           </span>
        </li>
        ))}

      </ul>
      </div>
     
    </div>
  );
}

export default Kocurmeler;
