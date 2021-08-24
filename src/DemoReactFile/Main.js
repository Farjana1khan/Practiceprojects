import React from "react";
import "./Main.css";
import Header from "./pages/Header";
import Navbar from "./pages/Navbar";
import Content from "./pages/Content";
import Sidebar from "./pages/Sidebar";
import Footer from "./pages/Footer";

function Main() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="row">
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
