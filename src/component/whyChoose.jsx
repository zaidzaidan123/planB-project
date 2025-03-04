import React from "react";
import ticket from "../assets/ticket.svg";
import medal from "../assets/medal.svg";
import diamond from "../assets/diamond.svg";
import baloon from "../assets/baloon.svg";
import WhyChooseCard from "./WhyChooseCard";

const WhyChooseSection = () => {
  const cards = [
    {
      icon: ticket,
      title: "Ultimate flexibility",
      paragraph: `You're in control, with free
        cancellation and payment options to
        satisfy any plan or budget.`,
    },
    {
      icon: baloon,
      title: "Memorable experiences",
      paragraph: `Browse and book tours and activities
    so incredible, you'll want to tell your
    friends.`,
    },
    {
      icon: diamond,
      title: "",
      paragraph: `High-quality standards. Millions of
    reviews. A tourz company.`,
    },
    {
      icon: medal,
      title: "Award-winning support",
      paragraph: `New price? New plan? No problem.
    We're here to help, 24/7.`,
    },
  ];
  return (
    <div className="flex flex-col gap-10 px-16 my-16 md:mb-72 md:mt-36">
      <h2 className="font-bold text-xl md:text-4xl">
        Why Choose Plan <span className="text-[#167989]">B</span>
      </h2>
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row flex-wrap">
        {cards.map((card) => {
          return (
            <WhyChooseCard
              icon={card.icon}
              title={card.title}
              paragraph={card.paragraph}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseSection;
