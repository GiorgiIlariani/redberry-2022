import React from "react";

// router
import { Route, Routes } from "react-router-dom";

// import pages
import Home from "./pages/home/Index";
import Employer from "./pages/employer/Index";
import LaptopOptions from "./pages/laptop/Index";
import Popup from "./pages/popup/Popup";
import ListOfEntries from "./pages/listOfEntries/Index";
import SingleLeptopInfo from "./pages/singleLaptopInfo/Index";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/employer" element={<Employer />} />
        <Route path="/laptop-options" element={<LaptopOptions />} />
        <Route path="/popup" element={<Popup />} />
        <Route path="/listOfEntries" element={<ListOfEntries />} />
        <Route path="/laptop/:id" element={<SingleLeptopInfo />} />
      </Routes>
    </>
  );
};

export default App;
