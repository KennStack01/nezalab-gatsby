import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";

const Form = () => {
  return (
    <div>
      <div className="flex items-center w-full">
        <div className="w-full bg-gray-100 rounded p-8 m-4 md:max-w-sm md:mx-auto">
          <form
            className="mb-4 md:flex md:flex-wrap md:justify-between"
            method="post"
            action={`https://getform.io/f/e2419428-661a-4a22-acb4-d246cf183763`}
          >
            <div className="flex flex-col mb-4 md:w-full">
              <label
                className="mb-2 tracking-wide font-bold text-md md:text-lg text-gray-700"
                htmlFor="first_name"
              >
                Your Name
              </label>
              <input
                className="py-2 px-3 rounded-xl text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-jaffa-600 focus:ring-opacity-50"
                type="text"
                name="first_name"
                id="first_name"
                placeholder="TWIZERE PACIFIQUE"
                required
              />
            </div>
            <div className="flex flex-col mb-4 md:w-full">
              <label
                className="mb-2 font-bold text-md md:text-lg text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="py-2 px-3 rounded-xl text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-jaffa-600 focus:ring-opacity-50"
                type="email"
                name="email"
                id="email"
                placeholder="info@nezalab.com"
                required
              />
            </div>
            <div className="flex flex-col mb-4 md:w-full">
              <label
                className="mb-2 tracking-wide font-bold text-md md:text-lg text-gray-700"
                htmlFor="business_name"
              >
                Business Name
              </label>
              <input
                className="py-2 px-3 rounded-xl text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-jaffa-600 focus:ring-opacity-50"
                type="text"
                name="business_name"
                id="business_name"
                placeholder="Neza LAB"
              />
            </div>
            {/* <div className="flex flex-col mb-4 md:w-full">
              <div className="mt-4">
                <span className="mb-2 font-bold text-md md:text-lg text-gray-700">
                  Project Type
                </span>
                <div className="mt-2 grid grid-cols-2 text-sm font-normal">
                  <label className="inline-flex items-center ml-1">
                    <input
                      type="radio"
                      className="form-radio cursor-pointer"
                      name="accountType"
                      value="E-Commerce"
                    />
                    <span className="ml-2 cursor-pointer">E-Commerce</span>
                  </label>
                  <label className="inline-flex items-center ml-1">
                    <input
                      type="radio"
                      className="form-radio cursor-pointer"
                      name="accountType"
                      value="Marketing"
                    />
                    <span className="ml-2 cursor-pointer">Marketing</span>
                  </label>
                  <label className="inline-flex items-center ml-1">
                    <input
                      type="radio"
                      className="form-radio cursor-pointer"
                      name="accountType"
                      value="Business"
                    />
                    <span className="ml-2 cursor-pointer">Business</span>
                  </label>
                  <label className="inline-flex items-center ml-1">
                    <input
                      type="radio"
                      className="form-radio cursor-pointer"
                      name="accountType"
                      value="Product"
                    />
                    <span className="ml-2 cursor-pointer">Product</span>
                  </label>
                  <label className="inline-flex items-center ml-1">
                    <input
                      type="radio"
                      className="form-radio cursor-pointer"
                      name="accountType"
                      value="Landing"
                    />
                    <span className="ml-2 cursor-pointer">Landing Page</span>
                  </label>
                  <label className="inline-flex items-center ml-1">
                    <input
                      type="radio"
                      className="form-radio cursor-pointer"
                      name="accountType"
                      value="Other"
                    />
                    <span className="ml-2 cursor-pointer">Other Type</span>
                  </label>
                </div>
              </div>
            </div> */}

            <div className="flex flex-col mt-4 md:w-full">
              <label
                className="mb-2 font-bold text-md md:text-lg text-gray-700"
                htmlFor="message"
              >
                How can we help?
              </label>
              <textarea
                name="message"
                id="message"
                className="resize-none p-2 h-36 rounded focus:outline-n border-none focus:ring-2 focus:ring-jaffa-600 focus:ring-opacity-50"
                placeholder="We are here to help you with your Business. Please describe a little bit"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="mt-10 md:mx-auto">
              <button
                type="submit"
                className="flex flex-row mx-auto justify-evenly text-white bg-jaffa-500 hover:bg-jaffa-700 font-bold py-4 md:py-2 px-6 text-xl rounded-md"
              >
                <h2 className="my-auto">Send {` `}</h2>
                <RiSendPlaneFill className="text-3xl my-auto" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
