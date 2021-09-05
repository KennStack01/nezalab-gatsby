/* eslint-disable react/prop-types */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import HeroSection2 from "../components/HeroSection2";

import Layout from "../components/layout";
import SEO from "../components/seo";
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
      }
    }
  `);

  const description =
    data.datoCmsAboutPageContent.descriptionNode.internal.content;
  const pictureUrl = data.datoCmsAboutPageContent.heroPicture.url;

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
        <h1 className="text-4xl sm:text-7xl text-gray-900 font-bold absolute z-40 mt-12 md:mt-24 ml-5 sm:ml-10">
          {" "}
          About <br /> <span className="text-jaffa-500"> Neza Lab.</span>{" "}
        </h1>
        <div className="">
          <HeroSection2 description={description} picture={pictureUrl} />
        </div>
      </div>
      <section className="">
        {/* <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        /> */}
      </section>
    </Layout>
  );
}

export default About;
