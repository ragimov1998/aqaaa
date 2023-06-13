import React from "react";
import { Link } from "react-router-dom";

function Homecenter() {
  return (
    <div className="service">
      <div className="service_container">
        <div className="service_container_item">
          <div className="service_container_item_picture">
            <img src="https://birbank.az/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fcontent.birbank.az%2FBirbank_odneishleri_2_1747602b89.png&w=384&q=75" />
          </div>
          <div className="service_container_item_text">
            <h3 className="item_title"> Ödənişlər</h3>
            <p className="item_title_about">
              Bütün növ ödənişlər Birbank-la daha rahat
            </p>
            <Link to="ödənişlər">
            <button className="btn">Ödəniş et</button>
            </Link>
          </div>
        </div>

        <div className="service_container_item">
          <div className="service_container_item_picture">
            <img src="https://birbank.az/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fcontent.birbank.az%2FBir_Kart_partnyorlar_2_636042cc43.png&w=384&q=75" />
          </div>
          <div className="service_container_item_text">
            <h3 className="item_title">Partnyorlar</h3>
            <p className="item_title_about">
              Çoxsaylı Birbank partnyor şəbəkəsindən yararlan
            </p>
            <Link to="/partnyorlar">
            <button className="btn">Bütün partnyorlar</button>
            </Link>
          </div>
        </div>
        
        <div className="service_container_item">
          <div className="service_container_item_picture">
            <img src="https://birbank.az/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fcontent.birbank.az%2FKampaniyalar_2_57bb9a41b9.png&w=384&q=75" />
          </div>
          <div className="service_container_item_text">
            <h3 className="item_title">Kampaniyalar</h3>
            <p className="item_title_about">
              Birbankın aktiv kampaniyalarından yararlanmağa tələs
            </p>
            <Link to="/kampaniyalar">
            <button className="btn">Daha ətraflı</button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homecenter;
