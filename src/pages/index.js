/* eslint-disable react/prop-types */
import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import HeroSection from "../components/HeroSection";
import { useSpring, animated } from "react-spring";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Layout from "../components/layout";
import SEO from "../components/seo";

// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      datoCmsHomePageContent {
        heroPicture {
          filename
          url
        }
        headingPart1
        headingPart2
        descriptionNode {
          internal {
            content
          }
        }
        developmentPicture {
          filename
          url
        }
        contactPicture {
          filename
          url
        }
        developmentPrincipleNode {
          internal {
            content
          }
        }
      }
    }
  `);

  const description =
    data.datoCmsHomePageContent.descriptionNode.internal.content;
  const headingPart1 = data.datoCmsHomePageContent.headingPart1;
  const headingPart2 = data.datoCmsHomePageContent.headingPart2;
  // const pictureUrl = data.datoCmsHomePageContent.heroPicture.url;
  const pictureDevelopment = data.datoCmsHomePageContent.developmentPicture.url;
  const pictureContact = data.datoCmsHomePageContent.contactPicture.url;
  const developmentPrinciple =
    data.datoCmsHomePageContent.developmentPrincipleNode.internal.content;

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 400,
  });

  return (
    <Layout>
      <SEO
        keywords={[
          `nezalab`,
          `company`,
          `Neza Lab`,
          `agakoti`,
          "business china",
          "technology africa",
          "multinational",
          "neza lab",
          "agakoti vpn",
          "vpn china",
          "business consultancy",
          "Network Security",
          "E-Commerce",
          "finance",
          "startup china",
          "africa network Business",
        ]}
        title="Home"
      />
      <div>
        <animated.h1
          style={fade}
          className="text-4xl sm:text-7xl font-bold absolute z-40 mt-12 md:mt-24 ml-5 sm:ml-10"
        >
          {" "}
          {headingPart1} <br />{" "}
          <span className="text-jaffa-500"> {headingPart2}</span>{" "}
        </animated.h1>
        <div className="">
          <HeroSection description={description} />
        </div>
      </div>
      <section className="">
        <div className="flex flex-row justify-around text-black text-xl md:text-4xl font-semibold mt-5 md:my-10">
          <h1>
            Reliable<span className="text-jaffa-500">.</span>
          </h1>
          <h1>
            Creative<span className="text-jaffa-500">.</span>
          </h1>
          <h1>
            Fast<span className="text-jaffa-500">.</span>
          </h1>
        </div>
        <div className="flex flex-col my-14 md:my-20 text-black">
          <h1 className="text-lg md:text-4xl font-semibold md:font-bold mx-auto ">
            Our Development principle
          </h1>
          <p className="mx-3 my-3 md:my-8 md:mx-60 text-center md:text-xl">
            {developmentPrinciple}
          </p>
        </div>
        <img
          alt="Development from Prototype picture"
          className="w-auto mx-auto my-5 md:my-10"
          src={pictureDevelopment}
          placeholder="blurred"
          loading="lazy"
          layout="fixed"
        />
        <div className="flex flex-col md:flex-row my-auto mx-auto -mb-7 justify-around bg-gray-200 text-black w-full">
          <div className="flex flex-col md:my-auto mx-auto md:mx-10 mt-6">
            <h1 className="font-bold text-3xl text-center md:text-5xl">
              Contact us
            </h1>
            <p className="text-lg">Get in touch with Neza Lab now.</p>
            <Link
              to="/contact"
              className="my-2 py-2 bg-gray-800 hover:bg-gray-900 text-white text-center font-semibold w-full"
            >
              Talk with us
            </Link>
          </div>
          <animated.div style={fade}>
            <img
              alt="Contact Phone Picture"
              className="relative object-cover w-auto my-5 md:my-10"
              src={pictureContact}
              placeholder="blurred"
              loading="lazy"
              layout="fixed"
            />
          </animated.div>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
