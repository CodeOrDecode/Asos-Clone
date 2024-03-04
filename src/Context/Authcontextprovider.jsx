import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Authcontext = React.createContext();

const Authcontextprovider = ({ children }) => {
  const navigate = useNavigate();
  const [totalvalue, setTotalvalue] = useState(0);

  const [auth, setAuth] = useState(false);
  const [showname, setShowname] = useState(null);
  const [error, setError] = useState(false);
  const [cartcount, setCartcount] = useState(0);
  const [singleasos, setSingleasos] = useState(null);

  const [storeddata, setStoreddata] = useState([]);

  function countTotal(updateddata) {
    let total = 0;
    updateddata.forEach((ele) => {
      total = total + ele.price * ele.qty;
    });
    setTotalvalue(total);
  }

  function incrementproductonbag(item) {
    let newData = storeddata.map((ele) => {
      if (ele.name === item.name) {
        ele.qty = ele.qty + 1;
        return ele;
      } else {
        return ele;
      }
    });
    setStoreddata(newData);

    countTotal(newData);
  }

  function decrementproductonbag(item) {
    let newData = storeddata.map((ele) => {
      if (ele.name === item.name) {
        ele.qty = ele.qty - 1;
        return ele;
      } else {
        return ele;
      }
    });
    setStoreddata(newData);
    countTotal(newData);
  }


  function deletefrombag(item) {
    let newData = storeddata.filter((ele) => {
      if (ele.name != item.name) {
       return ele;
      }
    });
    setCartcount(cartcount-1);
    setStoreddata(newData);
    countTotal(newData);
  }


  function handleSignup(data) {
    // console.log(data);
    localStorage.setItem("email", JSON.stringify(data.email));
    localStorage.setItem("firstname", JSON.stringify(data.firstname));
    localStorage.setItem("password", JSON.stringify(data.password));
    setAuth(true);
    setShowname(data.firstname);
    setError(false);
    navigate("/afterloginhome");
  }

  function restcartcount() {
    setCartcount(0);
    setSingleasos(null);
    setStoreddata([]);
  }

  function handleLogin(data) {
    let emaillogin = JSON.parse(localStorage.getItem("email"));
    let passwordlogin = JSON.parse(localStorage.getItem("password"));
    let namelogin = JSON.parse(localStorage.getItem("firstname"));

    if (data.email == emaillogin && data.password == passwordlogin) {
      setAuth(true);
      setShowname(namelogin);
      navigate("/afterloginhome");
    } else {
      setAuth(false);
      setError(true);
    }
  }

  function handleerrorhide() {
    setError(false);
  }
  function handleLogout() {
    setAuth(false);
    setShowname(null);
    setError(false);
    navigate("/");
  }

  function handleSingleofasos(data) {
    // console.log(data);
    setSingleasos(data);
    navigate("/singleproduct");
  }

  function handlecartcount(getdata, getsize) {
    setCartcount(cartcount + 1);
    let makedata = { ...getdata, size: getsize, qty: 1 };
    // console.log(makedata);
    setStoreddata([...storeddata, makedata]);
    countTotal([...storeddata, makedata])
  }

  return (
    <Authcontext.Provider
      value={{
        auth,
        handleSignup,
        showname,
        handleLogout,
        handleLogin,
        error,
        handleerrorhide,
        cartcount,
        handleSingleofasos,
        singleasos,
        handlecartcount,
        storeddata,
        restcartcount,
        incrementproductonbag,
        decrementproductonbag,
        totalvalue,
        deletefrombag
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

export default Authcontextprovider;
