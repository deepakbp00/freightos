import React, { useState } from "react";
import ChatApp from "./ChatApp.jsx";
import styles from "../style";
import Image from "./Image";
import { discount } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  const [chatbot, setChatbot] = useState(false);
  const handleClick = () => {
    setChatbot(true);
  };
  const handlegoback = () => {
    setChatbot(false);
  };
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">Powered</span> by world's{" "}
            <span className="text-white"> largest</span> Network
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Freight <br className="sm:block hidden" />{" "}
            <span className="text-gradient">That Just</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {chatbot ? (
              <button onClick={handlegoback}>
                {" "}
                <GetStarted title1="go" title2="back" />
              </button>
            ) : (
              <button onClick={handleClick}>
                {" "}
                <GetStarted title1="chat" title2="with us" />
              </button>
            )}
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Works.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Powering painless global freight comparison,booking, and management
          for over 10,000 companies.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        {chatbot ? (
          <ChatApp />
        ) : (
          <Image className="w-[100%] h-[100%] relative z-[5]" />
        )}
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        {chatbot ? (
          <button onClick={handlegoback}>
            {" "}
            <GetStarted title1="go" title2="back" />
          </button>
        ) : (
          <button onClick={handleClick}>
            {" "}
            <GetStarted title1="chat" title2="with us" />
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
