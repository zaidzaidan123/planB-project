import React from "react";

const TitleWithLines = ({ title }) => {
  return (
    <div className="flex items-center md:px-12 md:gap-12 md:gap-28 mb-20">
      <hr className="h-4 w-full text-[#8A8890]" />
      <h2 className="text-[#167989] font-bold text-2xl w-full text-center">
        {title}
      </h2>
      <hr className="h-4 w-full text-[#8A8890]" />
    </div>
  );
};

export default TitleWithLines;
