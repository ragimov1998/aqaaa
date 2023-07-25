import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Companent from "../componenets/Companent";

function Odenisid() {
  const { id } = useParams();
  const [lab, setlab] = useState([]);
  const [ode, setode] = useState([]);
  const [bos,setbos]=useState();





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
  async function odedata( ){
    await axios
    .get(`http://localhost:3300/odenisler/`)
    .then((res)=>{setode(res.data);
    })
  }

  useEffect(() => {
    getData();
    odedata()
    bbb()
  }, [id]);
  function bbb (ite){
    setbos(ite)
    bos&&setlab(bos)

  }
  
  return (
    <div className="odenis_info">
<Companent pageID={id}></Companent>


      <div className="right">
        {lab.page &&lab.page.map((item, ind) => (
            <div key={ind}  className="odenis_info_item">
              <Link to={`/attributes/information/${item.id}`}>
                <div className="foto">
                <img src={item.img} alt="foto" />
                </div>
                <p className="name">{item.name}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Odenisid;
