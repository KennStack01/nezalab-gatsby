/* eslint-disable react/prop-types */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import HeroSection4 from "../components/HeroSection4";
import { useSpring, animated } from "react-spring";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TeamMember from "../components/Team/TeamMember";

function Team() {
  const data = useStaticQuery(graphql`
    query {
      datoCmsTeamPageContent {
        heroPicture {
          filename
          url
        }
        headingPart1
        headingPart2
        description
        developmentPrincipleForTeamPage
      }

      allDatoCmsTeamMember(sort: { fields: meta___createdAt }) {
        edges {
          node {
            profilePicture {
              url
            }
            name
            role
            memberSRoleDescriptionNode {
              internal {
                content
              }
            }
          }
        }
      }
    }
  `);

  const description = data.datoCmsTeamPageContent.description || "";
  const pictureUrl = data.datoCmsTeamPageContent.heroPicture.url;
  const headingPart1 = data.datoCmsTeamPageContent.headingPart1;
  const headingPart2 = data.datoCmsTeamPageContent.headingPart2;

  const teamMembers = data.allDatoCmsTeamMember.edges;
  const developmentPrinciple =
    data.datoCmsTeamPageContent.developmentPrincipleForTeamPage;

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
          {headingPart1}
          <br /> <span className="text-jaffa-500">{headingPart2}</span>{" "}
        </animated.h1>
        <div className="">
          <HeroSection4 description={description} picture={pictureUrl} />
        </div>
      </div>
      <section className="">
        <div className="my-7 text-center text-black">
          <h1 className="font-bold text-xl md:text-3xl">
            Our Development principle
          </h1>
          <p>{developmentPrinciple}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 place-content-center mx-2 md:mx-14">
          {teamMembers.map(({ node: member }) => (
            <div
              key={member.id}
              className="flex flex-col text-black mx-3 md:mx-12 my-5"
            >
              <TeamMember
                key={member.id}
                pictureURL={member.profilePicture.url}
                name={member.name}
                role={member.role}
                description={member.memberSRoleDescriptionNode.internal.content}
              />
            </div>
            // <div
            //   key={member.id}
            //   className="flex flex-col text-black mx-3 md:mx-12 my-5"
            // >
            //   <img
            //     alt={member.name}
            //     className="relative object-cover"
            //     src={member.profilePicture.url}
            //     placeholder="blurred"
            //     loading="lazy"
            //     // layout="fixed"
            //   />
            //   <h2 className="font-semibold md:font-bold mx-auto text-xs md:text-lg text-center">
            //     {" "}
            //     {member.name}{" "}
            //   </h2>
            //   <p className="font-medium mx-auto text-xs md:text-md text-center">
            //     {" "}
            //     {member.role}{" "}
            //   </p>
            // </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Team;
