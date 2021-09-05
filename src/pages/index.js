/* eslint-disable react/prop-types */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import HeroSection from "../components/HeroSection";

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
        descriptionNode {
          internal {
            content
          }
        }
      }
    }
  `);

  const description =
    data.datoCmsHomePageContent.descriptionNode.internal.content;
  const pictureUrl = data.datoCmsHomePageContent.heroPicture.url;

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
        <h1 className="text-4xl sm:text-7xl font-bold absolute z-40 mt-12 md:mt-24 ml-5 sm:ml-10">
          {" "}
          We are <br /> <span className="text-jaffa-500">
            {" "}
            Productive.
          </span>{" "}
        </h1>
        <div className="">
          <HeroSection description={description} picture={pictureUrl} />
        </div>
      </div>
      <section className="">
        <div className="flex flex-row justify-around text-black text-xl md:text-4xl font-semibold my-5 md:my-10">
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
        <div className="flex flex-col my-14 md:my-24 text-black">
          <h1 className="text-lg md:text-3xl font-semibold md:font-bold mx-auto ">
            Our Development principle
          </h1>
          <p className="mx-3 my-3 md:my-8 md:mx-60 text-center">
            We are so thrilled and proud of following the prototype principles
            in our product development lifecycle due to the top quality
            functionality and low risks of failure
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
