import React from "react";
import "../Css/Singleproduct.css";
import Navbar from "../Allsimilar/Navbar";
import Footer from "../Allsimilar/Footer";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import Afterloginnav from "../Allsimilar/Afterloginnav";
import { Authcontext } from "../Context/Authcontextprovider";
import { useEffect } from "react";

const Singleproduct = () => {
  const [show, setShow] = useState(false);
  const { singleasos,handlecartcount } =React.useContext(Authcontext);

  const [sizeshow, setSizeshow] = useState("Please select")

  function handleShow() {
    setShow(!show);
  }

  function handlehide() {
    setShow(false);
  }

  function handlesetsize(event){
    setSizeshow(event.target.innerText);
  }

  useEffect(() => {
   document.title = singleasos.name;
  }, [])
  

  return (
    <>
      <Afterloginnav />

      <div className="menbannerone">
        <div className="menbenonepart">
          <p className="menbenonepartin">25% OFF SELECTED STYLES!*</p>
          <p className="menbentwopartin">With code: TREATYASELF</p>
        </div>
        <div className="menbentwopart">
          <p className="menbentwopartend">FREE WORLDWIDE DELIVERY</p>
        </div>
      </div>

      <div className="con">
        <div className="singleproductis">
          <div className="prodetails">
            {singleasos &&   <img className="imagesizeisbig"
              src={singleasos.image}
              alt=""
            />}
          </div>

          <div className="extradetails">
            <div className="allitem">
              <p className="extratitle">
             {singleasos.name}
              </p>
              <p className="extraprice">£{singleasos.price}</p>
              <div className="existsize" onClick={handleShow}>
              {sizeshow} <FaAngleDown />
              </div>

              {show && (
                <div
                  className="allsizeshow"
                  onClick={handleShow}
                  onMouseLeave={handlehide} 
                >
                  <div className="indivisize" onClick={handlesetsize}>Please select</div>
                  <div className="indivisize" onClick={handlesetsize}>2XS</div>
                  <div className="indivisize" onClick={handlesetsize}>XS</div>
                  <div className="indivisize" onClick={handlesetsize}>S</div>
                  <div className="indivisize" onClick={handlesetsize}>M</div>
                  <div className="indivisize" onClick={handlesetsize}>L</div>
                  <div className="indivisize" onClick={handlesetsize}>XL</div>
                  <div className="indivisize" onClick={handlesetsize}>2XL</div>
                </div>
              )}

              <div className="sinprobutton" style={{cursor:"pointer"}} onClick={()=>{handlecartcount(singleasos,sizeshow)}}>ADD TO BAG</div>

              <div className="logooneis">
                <div className="insidecarandpara">
                  <CiDeliveryTruck className="truckone"/>
                  <p className="truckp1">Free delivery on qualifying orders.</p>
                </div>
                <p className="truckp2">View our Delivery &amp; Returns Policy</p>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="rullersingleis"></div>

      <Footer/>
    </>
  );
};

export default Singleproduct;
