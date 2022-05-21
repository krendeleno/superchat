import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from "./pages/Main";

import "./App.css";

function App() {
  return (
    <BrowserRouter basename="superchat">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
