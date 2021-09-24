/* eslint-disable react/prop-types */
import React from "react";
import { useSpring, animated } from "react-spring";

function TeamMember({ name, pictureURL, role, description }) {
  const [showText, setShowText] = React.useState(false);

  const fade = useSpring({
    from: { marginTop: -100 },
    to: { marginTop: 180 },
    delay: 600,
  });

  return (
    <div
      onMouseOver={() => setShowText(true)}
      onMouseOut={() => setShowText(false)}
      className="relative cursor-pointer"
    >
      <animated.p
        style={fade}
        className={
          showText
            ? "absolute z-30 bg-white text-gray-800 p-1 md:p-3 rounded-b-md shadow-md text-xs md:text-sm backdrop-filter backdrop-blur-lg"
            : "hidden"
        }
      >
        {" "}
        {description}{" "}
      </animated.p>
      <img
        alt={name}
        className="relative object-cover"
        src={pictureURL}
        placeholder="blurred"
        loading="lazy"
        // layout="fixed"
      />
      <h2 className="font-semibold md:font-bold mx-auto text-xs md:text-lg text-center">
        {" "}
        {name}{" "}
      </h2>
      <p className="font-medium mx-auto text-xs md:text-md text-center">
        {" "}
        {role}{" "}
      </p>
    </div>
  );
}

export default TeamMember;
