import React from "react";
import "./Home.css";
import Cards from "./Cards/Cards";
import UpperSection from "./UpperSection";
import Footer from "./Footer/Footer";
import Header from "../Header";

function Home() {
  return (
    <>
      <Header />
      <UpperSection />
      {<Cards />}
      <Footer />
    </>
  );
}

export default Home;
