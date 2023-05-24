import React from "react";
import { Link } from "react-router-dom";

function Kocurmeler() {
  return (
    <div className="kocurmeler">
      <div className="contain">
          <h1 className="title">Köçürmələr</h1>

          <p>
          <Link to="/">Ana səhifə</Link>

             <i class="fa-solid fa-angles-right"></i>
            <span>Köçürmələr</span>
          </p>

      <ul className="bottom">
        <li>
            <img src="https://birbank.az/_next/image?url=%2Fimages%2Fpng%2Ftransfer%2Fbetween_cards.png&w=48&q=75" alt="" />
           <span> Öz kartlarım və hesablarım arasında
          <i class="fa-solid fa-chevron-right"></i>
           </span>
            
        </li>

        <li>
          <img src="https://birbank.az/_next/image?url=%2Fimages%2Fpng%2Ftransfer%2Fcard_to_card.png&w=48&q=75" alt="ist" />
          <span>
            İstenilƏn bank kartına
            <i class="fa-solid fa-chevron-right"></i>
          </span>

        </li>

        <li>
          <img src="https://birbank.az/_next/image?url=%2Fimages%2Fpng%2Ftransfer%2Ftransfer_friend.png&w=48&q=75" alt="user" />
          <span>
            Nömrəyə köçürmə
            <i class="fa-solid fa-chevron-right"></i>

          </span>

        </li>

        <li>
          <img src="https://birbank.az/_next/image?url=%2Fimages%2Fpng%2Ftransfer%2Frequest_friend.png&w=48&q=75" alt="" />
          <span>
            Dostdan pul sorğusu
            <i class="fa-solid fa-chevron-right"></i>

          </span>

        </li>

        <li>
          <img src="https://birbank.az/_next/image?url=%2Fimages%2Fpng%2Ftransfer%2Fcash_code.png&w=48&q=75"/>
          <span>
            Cash by code
          <i class="fa-solid fa-chevron-right"></i>

          </span>

        </li>

      </ul>
      </div>
     
    </div>
  );
}

export default Kocurmeler;
