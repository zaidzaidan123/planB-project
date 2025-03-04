import React from "react";
import discount from "../assets/discount.svg";
import circle_tick from "../assets/circle_tick.svg";
import diamond from "../assets/ion_diamond.svg";
import headset from "../assets/headset.svg";
import logo from "../assets/logo.svg";
import wadiRum from "../assets/wadiRum.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/insat.svg";
import email from "../assets/email.svg";
import youtube from "../assets/youtube.svg";

const Footer = () => {
  const offersArray = [
    {
      title: "Here for you",
      icon: headset,
    },
    {
      title: "Best Price Guarantee",
      icon: circle_tick,
    },
    {
      title: "Exclusive offers",
      icon: discount,
    },
    {
      title: "New Finds Every Month",
      icon: diamond,
    },
  ];

  const footerArray = [
    {
      title: "Company",
      list: ["About Us", "Contacts", "Home"],
    },
    {
      title: "Contact Us",
      list: ["Help/FAQ", "Press", "Affilates"],
    },
    {
      title: "Support",
      list: ["Help & Support", "Term & Condition", "24/9H Services"],
    },
  ];

  const socialMedia = [facebook, instagram, email, youtube];
  return (
    <>
      <div className="flex justify-between flex-col md:flex-row items-center bg-[#167989] min-h-[113px] px-8 flex-wrap gap-4 py-4">
        {offersArray.map((offer) => {
          return (
            <div className="flex flex-col justify-center items-center">
              <img src={offer.icon} alt={offer.title} className="w-6 h-6" />
              <h3 className="text-[#fff] !mt-2">{offer.title}</h3>
            </div>
          );
        })}
      </div>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${wadiRum})` }}
      >
        <div>
          <div className="flex justify-between p-14 md:p-24 md:pr-72 flex-wrap">
            <img src={logo} alt="logo" />
            <div className="flex flex-wrap gap-16 mt-4">
              {footerArray.map((section, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <h3 className="font-bold text-[#0D0D0D] text-xl">
                    {section.title}
                  </h3>
                  <ul className="mt-2">
                    {section.list.map((item, idx) => (
                      <li key={idx} className="text-white cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-12 px-14 flex-wrap">
          <h3 className="font-bold text-white mb-2 md:w-2/6">
            Plan <span className="text-[#167989]">B</span> Travel Tourism is a Customer-Oriented Organization Offering
            Professional, World-Class Tourism Solutions.
          </h3>
          <div className="flex flex-wrap">
            {socialMedia.map((socialMedia) => {
              return <img src={socialMedia} alt={socialMedia} className="cursor-pointer"/>;
            })}
          </div>
        </div>
        <div className="text-white text-center pb-5 mt-24">2025</div>
      </div>
    </>
  );
};

export default Footer;
