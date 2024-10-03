// src/screens/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="">
      <h1 className="titleHeader">YKS Geri Sayım Uygulaması</h1>

      <div
        className="parentDiv"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        <p>
          <Link to="/exam/tyt">TYT</Link>
        </p>
        <p>
          <Link to="/exam/ayt">AYT</Link>
        </p>
        <p>
          <Link to="/exam/dil">DİL</Link>
        </p>
        <p>
          <Link to="/exam/ales-1">ALES-1</Link>
        </p>
        <p>
          <Link to="/exam/ales-2">ALES-2</Link>
        </p>
        <p>
          <Link to="/exam/msu">MSÜ</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
