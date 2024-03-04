import React from "react";
import "../Css/Login.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../Allsimilar/Navbar";
import { useState,useEffect } from "react";
import { Authcontext } from "../Context/Authcontextprovider";
const Login = () => {
  const { handleLogin,error,handleerrorhide } = React.useContext(Authcontext);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handlesignup() {
    navigate("/signup");
  }

  function handlechange(event) {
    let getValue = event.target.value;
    setFormdata({ ...formdata, [event.target.name]: getValue });
  }

  function loginbuttonclicked() {
    handleLogin(formdata);
  }


  useEffect(() => {
    document.title = "ASOS | Sign in";
    handleerrorhide()
  }, [])
  

  return (
    <>
      <Navbar />
      <div className="loginimg">
        <img
          src="https://my.asos.com/Content/images/asos-logo-2022-93x28.png"
          alt=""
        />
      </div>

      <div className="mainlogincon">
        <div className="twolinks">
          <div className="twolinkone" onClick={handlesignup}>
            JOIN
          </div>
          <div className="twolinkone">SIGN IN</div>
        </div>
        <div className="ruller"></div>

        <div className="formsection">
          <div className="firstform">
            <label>EMAIL ADDRESS : </label>
            <input
              type="email"
              value={formdata.email}
              name="email"
              onChange={handlechange}
            />
          </div>
          <div className="secondform">
            <label>PASSWORD : </label>
            <input
              type="password"
              value={formdata.password}
              name="password"
              onChange={handlechange}
            />
          </div>

          {error && <p className="itiswrongone">Invalid Credentials</p>}

          <div className="buttondivlogin" onClick={loginbuttonclicked}>
            SIGN IN
          </div>
          <p className="forgetone">Forgot password?</p>
          <div className="privacyone">
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
