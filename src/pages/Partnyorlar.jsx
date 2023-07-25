import React, { useEffect, useState } from "react";
import { part } from "./page components/partnyordata";
import { Link } from "react-router-dom";

function Partnyorlar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [abc, setabc] = useState("");
  const [last, setLast] = useState(8);
  const change = (e) => {
    if (e.target.value.trim() !== "") {
      setabc(e.target.value);
    } else {
      setabc("");
    }
  };
  const filtervalue = part.filter((data) => {return data.title.toLocaleLowerCase().includes(abc.toLocaleLowerCase());
  });

  const [taksit, setTaksit] = useState("");
  // const taksits = ["2", "3", "6", "12", "18"];
  // const [showTaksitOption, setShowTaksitOption] = useState(false);

  return (
    <div className="partnyorlar">
      <div className="sablon">
        <h1 className="title">Partnyorlar</h1>

        <p className="ana_page">
          <Link to="/">
            <span>Ana səhifə</span>{" "}
          </Link>
          <i class="fa-solid fa-angles-right"></i>
          <span>Partnyorlar</span>
        </p>
        <div className="filter">
          <input placeholder="Axtar" onChange={change} type="seach" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="partnyorlar_container">
        {/* <div

          onClick={() => {setShowTaksitOption(!showTaksitOption);}}
        >
          <button>Taksit</button>
          {showTaksitOption && (
            <div className="taxit">
              {taksits.map((x) => (
                <button key={x} onClick={() => setTaksit(x)}>
                  {x}
                </button>
              ))}
            </div>
          )}
        </div> */}

        <div className="items">
          {filtervalue
            .filter((item) => item.faiz.includes(taksit))
            .slice(0, last)
            .map((item, index) => (
              <Link to={item.id}>
                <a href="">
                  <div key={index} className="item">
                    <div className="foto">
                      <img src={item.img} alt="img" />
                    </div>
                    <div className="text">
                      <h1>{item.title}</h1>
                      <p>
                        <i className="fa-solid fa-percent"></i>
                        {item.faiz}
                      </p>
                      {item.kesbek && (
                        <p>
                          <i class="fa-solid fa-reply"></i>
                          {item.kesbek}
                        </p>
                      )}

                      {item.mil && (
                        <p>
                          <i class="fa-solid fa-plane"></i>
                          {item.mil}
                        </p>
                      )}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
        </div>
        <button className="dahacox" onClick={() => setLast(last + 8)}>Daha cox</button>
      </div>
    </div>
  );
}

export default Partnyorlar;
