import React from "react";
import "../Css/Signup.css";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { Authcontext } from "../Context/Authcontextprovider";
import Navbar from "../Allsimilar/Navbar"

const Signup = () => {
  const [formstate, setFormstate] = useState({
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  });

  const navigate = useNavigate();
  const { handleSignup } = React.useContext(Authcontext)

  function handlelogin() {
    navigate("/login");
  }


  function handleChange(event) {
    let getvalue = event.target.value;
    setFormstate({ ...formstate, [event.target.name]: getvalue });
  }

  function handleSubmit() {
    handleSignup(formstate);
  }

  useEffect(() => {
    document.title="ASOS | Join ASOS";
   
  }, [])
  

  return (
    <>

    <Navbar/>
      <div className="signupimg">
        <img
          src="https://my.asos.com/Content/images/asos-logo-2022-93x28.png"
          alt=""
        />
      </div>

      <div className="mainsignupcon">
        <div className="signuptwolinks">
          <div className="twolinkone">JOIN</div>
          <div className="twolinkone" onClick={handlelogin}>
            SIGN IN
          </div>
        </div>
        <div className="ruller"></div>

       
          <div className="formsection">
            <div className="firstform">
              <label>EMAIL ADDRESS : </label>
              <input
                type="email"
                name="email"
                value={formstate.email}
                onChange={handleChange}
              />
            </div>

            <div className="secondform">
              <label>FIRST NAME : </label>
              <input
                type="text"
                name="firstname"
                value={formstate.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="secondform">
              <label>LAST NAME : </label>
              <input
                type="text"
                name="lastname"
                value={formstate.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="thirdform">
              <label>PASSWORD : </label>
              <input
                type="Password"
                name="password"
                value={formstate.password}
                onChange={handleChange}
              />
            </div>

            <div className="buttondivsignup" onClick={handleSubmit}>
              JOIN ASOS
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

export default Signup;

