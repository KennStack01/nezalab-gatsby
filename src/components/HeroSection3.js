/* eslint-disable react/prop-types */
import React from "react";

const HeroSection = ({ description, picture }) => {
  return (
    <div className="mt-0">
      <p className="absolute text-xs md:text-lg text-gray-900 font-medium z-40 mt-24 md:mt-72 ml-3 md:ml-10 w-1/2 invisible md:visible">
        {" "}
        {description}{" "}
      </p>
      <img
        alt="Hero picture"
        className="relative object-cover w-full"
        src={picture}
        placeholder="blurred"
        loading="lazy"
      />
      <p className="text-xs text-gray-900 font-medium text-center mx-14 z-40 mt-10 mb-8 xs:visible md:invisible">
        {" "}
        {description}{" "}
      </p>
    </div>
  );
};

export default HeroSection;
