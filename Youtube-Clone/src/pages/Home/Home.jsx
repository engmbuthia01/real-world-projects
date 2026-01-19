import React from "react";
import "./Home.css";
import SideBar from "../../components/SideBar/SideBar";

const Home = ({ sidebar }) => {
  return (
    <>
      <SideBar sidebar={sidebar} />
    </>
  );
};

export default Home;
