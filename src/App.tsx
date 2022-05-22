import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from "src/pages/Main";
import { Login } from "src/pages/Login";
import { Register } from "src/pages/Register";


import "./App.css";

function App() {
  return (
    <BrowserRouter basename="superchat">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
