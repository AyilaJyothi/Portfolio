import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "./component1"; // Renamed to Header for clarity
import Compo from "./component2";
import AboutMe from "./component3";
import Skills from "./component4";
import Projects from "./component5";
import CertificatesPage from "./component6";
import ContactForm from "./contact";

const MainCompo = () => {
  const location = useLocation();
  const access = location.state?.access;

  const comp1Ref = useRef(null);
  const comp2Ref = useRef(null);
  const comp3Ref = useRef(null);
  const comp4Ref = useRef(null);
  const comp5Ref = useRef(null);
  const comp6Ref = useRef(null);

  return (
    <>
      <Header
        comp1Ref={comp1Ref}
        comp2Ref={comp2Ref}
        comp3Ref={comp3Ref}
        comp4Ref={comp4Ref}
        comp5Ref={comp5Ref}
        comp6Ref={comp6Ref}
      />
      <div ref={comp1Ref}><Compo /></div>
      <div ref={comp2Ref}><AboutMe /></div>
      <div ref={comp3Ref}><Skills /></div>
      <div ref={comp4Ref}><Projects /></div>
      <div ref={comp5Ref}><CertificatesPage /></div>
      <div ref={comp6Ref}><ContactForm /></div>
    </>
  );
};

export default MainCompo;
