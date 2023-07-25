import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { kocurme } from "./page components/securi";
function Kocurmeler() {
  useEffect(()=>{
    window.scrollTo(0,0)
},[])
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
        <Link to='/tetbiqiyukle'>
        <ul style={{color:"black"}} className="bottom">
        {kocurme.map((item,ind)=>(<li key={ind}>
            <img src={item.img} alt="img" />
           <span> {item.span}
          <i className={item.icon}></i>
           </span>
        </li>
        ))}

      </ul>
        </Link>
      
      </div>
     
    </div>
  );
}

export default Kocurmeler;
