// src/pages/Online MBA/OnlineMBA.jsx
import React from "react";

// Online MBA Sections
import Hero from "./Hero";
import Overview from "./Overview";
import WhyOnlineMBA from "./WhyOnlineMBA";
import Comparison from "./Comparison";
import Universities from "./Universities";
import Syllabus from "./Syllabus";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";

const OnlineMBA = () => {
  return (
    <>
      <Hero />
      <Overview />
      <WhyOnlineMBA />
      <Comparison />
      <Universities />
      <Syllabus />
      <FAQ />
      <FinalCTA /> 
    </>
  );
};

export default OnlineMBA;
