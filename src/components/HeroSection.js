/* eslint-disable react/prop-types */
import React from "react";
import { useSpring, animated } from "react-spring";
import HeroesCarousel from "./Home/HeroesCarousel";

const HeroSection = ({ description }) => {
  const fade = useSpring({
    from: { opacity: 0, marginTop: -100 },
    to: { opacity: 2, marginTop: 300 },
    delay: 700,
  });

  return (
    <div className="mt-0">
      <animated.p
        style={fade}
        className="absolute text-xs md:text-lg font-semibold z-40 mt-24 md:mt-72 ml-3 md:ml-10 w-1/2 invisible md:visible"
      >
        {" "}
        {description}{" "}
      </animated.p>
      {/* {data.allDatoCmsHomePageContent.edges.map((picture) => (
          // <div
          //   key={picture.node.heroPicturesGallery.filename}
          //   style={{
          //     backgroundImage: `url(${picture.node.heroPicturesGallery.url})`,
          //   }}
          // ></div>
          // <img
          //   key={picture.node.heroPicturesGallery.filename}
          //   alt="Hero picture"
          //   className="relative object-cover w-full"
          //   src={picture.node.heroPicturesGallery.url}
          //   placeholder="blurred"
          //   loading="lazy"
          //   // layout="fixed"
          // />
        ))} */}
      <HeroesCarousel />

      <p className="text-xs text-gray-900 text-center mx-14 z-40 mt-10 mb-8 xs:visible md:invisible">
        {" "}
        {description}{" "}
      </p>
    </div>
  );
};

export default HeroSection;
