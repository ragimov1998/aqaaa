import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [ad, setAd] = useState({
    // ad:"",
    // email:"",
    // password:"",
    // id: '',
  });
  const navigate = useNavigate();
  const [user, setUser] = useState();
//   const [password, setPassword] = useState(false);
//  const handlesubmit = (e)=>{
//     e.preventDefault()
//     if
//  }
  function post() {
    axios.post("http://localhost:3300/user", ad).then((e) => {
    //   setPassword((bes) => !bes); 
      navigate("/login")
    });
  }
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
          <h1 className="qeydiyyat">Qeydiyyat</h1>
          <input
            placeholder="Name"
            onChange={(e) =>
              setAd({
                ad: e.target.value,
                email: ad.email,
                password: ad.password,
              })
            }
            type="text"
          />
          <input
            placeholder="Email"
            onChange={(e) =>
              setAd({
                ad: ad.ad,
                email: e.target.value,
                password: ad.password,
              })
            }
            type="text"
          />
          <input
            placeholder="Password"
            onChange={(e) =>
              setAd({
                ad: ad.ad,
                email: ad.email,
                password: e.target.value,
              })
            }
            type="password"
          />
          <span className="rule">
            <input
              style={{ width: "15px", height: "15px", margin: "0", marginRight:"5px"}}
              type="checkbox"
            />
            Mən qaydalar və şərtlərilə razıyam və “Bank hesablarının açılması,
            aparılması və bağlanması Qaydası” na uyğun olaraq bu şərtlərlə video
            eyniləşdirmənin aparılması üçünrazılığımı verirəm.
          </span>
          <button onClick={post}>Gonder</button>
        </div>
      </div>
    </div>
  );
}
export default Register;
