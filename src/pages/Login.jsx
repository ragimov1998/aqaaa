import axios from "axios";
import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");
  const usenavigate = useNavigate();
  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };
  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("proceed");
      axios
        .get("http://localhost:3300/user")
        .then((resp) => {
          const user = resp.data.filter((e) => e.password === password);
          console.log(user);
          if (user[0].password === password) {
            // toast.success('Success')
            // alert("ugurlu");
            // window.location.reload('/')
            window.location.href = "/";

            // usenavigate("/");
            console.log(resp.name);
            localStorage.setItem("user", JSON.stringify(user));
          } else {
            alert("yazin");
          }
        })
        .catch((err) => {
          alert("error");
        });
    }
  };
  return (
    <div className="register">
      <div className="register_container">
        <div className="left">
          <img
            src="https://oha.birbank.business/assets/images/loginImage.jpg"
            alt=""
          />
        </div>
        <div className="right">
          <form onSubmit={ProceedLogin}>
            <div style={{ textAlign: "center" }} className="card">
              <h1 className="qeydiyyat">Xoş Gəldiniz</h1>
              <div className="form-group">
                <input
                  value={username}
                  onChange={(e) => {
                    usernameupdate(e.target.value);
                  }}
                  className="form-control"
                  placeholder="Username"
                ></input>
              </div>
              <div className="form-group">
                <input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => passwordupdate(e.target.value)}
                  className="form-control"
                ></input>
                <button
                  style={{ marginBottom: "15px" }}
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>

              <Link className="btn btn-success" to={"/register"}>
                <p
                  style={{
                    textDecoration: "underline",
                    float: "left",
                    marginLeft: "40px",
                    color: "blue",
                  }}
                >
                  New user
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
