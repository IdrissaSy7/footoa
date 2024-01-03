import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classement from "./pages/Classement";
import Calendrier from "./pages/Calendrier";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Classement />} />
        <Route path="/Classement" element={<Classement />} />
        <Route path="/Calendrier" element={<Calendrier />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
