import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBusinessTime } from "react-icons/fa";

// Two colors:
// 1: iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
// 2: iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
const Timeline = () => {
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsTimelineContent(sort: { fields: date, order: ASC }) {
        edges {
          node {
            descriptionContent
            date(locale: "en", formatString: "MMMM YYYY")
            id
          }
        }
        totalCount
      }
    }
  `);

  return (
    <div className="font-semibold bg-gray-100 px-2 md:p-5 rounded-md">
      <VerticalTimeline className="text-black">
        {data.allDatoCmsTimelineContent.edges.map((timeline) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={timeline.node.date}
            iconStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            icon={<FaBusinessTime />}
            key={timeline.node.id}
          >
            <h3 className="vertical-timeline-element-title"></h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>{timeline.node.descriptionContent}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
