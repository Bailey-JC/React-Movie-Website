import React from "react";
import ContinueWatch from "../../components/ContinueWatch/ContinueWatch";
import Landing from "../../components/Landing/Landing";
import Recommended from "../../components/Recommended/Recommended";
import Trending from "../../components/Trending/Trending";
import "./Home.css";

function Home() {
  return (
    <>
    <Landing />
    <Trending />
    {/* <ContinueWatch />
    <Recommended /> */}
    </>
  );
}

export default Home;
