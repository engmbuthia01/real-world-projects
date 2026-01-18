import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Video from "./pages/Video/Video";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:ctegoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
