import React, { useEffect, useState } from "react";
import { komp } from "./page components/kampanyadata";
import { useParams } from "react-router-dom";

function Komp() {
  const { id } = useParams();
  const [datas, setdata] = useState(komp[id - 1]);
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  return (
    <div className="kompaniyanin_xalasiqizi">
      {datas.page.map((itt) => (
        <div className="container">
          <div className="left">
            <img src={itt.img} />
          </div>
          <div className="right">
            {itt.h3 && <h4>{itt.h3.toUpperCase()}</h4>}
            {itt.about && <p>{itt.about}</p>}
            {itt.basliq && <h4>{itt.basliq}</h4>}
            <div>
              {itt.sert &&itt.sert.map((a, b) => (<li className="last" key={b}>{a}</li>))}
              {itt.basliq2 && <h4 className="title">{itt.basliq2}</h4>}
              {itt.numune &&itt.numune.map((s, z) => (<li className="numune" key={z}>{s}</li>))}

              {itt.magazin &&itt.magazin.map((bal, petek) => (
                    <ul key={petek} className="obur">
                    {bal.magaza && (<li><h4></h4>{bal.magaza}</li>)}
                    {bal.tel && (<li><i className="fa-solid fa-phone"></i>{bal.tel}</li>)}
                    {bal.sayt && (<li><i className="fa-solid fa-globe"></i>{bal.sayt}</li>)}
                    {bal.location && (<li><i className="fa-solid fa-location-dot"></i>{bal.location}</li>)}
                    </ul>
                ))}
              {itt.tel &&itt.tel.map((tel, say) => (<li key={say}><i className="fa-solid fa-phone"></i>{tel}</li>))}
            </div>
            {itt.about2 && <p>{itt.about2}</p>}
            {itt.about3 && <p>{itt.about3}</p>}
            {itt.time && (<p><i className="fa-solid fa-clock"></i>{itt.time}</p>)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Komp;
