import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main } from "src/pages/Main";
import { Login } from "src/pages/Login";
import { Register } from "src/pages/Register";

import "./App.css";
import { Theme, ThemeContext, themes } from "src/shared/themes";

function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme === "light" ? themes.light : themes.dark,
        toggleTheme,
      }}
    >
      <BrowserRouter basename="superchat">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
