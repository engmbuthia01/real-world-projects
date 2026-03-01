import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className="container">
      <NavBar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
