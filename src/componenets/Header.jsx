import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DarkLight from "../pages/DarkMod";

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
  const removeItem = () => {
    localStorage.removeItem('user');
    window.location.reload()
    };
  const [active, setactive] = useState();
  const [distance, setDistance] = useState(0);
  const [user, setUser] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setDistance(window.scrollY);
    });
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleClick = () => {
    window.location.href = "/";
  };
  const navigate=useNavigate()

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        left: "0",
        background: "white",
        zIndex: "99999",
        boxShadow: `${distance > 0 ? "0 2px 10px 0 rgba(0,0,0,.15)" : ""}`,
      }}
      className="header-contain"
    >
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
          {/* <Link to='/login'> */}

          {user ? (
            <button onClick={() => removeItem()} className="sign">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
              {user[0].ad}
            </button>
          ) : (
            <button onClick={() => navigate('/login')} className="sign">
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
              Giris
            </button>
          )}
          {/* </Link> */}
        </div>
        <DarkLight></DarkLight>

      </div>

    </div>
  );
}

export default Header;
