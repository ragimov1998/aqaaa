import React, { useState } from "react";
import { cards, data } from "./page components/carddata";
import { Link } from "react-router-dom";
import { security } from "./page components/securi";

function Kartlar() {
  const [isactive, setactive] = useState("Hamisi");
  const [currentdata, setcurrentdata] = useState(data[0]);
  const Taksitcard = () => {

    setcurrentdata(data.filter((item)=>item.typeof==="taksit"));
  };
  const Debetcard = () => {
    setcurrentdata(data.filter((item)=>item.typeof==="debet"));

  };
  const [cardtype,setcardtype]= useState(cards);

  // const buttons =["Hamisi","Taksit","Debet"]
  return (
    <div className="cards">
      <div className="sablon">
          <h1 className="title">Kartlar</h1>

          <p className="ana_page">
          <Link to="/"><span>Ana səhifə</span> </Link>
             <i class="fa-solid fa-angles-right"></i>
            <span>Kartlar</span>
          </p>
      </div>
      <div className="reklam">
        <div className="reklam_cards">
          <div className="reklam_cards_type">
            <div className="top">
              <div className="left">
                <h2 className="title">{currentdata.title}</h2>
                <p>{currentdata.about}</p>
                <table>
                  <tr>
                    <td className="answer">
                      <h1>{currentdata.kesbek}</h1>
                    </td>
                    <td className="answer">
                      <h1>{currentdata.partnyornagdtitle}</h1>
                    </td>
                  </tr>

                  <tr>
                    <td className="what">
                      <p>{currentdata.faiz}</p>
                    </td>
                    <td className="what">
                      <p>{currentdata.partnyorsayinagd}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="answer">
                      <h1>{currentdata.cartpricetitle}</h1>
                    </td>
                    <td className="answer">
                      <h1>{currentdata.cardnovgelirtitle}</h1>
                    </td>
                  </tr>
                  <tr>
                    <td className="what">{currentdata.cartprice}</td>
                    <td className="what">{currentdata.qazanc}</td>
                  </tr>
                </table>
                <button className="btn">{currentdata.btn}</button>
              </div>
              <div className="right">
                <img src={currentdata.img} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">

        <button onClick={()=>{setcardtype(cards)}} className={`${isactive==="Hamisi" ? "active" : ""}`}>
          Hamısı
        </button>

        <button
          onClick={()=>{setcardtype(cards.filter((item)=>item.typeof=="taksit"))}}
          className={`${isactive==="active" ? "actives" : ""}`}
        >
          Taksit
        </button>

        <button
          onClick={()=>{setcardtype(cards.filter((item)=>item.typeof=="debet"))}}
          className={`${isactive ? "active" : ""}`}
        >
          Debet
        </button>
      </div>
      <div className="cards_container">
        {cardtype.map((item,index)=>(
          <Link to={item.id}>
          <div key={index} className="cards_container_item">
          <img src={item.img} alt="img" />
          <div className="text">
            <h2>{item.name}</h2>
            <p>{item.about.slice(0, 84)}...</p>
            <button>{item.btn}</button>
          </div>
        </div>
          </Link>
           
        ))}
      
      </div>

      <div className="security">


        {security.slice(0,2).map((it,ind)=>(
          <div key={ind} className="security_item">
          <h1>
            <img
              src={it.img}
              alt="img"
            />
            <p>{it.title}</p>
          </h1>
          <Link to={"/security/"+it.id}>
          <button>{it.btn}</button>
          </Link>
        </div>
        ))}
         <div className="security_item">
          <h1>
            <img
              src={security[2].img}
              alt="img"
            />
            <p>{security[2].title}</p>
          </h1>
          <a href="https://www.kapitalbank.az/online-order/card-renew">
          <button>{security[2].btn}</button>
          </a>
        </div>

      </div>

    </div>
  );
}

export default Kartlar;
