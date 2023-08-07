import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./src/components/navbar.js";
import Banner from "./src/components/banner.js";
import Footer from "./src/components/footer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Navbar />, <Banner />, <Footer />);
