import React from "react";
import DeadSea from "../assets/deadsea.svg";
import pella from "../assets/Pella.svg";
import walkOverland from "../assets/walkover.svg";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const arrayCards = [
    {
      img: DeadSea,
      title: "Categories",
    },
    {
      img: pella,
      title: "About Jordan",
    },
    {
      img: walkOverland,
      title: "Travel Tips",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between px-4 gap-16 flex-wrap mb-16  md:mb-64">
      {arrayCards.map((categoryCard) => {
        return (
          <CategoryCard image={categoryCard.img} title={categoryCard.title} />
        );
      })}
    </div>
  );
};

export default Category;
