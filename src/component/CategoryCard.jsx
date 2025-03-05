import React from "react";

const CategoryCard = ({ image, title }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden sm:w-96 text-center">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-3xl font-bold">{title}</h2>
        <button className="cursor-pointer mt-3 px-4 py-2 border-2 border-[#167989] text-[#167989] font-medium rounded-lg hover:bg-[#167989] hover:text-white transition duration-300">
          See More
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
