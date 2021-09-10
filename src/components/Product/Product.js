/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";

const Product = ({ pictureUrl, name, description, productDetails, slug }) => {
  const fade = useSpring({
    from: { opacity: 1 },
    to: { opacity: 1 },
    delay: 400,
  });
  return (
    <div className="flex flex-col my-14 md:my-8 bg-gray-100 p-4 rounded-lg md:mx-5 hover:shadow">
      <div className="mx-auto text-center">
        {/* Picture */}
        <animated.div style={fade}>
          <img
            alt="Contact Phone Picture"
            className="relative object-cover w-20 md:w-auto my-2 md:my-4 mx-auto"
            src={pictureUrl}
            placeholder="blurred"
            loading="lazy"
            layout="fixed"
          />
        </animated.div>
        {/* Name */}
        <h3 className="text-md md:text-xl font-medium md:font-semibold mx-auto">
          {name}
        </h3>
      </div>
      {/* Description */}
      <p className="text-md md:text-lg font-normal md:font-light mx-4 md:mx-8 my-2 md:my-4 text-justify">
        {" "}
        {description}{" "}
      </p>
      <p className="hidden"> {productDetails} </p>
      <button className="bg-gray-600 hover:bg-jaffa py-2 px-3 my-3 md:my-4 text-white font-semibold self-center rounded">
        <Link to={`/products/${slug}`}>Discover</Link>
      </button>
    </div>
  );
};

export default Product;
