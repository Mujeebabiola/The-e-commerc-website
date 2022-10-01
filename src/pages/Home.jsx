import React from "react";
import Message from "../Components/Message";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Pager from "../Components/pager";
import Productlist from "../Components/Productlist";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Message />
        <Productlist />
      </div>
    </div>
  );
}

export default Home;
