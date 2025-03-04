import React from "react";

const ToggleSwitch = ({number}) => {
  return (
    <div className="w-14 h-7 flex items-center bg-[#167989] rounded-full p-1">
      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-600 font-bold text-sm">{number}</div>
    </div>
  );
};

export default ToggleSwitch;
