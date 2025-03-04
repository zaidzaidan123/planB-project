import React from "react";

const WhyChooseCard = ({ icon, title, paragraph }) => {
  return (
    <div className="flex flex-col gap-2 md:w-1/4">
      <img src={icon} alt="icon" className="w-16 h-16" />
      <h3 className="font-bold text-base">{title}</h3>
      <p className="text-sm md:w-3/4">{paragraph}</p>
    </div>
  );
};

export default WhyChooseCard;
