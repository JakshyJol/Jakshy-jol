import React, { useRef } from "react";
import { Footer } from "../../componets/footer/Footer";
import { Header } from "../../componets/Header/Header";
import { Section } from "../../componets/Section/Section";
import { Section_ } from "../../componets/Section_/Section_";
import { Section_2 } from "../../componets/Section_2/Section_2";
import { SectionThird } from "../../componets/Section_3/Section_3";
import { SectionFourth } from "../../componets/Section_4/Section_4";
import "../HomePage/HomePage.css";

const HomePage = () => {
  const myRef = useRef(null);

  const handleScrollClick = () => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <>
      <header onClick={handleScrollClick}>
        <Header />
      </header>
      <div className="HomePage">
        <Section />
        <Section_2 />

        <Section_ myRef={myRef} />
        <SectionThird />
        <SectionFourth className="style" />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
