import React from "react";
import "../Css/Checkout.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../Context/Authcontextprovider";
import { useEffect } from "react";

const Checkout = () => {
  const navigate = useNavigate();

  const { storeddata} =React.useContext(Authcontext);

  const [totalvalue, setTotalvalue] = useState(0);

  function countTotal(){
    let total=0;
    storeddata.forEach((ele)=>{
      total=total+(ele.price*ele.qty);
    })
    setTotalvalue(total)
  }

  useEffect(() => {
    document.title = "ASOS | Checkout";
    countTotal()
  }, [])


  function handledata() {
    navigate("/loader");
  }

  function handlehome() {
    navigate("/");
  }

  return (
    <>
      <div className="checkouth1">
        <img
          onClick={handlehome}
          style={{ cursor: "pointer" }}
          src="https://assets.asosservices.com/checkout/3.0.0-f43ec856-175/images/chrome/asos-logo/asos-logo.svg"
          alt=""
        />
        <p>CHECKOUT</p>
      </div>

      <div className="checkoutcon">
        <div className="checkoutcon1">
          <div className="properleft">
            <p className="checkoutleftp1">DELIVERY ADDRESS</p>
            <p className="checkoutleftp2">ADD ADDRESS</p>
            <div className="smalldetaicheck">
              <label className="labelcheckout">FIRST NAME :</label>
              <input type="text" className="labelcheckoutin" />
            </div>
            <div className="smalldetaicheck">
              <label className="labelcheckout">LAST NAME :</label>
              <input type="text" className="labelcheckoutin" />
            </div>
            <div className="smalldetaicheck">
              <label className="labelcheckout">MOBILE :</label>
              <input type="number" className="labelcheckoutin" />
            </div>
            <div className="smalldetaicheck">
              <label className="labelcheckout">ADDRESS :</label>
              <input type="text" className="labelcheckoutin" />
            </div>
            <div className="smalldetaicheck">
              <label className="labelcheckout">CITY: </label>
              <input type="text" className="labelcheckoutin" />
            </div>
            <div className="smalldetaicheck">
              <label className="labelcheckout">COUNTY :</label>
              <input type="text" className="labelcheckoutin" />
            </div>
            <div className="smalldetaicheck">
              <label className="labelcheckout">POSTCODE :</label>
              <input type="number" className="labelcheckoutpin" />
            </div>

            <div className="deliverbutton">DELIVER TO THIS ADDRESS</div>
          </div>
        </div>
        <div className="checkoutcon2">
          {storeddata &&
            storeddata.map((ele, index) => {
              return (
                <div key={index} className="checkoutlastshow">
                  <div className="ckeckoutimagelast">
                    <img src={ele.image} alt="" />
                  </div>
                  <div className="checkoutconlast">
                    <p className="titlesell1">{ele.name}</p>
                    <p className="titlesell2">Type : {ele.size}</p>
                    <p className="titlesell3">Qty : {ele.qty}</p>
                    <p className="titlesell4">£ {ele.price}</p>
                  </div>
                </div>
              );
            })}

          <div className="checkoutruller" style={{ marginTop: "50px" }}>
            {" "}
          </div>

          <div className="checkoutsubtotal" style={{ marginTop: "20px" }}>
            <p>Subtotal</p>
            <p>£{totalvalue}</p>
          </div>
          <div className="totlatopaycheckout" style={{ marginTop: "20px" }}>
            <p>TOTAL TO PAY</p>
            <p>£{totalvalue}</p>
          </div>

          <button className="checkoutpaybutton" onClick={handledata}>
            PAY £{totalvalue}
          </button>
        </div>
      </div>

      <div className="asoshelp">
        <p>ASOS Help</p>
      </div>
    </>
  );
};

export default Checkout;
