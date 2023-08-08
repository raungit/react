import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/navbar.js";
import Banner from "./components/banner.js";
import Footer from "./components/footer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <Banner />
    <Footer />
  </>
);
