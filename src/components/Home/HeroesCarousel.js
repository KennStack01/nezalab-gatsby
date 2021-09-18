import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Carousel, {
  arrowsPlugin,
  autoplayPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const MyCarousel = () => {
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

  const src1 =
    data.allDatoCmsHomePageContent.edges[0].node.heroPicturesGallery[0].url;
  console.log(src1);

  return (
    <div>
      <Carousel
        plugins={[
          {
            resolve: arrowsPlugin,
            options: {
              arrowLeft: (
                <button>{/* <Icon name="angle-double-left" /> */}</button>
              ),
              arrowLeftDisabled: (
                <button>{/* <Icon name="angle-left" /> */}</button>
              ),
              arrowRight: (
                <button>{/* <Icon name="angle-double-right" /> */}</button>
              ),
              arrowRightDisabled: (
                <button>{/* <Icon name="angle-right" /> */}</button>
              ),
              addArrowClickHandler: true,
            },
          },
          //   "autoplay",
          "infinite",
          {
            resolve: autoplayPlugin,
            options: {
              interval: 3000,
            },
          },
        ]}
        animationSpeed={500}
      >
        {data.allDatoCmsHomePageContent.edges[0].node.heroPicturesGallery.map(
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
        )}

        {/* {data.allDatoCmsHomePageContent.edges.map((picture) => (
            <img
            key={picture.node.heroPicturesGallery.filename}
            alt="Hero picture"
            className="relative object-cover w-full"
            src={picture.node.heroPicturesGallery.url}
            placeholder="blurred"
            loading="lazy"
            // layout="fixed"
            />
        ))} */}
      </Carousel>
    </div>
  );
};

export default MyCarousel;
