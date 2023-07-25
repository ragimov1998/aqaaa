import React, { useEffect } from "react";
import { cards } from "./page components/carddata";
import { useParams } from "react-router-dom";
import { useState } from "react";
function Cardid() {
  const { id } = useParams();
  const [isdata, setisdata] = useState(cards[id - 1]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(isdata);
  return (
    <div className="cardid">
      {isdata.page.map((item, index) => (
        <div className="reklam" key={index}>
          <div className="reklam_container">
            <div className="reklam_container_contain">
              <div className="top">
                <div className="left">
                  <h1>{item.name}</h1>
                  <p>{item.pageabout}</p>
                  <table>
                    <tr>
                      <td className="answer">{item.kesbek}</td>
                      <td className="answer">{item.partnyorsayi}</td>
                      <td className="answer">{item.catdirilmapulu}</td>
                      <td className="answer">{item.valyuta}</td>
                      <td className="answer">{item.etibarliliq}</td>
                      <td className="answer">{item.cardprice}</td>
                      <td className="answer">{item.guzestmuddeti}</td>
                    </tr>

                    <tr>
                      <td className="what">{item.bonus}</td>
                      <td className="what">{item.partnyor}</td>
                      <td className="what">{item.catdirilma}</td>
                      <td className="what">{item.valsecimi}</td>
                      <td className="what">{item.muddetinadi}</td>
                      <td className="what">{item.pricetitle}</td>
                      <td className="what">{item.guzest}</td>
                    </tr>
                  </table>
                </div>
                <div className="right">
                  <img src={item.img} alt="img" />
                </div>
              </div>

              <div className="bottom">
                <h1 className="title">Krediti onlayn dərhal əldə et!</h1>
                <input
                  className="telinp"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+994-(XX)-XXX-XX-XX"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                  required
                />
                <br />
                <input className="submit" type="submit" value="Submit"></input>
              </div>
            </div>
          </div>
        </div>
      ))}
      {isdata.cardabout && isdata.cardabout.map((item, index) => (
          <div key={index} className="text">
            <h1 className="h1">{item.melumatlar}</h1>
            <h2>{item.basliq}</h2>
            {item.libasliq &&
              item.libasliq.map((i, x) => (
                <li key={x} className="list">
                  {i}
                </li>
              ))}
            {item.cashback && <h2>{item.cashback}</h2>}
            {item.cashbackp && <p>{item.cashbackp}</p>}
            {item.cashli &&
              item.cashli.map((it, ind) => (
                <li className="list" key={ind}>
                  {it}
                </li>
              ))}
            {item.cashp && <p>{item.cashp}</p>}
            {item.edv && <h2>{item.edv}</h2>}
            {item.edvp && <p>{item.edvp}</p>}
            {item.faiz && <h2>{item.faiz}</h2>}
            {item.faizp && <p>{item.faizp}</p>}
            {item.faizli &&
              item.faizli.map((s, z) => (
                <li className="list" key={z}>
                  {s}
                </li>
              ))}
            {item.unvan && <h2>{item.unvan}</h2>}
            {item.market && <h2>{item.market}</h2>}
            {item.marketler &&
              item.marketler.map((market, sayi) => (
                <li key={sayi} className="list">
                  {market}
                </li>
              ))}
            {item.elektronik && <h2>{item.elektronik}</h2>}
            {item.magazalar &&
              item.magazalar.map((magaza, c) => (
                <li className="list" key={c}>
                  {magaza}
                </li>
              ))}
            {item.diger && <h2>{item.diger}</h2>}
            {item.optika && <h2>{item.optika}</h2>}
            {item.opli && <li className="list">{item.opli}</li>}
            {item.avto && <h2>{item.avto}</h2>}
            {item.avtoli &&
              item.avtoli.map((ll, aa) => (
                <li className="list" key={aa}>
                  {ll}
                </li>
              ))}
            {item.avtop && <p>{item.avtop}</p>}
            {item.milhesab && <h2>{item.milhesab}</h2>}
            <div className="mil">
              <div className="left">
                {item.milli &&
                  item.milli.map((millir, are) => (
                    <li className="lost list " key={are}>
                      {millir}
                    </li>
                  ))}
              </div>
              <div className="right">
                {item.millileft &&
                  item.millileft.map((mi, ar) => (
                    <li className="lost" key={ar}>
                      {mi}
                    </li>
                  ))}
              </div>
            </div>

            {item.milp && <p>{item.milp}</p>}
          </div>
      ))}
    </div>
  );
}

export default Cardid;
