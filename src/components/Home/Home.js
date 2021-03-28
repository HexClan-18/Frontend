import React from "react";
import "./Home.css";
import Cards from "./Cards/Cards";
import UpperSection from "./UpperSection";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <>
      <UpperSection />
      {<Cards />}
      <Footer />
    </>
  );
}

export default Home;
