import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Odenisler() {
  const [datalar, setdata] = useState([]);

  const parameters = useParams()
  const {id} = parameters
  console.log(id);

  async function getData(){

    await axios.get('http://localhost:3300/odenisler')
    .then((res)=>{setdata(res.data)})
    .catch((err)=>{console.log(err)})
  }

  useEffect(()=>{

    getData()

  },[])
  return (
    <div className="odenisler">
      <h1 className="title">Ödəniş</h1>
      <div className="icon_container">
        {datalar.map((item, index) => (
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
