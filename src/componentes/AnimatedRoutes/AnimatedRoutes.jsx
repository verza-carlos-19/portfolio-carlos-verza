import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import DisplayDoor from "../../pages/DisplayDoor/DisplayDoor";
import Home from "../../pages/Home/Home";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* <Route path="/" element={<Layout></Layout>}> */}
          {/* <Route path="/" element={<DisplayDoor />} /> */}
          <Route path="/" element={<Home />} />
          {/* </Route> */}
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoutes;
