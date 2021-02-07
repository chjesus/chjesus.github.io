import React from "react";
import {
  Row,
  Col,
  Progress,
  // Button,
} from "antd";
import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  // DownloadOutlined,
  createFromIconfontCN,
} from "@ant-design/icons";

import Tags from "../Tags";
import porfileIMG from "../../assets/porfile.svg";

function About() {
  const IconFont = createFromIconfontCN({
    scriptUrl: ["//at.alicdn.com/t/font_2332453_o0wiipi8jrd.js"],
  });

  const tags = [
    {
      id: 3,
      icon: <MailOutlined />,
      info: "chjesussao@gmail.com",
    },
    { id: 2, icon: <PhoneOutlined />, info: "+58 424 7258343" },
    {
      id: 1,
      icon: <EnvironmentOutlined />,
      info: "Venezuela",
    },
  ];
  const skills = [
    { id: 0, icon: <IconFont type="icon-html" />, title: "HTML", percent: 90 },
    { id: 1, icon: <IconFont type="icon-pug" />, title: "PUG", percent: 50 },
    { id: 2, icon: <IconFont type="icon-css" />, title: "CSS", percent: 70 },
    { id: 3, icon: <IconFont type="icon-scss" />, title: "SCSS", percent: 70 },
    {
      id: 4,
      icon: <IconFont type="icon-JavaScript" />,
      title: "JavaScript",
      percent: 50,
    },
    {
      id: 5,
      icon: <IconFont type="icon-webpack" />,
      title: "Webpack",
      percent: 35,
    },
    {
      id: 6,
      icon: <IconFont type="icon-React" />,
      title: "ReactJs",
      percent: 50,
    },
    {
      id: 7,
      icon: <IconFont type="icon-redux" />,
      title: "Redux",
      percent: 40,
    },
    { id: 8, icon: <IconFont type="icon-Vue" />, title: "VueJs", percent: 30 },
    {
      id: 9,
      icon: <IconFont type="icon-Angular" />,
      title: "Angular",
      percent: 20,
    },
  ];

  console.log(tags);
  return (
    <div className="about" name="About">
      <div className="container">
        <Row gutter={[32, 32]}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }}>
            <picture className="about_image">
              <img src={porfileIMG} alt="img de perfil" />
            </picture>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }}>
            <div className="about_content">
              <h4>About me</h4>
              <h3>Im Professional web Developer</h3>
              <p>
                I am a Junior Front-end developer with over 6 months of
                experience working with HTML, CSS, Javascript, ReactJS, VueJs
                and bootstraps. I also have experience with style preprocessors,
                sass, scss, less. Committed to the passion of making things
                beautiful and efficient. I am a person who day by day wants to
                learn and demonstrate the knowledge that I have acquired to be a
                great developer.
              </p>
              <p>
                Much of my experience is based on CSS and Frontend skills as
                well as Javascript using ReactJs.
              </p>
              <div className="about_content-skills">
                <h4>Skills</h4>
                {skills.map((e) => (
                  <div key={e.id} style={{ marginBottom: ".5rem" }}>
                    <h5>
                      <span>{e.icon}</span>
                      {e.title}
                      {":"}
                    </h5>
                    <Progress percent={e.percent} status="active" />
                  </div>
                ))}
              </div>
              <div className="about_content_details">
                <Row gutter={[12, 12]} justify="center">
                  {tags.map((e) => (
                    <Tags key={e.id} icon={e.icon} info={e.info} />
                  ))}
                </Row>
              </div>

              {/* <div className="about_content_cv">
                <Button
                  type="primary"
                  shape="round"
                  icon={<DownloadOutlined />}
                  size="large"
                >
                  Download Resume
                </Button>
              </div> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
