import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const headlist = [
    "kartlar",
    "kreditler",
    "ödənişlər",
    "köçürmələr",
    "partnyorlar",
    "kampaniyalar",
    "xəbərlər",
  ];

  const [active, setactive] = useState();

  
  // const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    // setIsActive(false);

    window.location.href = "/";
  };

  return (
    <div className="header-contain">
      <div className="poster">
        <Link to="">
          <img
            onClick={handleClick}
            src="https://birbank.az/images/svg/logo/logo-birbank.svg"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header-component">
        <div className="left">
          {headlist.map((item, index) => (
            <li
              className={`${active === item ? "active" : "list"}`}
              key={index}
              onClick={() => setactive(item)}
            >
              <Link to={item}>
                {" "}
                <a>{item}</a>{" "}
              </Link>
            </li>
          ))}
        </div>

        <div className="right">
          <button className="sign">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            Giriş
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
