import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header.js";
import Personagens from "./main.js";

export default function Router() {
  return (
    <BrowserRouter>
      <Header rota1="Home" rota2="Personagens" />
      <Routes>
        <Route path="/" />
        <Route path="/personagens" element={<Personagens />} />
      </Routes>
    </BrowserRouter>
  );
}
