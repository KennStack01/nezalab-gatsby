import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// const items = [
//   <div className="item" data-value="1">
//     1
//   </div>,
//   <div className="item" data-value="2">
//     2
//   </div>,
//   <div className="item" data-value="3">
//     3
//   </div>,
//   <div className="item" data-value="4">
//     4
//   </div>,
//   <div className="item" data-value="5">
//     5
//   </div>,
// ];

const Carousel = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHomePageContent {
        edges {
          node {
            heroPicturesGallery {
              url
              filename
            }
          }
        }
      }
    }
  `);

  const items =
    data.allDatoCmsHomePageContent.edges[0].node.heroPicturesGallery.map(
      (picture) => {
        return (
          <img
            key={picture.filename}
            src={picture.url}
            alt={picture.filename}
            placeholder="blurred"
            loading="lazy"
            className="relative object-cover w-full"
          />
        );
      }
    );

  return (
    <AliceCarousel
      autoPlay
      //   autoPlayControls
      autoPlayStrategy="none"
      autoPlayInterval={1000}
      animationDuration={1000}
      animationType="fadeout"
      infinite
      touchTracking={true}
      disableDotsControls
      disableButtonsControls
      items={items}
    />
  );
};

export default Carousel;
