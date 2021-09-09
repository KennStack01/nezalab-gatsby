import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUserGraduate, FaTools } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";

const Timeline = () => {
  return (
    <div className="font-semibold bg-gray-100 px-2 md:p-5 rounded-md">
      <VerticalTimeline className="text-black">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
          }}
          icon={<FaUserGraduate />}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            It all started with a student who came to China to study and base on
            all the challenges faced by foreigners in China, he decided to help
            lend a helping hand by solving most of thess problems.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaTools />}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            Our first product was developed when the CEO was still in school. He
            created Agakoti to meet the pressing need of his friends. It is
            currently one of the best product in China. Agakoti was launched in
            March 2018 and it has been productive ever since.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdBusinessCenter />}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            With the CEO from Rwanda,the head office was established and
            registered in Rwanda in June 2019.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=""
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<RiTeamFill />}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            The technological advancement of the chinese makes it perfect to
            create a company in China. Based on this, the company was registered
            in China and officially started operating. It is currently with a
            team of 9 staffs.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<HiShoppingCart />}
        >
          <h3 className="vertical-timeline-element-title"></h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>
            In 2021, we launched our second product, Nezabuy. It is an
            E-commerce platform which allows foreigners in China to get all
            their local product easier and faster.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      ;
    </div>
  );
};

export default Timeline;
