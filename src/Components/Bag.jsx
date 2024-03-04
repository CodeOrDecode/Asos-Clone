import React from "react";
import { useState } from "react";
import Navbar from "../Allsimilar/Navbar";
import Footer from "../Allsimilar/Footer";
import "../Css/Bag.css";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Afterloginnav from "../Allsimilar/Afterloginnav";
import { Authcontext } from "../Context/Authcontextprovider";
import { useEffect } from "react";

const Bag = () => {

  const navigate = useNavigate();
  const { storeddata,incrementproductonbag,decrementproductonbag,totalvalue,deletefrombag} =React.useContext(Authcontext);

  
  function handlecheckout(){
    navigate("/Checkout")
  }

  useEffect(() => {
  document.title ="Shopping Bag | ASOS";
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

      <div className="bagmaincon">
        <div className="bagmainconone">
          <p className="bagpone">MY BAG</p>
          {storeddata &&
            storeddata.map((ele, index) => {
              return (
                <div key={index} className="bagdatadiv">
                  <img src={ele.image} alt="" className="bagimageis" />
                  <div className="bagdescription">
                    <p className="bagalltags additionclass">{ele.name}</p>
                    <p className="bagalltags">Type : {ele.size}</p>
                    <p className="bagalltags additionclass">Qty : {ele.qty}</p>
                    <p className="bagalltags">£ {ele.price}</p>
                    <div className="plusminus">
                      <FaPlusCircle  className="ihavetodoit" onClick={()=>{incrementproductonbag(ele)}}/>
                      <FaMinusCircle  className="ihavetodoit" onClick={()=>{decrementproductonbag(ele)}}/>
                      <CiCircleRemove  className="ihavetodoit" onClick={()=>{deletefrombag(ele)}}/>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="bagmaincontwo">
        <p className="totlabagis">TOTAL</p>
        <div className="bagruller"></div>
        <div className="subpricebagone">
            <p className="bagsubtext">Sub-total</p>
            <p className="bagpricetext">£ {totalvalue}</p>
        </div>

        <div className="bagcheckoutbutton" onClick={handlecheckout}>CHECKOUT</div>
        <p className="totlabagisaccept">WE ACCEPT:</p>
        <img style={{width:"190px",marginLeft:"44px"}} src="https://assets.asosservices.com/asos-finance/images/marketing/single.png" alt="" />
        </div>
      </div>


      <Footer/>
    </>
  );
};

export default Bag;
