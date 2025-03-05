import React from "react";
import Header from "../component/Header";
import HeroSection from "../component/HeroSection";
import Category from "../component/Category";
import ExpertGuidance from "../component/ExpertGuidance";
import WhyChooseSection from "../component/whyChoose";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Category />
      <ExpertGuidance />
      <WhyChooseSection />
    </>
  );
};

export default Home;
