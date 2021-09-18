/* eslint-disable react/prop-types */
import React from "react";
import { useSpring, animated } from "react-spring";

const HeroSection2 = ({ description, picture }) => {
  const fade = useSpring({
    from: { opacity: 0, marginLeft: -100 },
    to: { opacity: 2, marginLeft: 40 },
    delay: 700,
  });

  return (
    <div className="mt-0">
      <animated.p
        style={fade}
        className="absolute text-xs md:text-lg text-gray-900 font-semibold z-40 mt-24 md:mt-72 ml-3 md:ml-10 w-1/3 invisible md:visible"
      >
        {" "}
        {description}{" "}
      </animated.p>
      <img
        alt="Hero picture"
        className="relative object-cover w-full"
        src={picture}
        placeholder="blurred"
        loading="lazy"
        // layout="fixed"
      />
      <p className="text-xs text-gray-900 text-center mx-14 z-40 mt-10 mb-8 xs:visible md:invisible">
        {" "}
        {description}{" "}
      </p>
    </div>
  );
};

export default HeroSection2;
