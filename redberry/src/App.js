import React from "react";

// router
import { Route, Routes } from "react-router-dom";

// import pages
import Home from "./pages/home/Index";
import Employer from "./pages/employer/Index";
import LaptopOptions from "./pages/laptop/Index";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employer" element={<Employer />} />
        <Route path="/laptop-options" element={<LaptopOptions />} />
      </Routes>
    </>
  );
};

export default App;
