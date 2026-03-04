import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const current_theme = localStorage.getItem("current_theme");
  const [theme, setTheme] = useState(current_theme ? current_theme : "light");
  return (
    <div className={`container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
