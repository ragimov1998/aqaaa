import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Companent from "./Companent";
function Ss() {
  const { id } = useParams();
  console.log(id);
  const [lab, setlab] = useState([]);

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
    <div>
      <Companent></Companent>
      {
        <div key={lab.id}>
          {lab.name} {lab.teyinet === "Teyinat" ? (
          <div>
              <span>Teyinat</span>
              <select name="000" id="">
                <option value="">bizimki</option>
                <option value="">sizinki</option>
              </select>
            </div> ) : lab.teyinet === "barkod" ? (
            <div><span>BArkod</span><input type="text" />
            </div>) : ("ss")}</div>}
    </div>
  );
}
export default Ss;
