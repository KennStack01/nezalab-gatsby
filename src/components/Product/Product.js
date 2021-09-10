/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
// import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import { FiExternalLink } from "react-icons/fi";

const Product = ({ pictureUrl, name, description, productDetails, link }) => {
  const [showModal, setShowModal] = React.useState(false);

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
      {/* <button className="bg-gray-600 hover:bg-jaffa py-2 px-3 my-3 md:my-4 text-white font-semibold self-center rounded">
        <Link to={`/products/${slug}`}>Discover</Link>
      </button> */}
      <button
        className="bg-gray-600 hover:bg-jaffa py-2 px-3 my-3 md:my-4 text-white font-semibold self-center rounded ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Discover
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{name}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {productDetails}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-gray-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-jaffa text-white active:bg-jaffa-600 font-bold uppercase text-sm px-6 py-3 rounded hover:shadow shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    <div className="flex flex-row justify-between ">
                      <span>Website</span>
                      <div className="">
                        <FiExternalLink />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Product;
