/* eslint-disable react/prop-types */
import React from "react";
import { useSpring, animated } from "react-spring";

const Service = ({ pictureUrl, name, description }) => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 400,
  });
  return (
    <div>
      {/* Picture */}
      <animated.div style={fade}>
        <img
          alt="Contact Phone Picture"
          className="relative object-cover w-auto my-5 md:my-10"
          src={pictureUrl}
          placeholder="blurred"
          loading="lazy"
          layout="fixed"
        />
      </animated.div>
      {/* Name */}
      <h3 className="text-md md:text-xl font-semibold md:font-bold">{name}</h3>
      {/* Description */}
      <p className="text-md md:text-lg font-normal md:font-medium mx-auto">
        {" "}
        {description}{" "}
      </p>
    </div>
  );
};

export default Service;
