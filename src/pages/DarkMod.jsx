import React, { useState } from "react";

function DarkLight() {
  const [icon, seticon] = useState(false);
  return (
      <div className="DarkLight">
        <span className="fa-solid fa-sun"></span>
        <span
          style={{ marginLeft: "18px" }}
          className="fa-solid fa-moon"
        ></span>
       
        <div
        onClick={()=>localStorage.getItem("darklight")==="light"?(localStorage.setItem("darklight","dark"),window.location.reload()):(localStorage.setItem("darklight","light"),window.location.reload())}
          // onClick={() => {seticon(!icon);{icon===true? localStorage.setItem("darklight","dark"):localStorage.setItem("darklight","light")}}}
          className="enke"
        >
          <i
            style={
              localStorage.getItem("darklight")==="dark"
                ? { float: "right", background: "#000000a5"}
                : { float: "left", background: "#d9d9d9" }
            }
            className="z"
          ></i>
        </div>
      </div>
  );
}

export default DarkLight;
