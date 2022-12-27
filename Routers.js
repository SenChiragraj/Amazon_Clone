import React from "react";
import Home from "./Home";
import Checkout from "./Checkout";

import { Routes, Route,Link} from "react-router-dom";

export default function Routers() {
  return (

  <Routes>
    <Route path="/checkout" element={<Checkout />} />
    <Route exact path="/" element={<Home />} />
  </Routes>
  
  );
}
