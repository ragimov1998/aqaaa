import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Companent({id}) {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  const [ode, setode] = useState([]);
  async function aaa() {
    await axios.get(`http://localhost:3300/odenisler/`).then((res) => {
      setode(res.data);
    });
  }
  useEffect(() => {
    aaa();
  }, []);
  return (
    <div className="companent">
      {ode.map((i, x) => (
        <NavLink  to={`/ödənişlər/${i.id}`}
          key={x}
          className="container"
        >
          <div className="icon">
            <i className={i.icon}></i>
          </div>
          <p>{i.title}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default Companent;
