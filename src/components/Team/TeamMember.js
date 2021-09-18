/* eslint-disable react/prop-types */
import React from "react";

function TeamMember({ name, pictureURL, role, description }) {
  const [showText, setShowText] = React.useState(false);

  return (
    <div
      onMouseOver={() => setShowText(true)}
      onMouseOut={() => setShowText(false)}
      className=""
    >
      <p className={showText ? "" : "hidden"}> {description} </p>
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
