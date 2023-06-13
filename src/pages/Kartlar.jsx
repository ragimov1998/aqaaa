import React, { useState } from "react";
import { cards, data } from "./page components/carddata";
import { Link } from "react-router-dom";

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

        <div className="security_item">
          <h1>
            <img
              src="https://birbank.az/_next/image?url=%2Fimages%2Fpng%2Fcards%2Fshield-check.png&w=48&q=75"
              alt=""
            />
            <p>Təhlükəsizlik qaydaları</p>
          </h1>
          <button>Ətraflı</button>
        </div>

        <div className="security_item">
          <h1>
            <img
              src="https://birbank.az/_next/image?url=%2Fimages%2Fpng%2Fcards%2Fcredit-card.png&w=48&q=75"
              alt=""
            />
            <p>Kartlar üzrə xidmətlər</p>
          </h1>
          <button>Ətraflı</button>
        </div>

        <div className="security_item">
          <h1>
            <img
              src="https://birbank.az/_next/image?url=%2Fimages%2Fpng%2Fcards%2Fclock.png&w=48&q=75"
              alt=""
            />
            <p>
            Kartın müddətinin uzadılması
            </p>
          </h1>
          <button>Ətraflı</button>
        </div>

      </div>

    </div>
  );
}

export default Kartlar;
