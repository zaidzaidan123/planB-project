import React from "react";
import ExpertGuideCard from "./ExpertGuideCard";
import image from "../assets/image.svg";
import TitleWithLines from "./TitleWithLines";

const ExpertGuidance = () => {
  const array = [
    {
      number: 1,
      title: "Expert travel advice",
      paragraph: `Having experienced and knowledgeable staff who can provide expert advice on destinations, activities, accommodation, and transportation.`,
    },
    {
      number: 2,
      title: "Competitive pricing",
      paragraph: `As a reputable travel agency will negotiate with travel suppliers on your behalf to get you the best possible prices.`,
    },
    {
      number: 3,
      title: "Customized itineraries:",
      paragraph: `As your travel agency will work with you to create a personalized itinerary that suits your preferences, budget, and schedule.`,
    },
  ];
  return (
    <div>
      <TitleWithLines title={"Expert Guidance"} />
      <div className="flex gap-28 px-16 md:px-24 flex-col md:flex-row">
        <div className="flex flex-col gap-14 md:w-1/2">
          {array.map((card, index) => {
            return (
              <ExpertGuideCard
                number={card.number}
                title={card.title}
                paragraph={card.paragraph}
                key={index}
              />
            );
          })}
        </div>
        <div className="md:w-1/2">
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default ExpertGuidance;
