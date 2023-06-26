import React, { useEffect } from "react";
import { odenisler } from "./page components/productwidget";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Odenisler() {
  const [data, setdata] = useState([]);


  async function getData(){

    await axios.get('http://localhost:3300/odenisler').then((res)=>{
     setdata(res.data)

    }).catch((err)=>{
      console.log(err)

    })
  }

  useEffect(()=>{

    getData()

  },[])
  return (
    <div className="odenisler">
      <h1 className="title">Ödəniş</h1>
      <div className="icon_container">
        {data.map((item, index) => (
          <Link key={index}  to={item.id}>
            <div className="icons">
              <button>
                <i className={item.icon}></i>
                <p className="name">{item.title}</p>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Odenisler;
