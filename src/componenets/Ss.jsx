import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Companent from "./Companent";
// import { useHistory } from "react-router-dom";

function Ss() {
  const { id } = useParams();
  console.log(id);
  const [lab, setlab] = useState([]);
  // const history = useHistory();
  // const historysubmit = () => {
  //   window.history.back;
  // };

  async function getData() {
    await axios
      .get(`http://localhost:3300/pages/${id}`)
      .then((res) => {
        setlab(res.data);

        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{outlineStyle:"none"}} className="ss">
      <Companent></Companent>
      {
        <div key={lab.id}>
          <div className="up">
            <img className="up_img" src={lab.img} alt="pic" />
            <h3 className="up_text">{lab.name}</h3>
          </div>{" "}
          {lab.teyinet === "Teyinat" ? (
            <div className="teyinat">
              <p>Teyinat</p>
              <select name="000" id="">
                <option value="">Protokol nömrəsi</option>
                <option value="">Sürücülük vəsiqəsi</option>
              </select>
              <p>Sənəd nömrəsi</p>
              <input className="inptext" type="text" />
            </div>
          ) : lab.teyinet === "barkod" ? (
            <div className="teyinat">
              <p>Barkod</p>
              <input className="inptext" type="text" />
            </div>
          ) : lab.teyinet === "telefon" ? (
            <div className="teyinat">
              <p>Telefon nömrəsi</p>
              <input className="inptext" type="text" />
            </div>
          ) : lab.teyinet === "kommunal" ? (
            <div className="teyinat">
              <p>Teyinat</p>
              <select name="000" id="">
                <option value="">Əhali</option>
                <option value="">Qeyri-Əhali</option>
              </select>
              <p>Abunəçi kodu</p>
              <input className="inptext" type="text" />
            </div>
          ) : lab.teyinet === "inter" ? (
            <div className="teyinat">
              <p>Abunəçinin kodu</p>
              <input className="inptext" type="text" />
            </div>
          ) : lab.teyinet === "tv" ? (
            <div className="teyinat">
              <p>Telefon nömrəsi</p>
              <input className="inptext" type="text" />
            </div>
          ) : lab.teyinet === "evtel" ? (
            <div className="teyinat">
              <p>Region</p>
              <select name="000" id="">
                <option value="">Baki(12)</option>
                <option value="">Sumqayıt(18)</option>
              </select>
              <p>Telefon nömrəsi</p>
              <input className="inptext" type="text" />
            </div>
          ) : lab.teyinet === "insure" ? (
            <div className="teyinat">
              <p>Şəhadətnamə seriyası</p>
              <input className="inptext" type="text" />
              <p>Şəhadətnamə nömrəsi</p>
              <input className="inptext" type="text" />
              <p>Buraxılış ili</p>
              <input className="inptext" type="text" />
            </div>
          ) : lab.teyinet === "elm" ? (
            <div className="teyinat">
              <p>Teyinat</p>
              <select name="000" id="">
                <option value="">Fin-kodu</option>
                <option value="">Sənəd nömrəsi</option>
              </select>
              <p>Sənəd nömrəsi</p>
              <input className="inptext" type="text" />
            </div>
          ) : lab.teyinet === "help" ? (
            <div className="teyinat">
              <p>Teyinat</p>
              <select name="000" id="">
                <option value="">Fin-kodu</option>
                <option value="">VÖEN</option>
              </select>
              <p>Sənəd nömrəsi</p>
              <input className="inptext" type="text" />
            </div>
          ) : lab.teyinet === "game" ? (
            <div className="teyinat">
              <p>Abunəçinin kodu</p>
              <input className="inptext" type="text" />
            </div>
          ) : lab.teyinet === "bank" ? (
            <div className="teyinat">
              <p>Abunəçinin kodu</p>
              <input className="inptext" type="text" />
            </div>
          ) : lab.teyinet === "social" ? (
            <div className="teyinat">
              <p>E-poçt</p>
              <input className="inptext" type="text" />
            </div>
          ) : lab.teyinet === "catdirilma" ? (
            <div className="teyinat">
              <p>ID nömrəsi</p>
              <input className="inptext" type="text" />
            </div>
          ) :lab.teyinet === "kredit" ? (
            <div className="teyinat">
              <p>Teyinat</p>
              <select name="000" id="">
                <option value="">Kredit kodu</option>
                <option value="">Kredit kodu(tam ödəniş)</option>
              </select>
              <p>Sənəd nömrəsi</p>
              <input className="inptext" type="text" />
            </div>) :(
            ""
          )}
          <div className="buttonlar">
            <button onClick={()=>window.history.back()} className="prev">Geri</button>
            <button className="next">Davam et</button>
          </div>
        </div>
      }
    </div>
  );
}
export default Ss;
