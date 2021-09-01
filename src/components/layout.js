import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";

import Header from "./header";

import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";

import Logo from "../assets/NezaLab-Logo-white.svg";
function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-white">
      <Header />

      <main className="flex-1 w-full max-w-4xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <footer
        className="py-8 px-8 divide-y divide-white"
        style={{ background: "#58595B" }}
      >
        <nav className="max-w-4xl p-4 mx-auto text-sm md:p-8">
          <div className="flex flex-row justify-between">
            <Logo width={100} className="text-white" />
            <div className="flex flex-col">
              <Link to="/" className="my-2 hover:underline">
                Home
              </Link>
              <Link to="/about" className="my-2 hover:underline">
                About us
              </Link>
            </div>
            <div className="flex flex-col">
              <Link to="/products" className="my-2 hover:underline">
                Products
              </Link>
              <Link to="/team" className="my-2 hover:underline">
                Team
              </Link>
            </div>
            <div className="flex flex-col justify-center md:-mt-8">
              <h3 className="mx-auto mb-2">Connect with us</h3>
              <div className="flex flex-row">
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
