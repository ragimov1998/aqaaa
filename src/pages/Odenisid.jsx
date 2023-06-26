import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { odenisler } from "./page components/productwidget";

function Odenisid() {
  const { id } = useParams();
  console.log(id);
  const [lab, setlab] = useState([]);
  const [ode, setode] = useState(odenisler);

  async function getData() {
    await axios
      .get(`http://localhost:3300/odenisler/${id}`)
      .then((res) => {
        setlab(res.data);

        console.log(res.data, "salam");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="odenis_info">
      <div className="left">
        {ode.map((i, x) => (
            <div key={x} className="container">
              <div className="icon">
              <i className={i.icon}></i>
              </div>
                <p>
                {i.title}
              </p>
            </div>
        ))}
      </div>
      {lab.page &&
        lab.page.map((item, ind) => (
          <Link key={ind} to={`/information/${item.id}`}>
            <div className="right">
              <div className="odenis_info_item">
              <img src={item.img} alt="foto" />
              <p>{item.name}</p>
            </div>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default Odenisid;
