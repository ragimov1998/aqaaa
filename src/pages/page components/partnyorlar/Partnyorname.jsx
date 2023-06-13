import React from "react";
import { part } from "../partnyordata";
import { useParams } from "react-router-dom";
import { useState } from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Partnyorname() {
  const { id } = useParams();
  const [aadata, setissdata] = useState(part[id - 1]);
  console.log(aadata);
  const defaultProps = {
    center: {
      lat: 40.570082,
      lng: 49.688976},
    zoom: 15,
  };

  // const id = window.location.pathname.split("/")[2];
  // const filt = data.filter((item)=>(item.title.includes(id)))
  // console.log(filt)
  return (
    <div className="partnyorname">
      <div className="partnyor_container">
        <div className="partnyor_container_top">
          <div className="left">
            <div className="pic">
              <img src={aadata.img} alt="" />
            </div>
            <div className="text">
              <h1>{aadata.title}</h1>
              <p>{aadata.teyinat}</p>
            </div>
          </div>
          <div className="right">
            <div className="social_icons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
        <hr />

        <div className="partnyor_container_bottom">
          <div className="item">
            <p>
              <i class="fa-solid fa-percent"></i> <b>{aadata.faiz}</b>
            </p>
            <div className="contact">
              <p>
                <i class="fa-solid fa-globe"></i>
                <b>{aadata.sayt}</b>
              </p>
              <p>
                <i class="fa-solid fa-phone"></i>
                <b>{aadata.tel}</b>
              </p>
            </div>
            <span>
              <p>{aadata.sert}</p>
              <p>{aadata.sert2}</p>
            </span>
          </div>
        </div>
        <div style={{ margin:"0 auto", height: "80vh", width: "80%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
}

export default Partnyorname;
