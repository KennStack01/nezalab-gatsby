/* eslint-disable react/prop-types */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import HeroSection2 from "../components/HeroSection2";
import { useSpring, animated } from "react-spring";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Timeline from "../components/About/Timeline";
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function About() {
  const data = useStaticQuery(graphql`
    query {
      datoCmsAboutPageContent {
        heroPicture {
          filename
          url
        }
        descriptionNode {
          internal {
            content
          }
        }
        timelinePicture {
          url
        }
      }
    }
  `);

  const description =
    data.datoCmsAboutPageContent.descriptionNode.internal.content;
  const pictureUrl = data.datoCmsAboutPageContent.heroPicture.url;
  // const timelinePictureUrl = data.datoCmsAboutPageContent.timelinePicture.url;

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
        title="About"
      />
      <div>
        <animated.h1
          style={fade}
          className="text-4xl sm:text-7xl text-gray-900 font-bold absolute z-40 mt-12 md:mt-24 ml-5 sm:ml-10"
        >
          {" "}
          About <br /> <span className="text-jaffa-500"> Neza Lab.</span>{" "}
        </animated.h1>
        <div className="">
          <HeroSection2 description={description} picture={pictureUrl} />
        </div>
      </div>
      <section className="">
        <div className="flex flex-col md:flex-row md:justify-around md:bg-gray-200 text-black w-full py-4 md:py-8">
          <div className="flex flex-col justify-center my-4 md:my-auto shadow rounded-md md:shadow-none mx-4">
            <h1 className="font-bold text-2xl md:text-3xl text-center">
              <span className="text-jaffa-500">Our </span> Mission
            </h1>
            <p className="text-center font-light mx-6 md:mx-16 my-3 md:my-6 text-sm md:text-md">
              Our mission is to create possibilities and opportunities in
              communities with the use of innovative technological products and
              services.
            </p>
          </div>
          <div className="flex flex-col justify-center  my-4 md:my-auto shadow rounded-md md:shadow-none mx-4">
            <h1 className="font-bold text-2xl md:text-3xl text-center">
              <span className="text-jaffa-500">Our </span> Vision
            </h1>
            <p className="text-center font-light mx-6 md:mx-16 my-3 md:my-6 text-sm md:text-md">
              Our vision is to make an impact in people’s lives by creating
              innovative technological tools for their problems and needs.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="my-10 md:my-28 mx-auto">
          <h1 className="text-xl md:text-3xl my-5 md:my-8 font-bold text-black text-center">
            History of Neza Lab
          </h1>
          {/* Timeline Picture and Details */}
          {/* <div className="flex flex-row">
            <img
              alt="Timeline picture"
              className="relative object-cover w-full"
              src={timelinePictureUrl}
              placeholder="blurred"
              loading="lazy"
              // layout="fixed"
            />
            <div className="absolute text-black -mt-90 mr-0">
              <p>
                It all started with a student who came to China to study and
                base on all the challenges faced by foreigners in China, he
                decided to help lend a helping hand by solving most of thess
                problems.
              </p>
            </div>
          </div> */}

          <Timeline />
        </div>
      </section>
    </Layout>
  );
}

export default About;
