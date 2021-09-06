/* eslint-disable react/prop-types */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import HeroSection4 from "../components/HeroSection4";
import { useSpring, animated } from "react-spring";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function Team() {
  const data = useStaticQuery(graphql`
    query {
      datoCmsTeamPageContent {
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
    data.datoCmsTeamPageContent.descriptionNode.internal.content;
  const pictureUrl = data.datoCmsTeamPageContent.heroPicture.url;

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
        title="Team"
      />
      <div>
        <animated.h1
          style={fade}
          className="text-4xl sm:text-6xl text-gray-900 font-bold absolute z-40 mt-12 md:mt-24 ml-5 sm:ml-10"
        >
          {" "}
          Our <br /> <span className="text-jaffa-500"> Team.</span>{" "}
        </animated.h1>
        <div className="">
          <HeroSection4 description={description} picture={pictureUrl} />
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

export default Team;
