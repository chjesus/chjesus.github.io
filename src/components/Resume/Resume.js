import React from "react";
import { Timeline, Grid } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";

const { useBreakpoint } = Grid;

function Resume() {
  const { lg } = useBreakpoint();

  const IconFont = createFromIconfontCN({
    scriptUrl: [
      "//at.alicdn.com/t/font_2332453_gdtlfyfalze.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
    ],
  });

  return (
    <div className="resume" name="Resume">
      <div className="container">
        <Timeline mode={lg ? "alternate" : "left"} className="resume_timeline">
          <Timeline.Item
            className="resume_timeline-item"
            dot={
              <IconFont type="icon-work0" className="resume_timeline-icon" />
            }
          >
            <p className="date">(June 2020 - Actually)</p>
            <p className="title">Frontend Developer Independient in UpWork</p>
            <p className="description">
              Currently, I work as an independent frontend developer, on the
              upwork platform, using technologies such as ReactJs, Redux,
              Redux-thunk, HTML, CSS, SCSS, JS.
            </p>
          </Timeline.Item>
          <Timeline.Item
            className="resume_timeline-item"
            dot={
              <IconFont type="icon-work0" className="resume_timeline-icon" />
            }
          >
            <p className="date">(February 2020 - April 2020)</p>
            <p className="title">Frontend Developer in Villartechnologies</p>
            <p className="description">
              Work as a frontend developer, using some technologies like
              Angular, HTML, CSS JS, Boostrap and Microservices like Docker
            </p>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}

export default Resume;
