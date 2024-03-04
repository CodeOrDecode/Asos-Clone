import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Men from "../Components/Men";
import Women from "../Components/Women";
import Menproductdenim from "../Components/Menproductdenim";
import Womenproductdenim from "../Components/Womenproductdenim";
import Singleproduct from "../Components/Singleproduct";
import Checkout from "../Components/Checkout";
import Bag from "../Components/Bag";
import Nopagefound from "../Components/Nopagefound";
import Loader from "../Components/Loader";
import Conformation from "../Components/Conformation";
import Menproductspring from "../Components/Menproductspring";
import Menproducttommy from "../Components/Menproducttommy";
import Menclassic from "../Components/Menclassic";
import Womenproductcardies from "../Components/Womenproductcardies";
import Womenproductmario from "../Components/Womenproductmario";
import Womenproductvintage from "../Components/Womenproductvintage";
import Privateroute from "../Private/Privateroute";
import Afterloginhome from "../Components/Afterloginhome";


const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/afterloginhome"
          element={
            <Privateroute>
              <Afterloginhome />
            </Privateroute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/men"
          element={
            <Privateroute>
              <Men />
            </Privateroute>
          }
        />
        <Route
          path="/women"
          element={
            <Privateroute>
              <Women />
            </Privateroute>
          }
        />
        <Route
          path="/menproductdenim"
          element={
            <Privateroute>
              <Menproductdenim />
            </Privateroute>
          }
        />
        <Route
          path="/menproductspring"
          element={
            <Privateroute>
              <Menproductspring />
            </Privateroute>
          }
        />
        <Route
          path="/menproducttommy"
          element={
            <Privateroute>
              <Menproducttommy />
            </Privateroute>
          }
        />
        <Route
          path="/menclassic"
          element={
            <Privateroute>
              <Menclassic />
            </Privateroute>
          }
        />

        <Route
          path="/womenproductdenim"
          element={
            <Privateroute>
              <Womenproductdenim />
            </Privateroute>
          }
        />
        <Route
          path="/womenproductcardies"
          element={
            <Privateroute>
              <Womenproductcardies />
            </Privateroute>
          }
        />
        <Route
          path="/womenproductmario"
          element={
            <Privateroute>
              <Womenproductmario />
            </Privateroute>
          }
        />
        <Route
          path="/womenproductvintage"
          element={
            <Privateroute>
              <Womenproductvintage />
            </Privateroute>
          }
        />

        <Route
          path="/singleproduct"
          element={
            <Privateroute>
              <Singleproduct />
            </Privateroute>
          }
        />
        <Route
          path="/checkout"
          element={
            <Privateroute>
              <Checkout />
            </Privateroute>
          }
        />
        <Route
          path="/bag"
          element={
            <Privateroute>
              <Bag />
            </Privateroute>
          }
        />
        <Route
          path="/loader"
          element={
            <Privateroute>
              <Loader />
            </Privateroute>
          }
        />
        <Route
          path="/conformation"
          element={
            <Privateroute>
              <Conformation />
            </Privateroute>
          }
        />
        <Route path="*" element={<Nopagefound />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
