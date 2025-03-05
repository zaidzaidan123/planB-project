import React from "react";
import heroImage from "../assets/hero.png"

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] mb-32">
      <img
        src={heroImage}
        alt="Hero Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div className="absolute bottom-20 left-10 bg-black/40 text-white px-16 py-9 rounded-4xl text-2xl font-semibold shadow-md">
        Travel To Jordan
      </div>
    </section>
  );
};

export default HeroSection;
