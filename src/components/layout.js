import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import Header from "./header";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";

import Logo from "../assets/NezaLab-Logo-white.svg";

function Layout({ children }) {
  // const data = useStaticQuery(graphql`
  //   query {
  //     datoCmsLogo {
  //       nezaLogo {
  //         url
  //       }
  //       blackLogo
  //     }
  //   }
  // `);

  return (
    <div className="flex flex-col min-h-screen font-sans text-white">
      <div className="top-0 sticky z-50">
        <Header />
      </div>

      <main className="flex-1 w-full mx-auto pb-4 md:pb-8">{children}</main>

      <footer
        className="md:pt-8 md:px-8 divide-y divide-white"
        style={{ background: "#58595B" }}
      >
        <nav className="md:max-w-4xl p-4 mx-auto text-sm md:p-8">
          <div className="flex md:flex-row justify-between">
            <Logo width={100} className="" />
            {/* <img
              src={data.datoCmsLogo.nezaLogo.url}
              alt={data.datoCmsLogo.blackLogo}
              width={100}
              className="text-white"
            /> */}
            <div className="flex flex-row justify-between text-md">
              <div className="flex flex-col mx-4 md:mx-16">
                <Link to="/" className="my-2 hover:underline">
                  Home
                </Link>
                <Link to="/about" className="my-2 hover:underline">
                  About us
                </Link>
              </div>
              <div className="flex flex-col mx-4 md:mx-16">
                <Link to="/products" className="my-2 hover:underline">
                  Our Products
                </Link>
                <Link to="/team" className="my-2 hover:underline">
                  Our Team
                </Link>
              </div>
            </div>
            <div className=" flex-col justify-center md:-mt-10 hidden md:flex">
              <h3 className="mx-auto mb-2">Connect with us:</h3>
              <div className="flex flex-row justify-center">
                <a
                  href="https://twitter.com/KennKIBADI"
                  target="__blank"
                  className="flex flex-row justify-center text-white "
                >
                  <div className="text-3xl md:text-4xl mx-1">
                    <AiFillTwitterCircle />
                  </div>
                </a>
                <a
                  href="https://twitter.com/KennKIBADI"
                  target="__blank"
                  className="flex flex-row justify-center text-white "
                >
                  <div className="text-3xl md:text-3xl mx-1 my-auto">
                    <SiFacebook />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* For Only Mobile UI */}
          <div className="flex flex-col justify-center mt-5 md:hidden">
            <h3 className="mx-auto mb-2 text-md">Connect with us:</h3>
            <div className="flex flex-row justify-center">
              <a
                href="https://twitter.com/KennKIBADI"
                target="__blank"
                className="flex flex-row justify-center text-white "
              >
                <div className="text-3xl md:text-4xl mx-1">
                  <AiFillTwitterCircle />
                </div>
              </a>
              <a
                href="https://twitter.com/KennKIBADI"
                target="__blank"
                className="flex flex-row justify-center text-white "
              >
                <div className="text-3xl md:text-3xl mx-1 my-auto">
                  <SiFacebook />
                </div>
              </a>
            </div>
          </div>
        </nav>
        <p className="flex flex-row justify-center text-white my-5">
          {" "}
          © Neza Lab All rights reserved.
        </p>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
