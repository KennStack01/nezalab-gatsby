/* eslint-disable react/prop-types */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import HeroSection3 from "../components/HeroSection3";
import { useSpring, animated } from "react-spring";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Product from "../components/Product/Product";
import Service from "../components/Product/Service";

function Products() {
  const data = useStaticQuery(graphql`
    query {
      datoCmsProductsPageContent {
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
      allDatoCmsProduct {
        edges {
          node {
            logo {
              url
            }
            name
            descriptionNode {
              internal {
                content
              }
            }
            allTheDetailsNode {
              internal {
                content
              }
            }
            id
            websiteLink
          }
        }
      }
      allDatoCmsService {
        edges {
          node {
            logo {
              url
            }
            nameOfService
            descriptionNode {
              internal {
                content
              }
            }
            detailsNode {
              internal {
                content
              }
            }
            id
            websiteLink
          }
        }
      }
    }
  `);

  const description =
    data.datoCmsProductsPageContent.descriptionNode.internal.content;
  const pictureUrl = data.datoCmsProductsPageContent.heroPicture.url;

  // Product
  // const productPictureUrl = data.allDatoCmsProduct.edges.node.logo.url;
  // const productName = data.allDatoCmsProduct.edges.node.name;
  // const productDescription =
  //   data.allDatoCmsProduct.edges.node.descriptionNode.internal.content;
  // const productDetails =
  //   data.allDatoCmsProduct.edges.node.allTheDetailsNode.internal.content;

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
        title="Products"
      />
      <div>
        <animated.h1
          style={fade}
          className="text-3xl sm:text-6xl text-gray-900 font-bold absolute z-40 mt-6 md:mt-24 ml-5 sm:ml-10"
        >
          {" "}
          Our <br />{" "}
          <span className="text-jaffa-500">
            {" "}
            Products <br /> & Services.
          </span>{" "}
        </animated.h1>
        <div className="">
          <HeroSection3 description={description} picture={pictureUrl} />
        </div>
      </div>
      <section className="text-black">
        <div className="my-4 md:my-8 mx-8 md:mx-40">
          <div className="mx-auto grid grid-cols-1 divide-y divide-yellow-500">
            <h1 className="text-xl md:text-3xl font-semibold md:font-bold">
              Products
            </h1>
            <div className="md:grid grid-cols-2 place-content-center mx-auto">
              {data.allDatoCmsProduct.edges.map(({ node: product }) => (
                <div key={product.id}>
                  <Product
                    pictureUrl={product.logo.url}
                    name={product.name}
                    description={product.descriptionNode.internal.content}
                    productDetails={product.allTheDetailsNode.internal.content}
                    link={product.websiteLink}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-4 md:my-8 mx-40">
          <div className="mx-auto grid grid-cols-1 divide-y divide-yellow-500">
            <h1 className="text-xl md:text-3xl font-semibold md:font-bold">
              Services
            </h1>
            <div className="md:grid grid-cols-2 place-content-center mx-auto">
              {data.allDatoCmsService.edges.map(({ node: service }) => (
                <div key={service.id}>
                  <Service
                    pictureUrl={service.logo.url}
                    name={service.nameOfService}
                    description={service.descriptionNode.internal.content}
                    serviceDetails={service.detailsNode.internal.content}
                    link={service.websiteLink}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Products;
