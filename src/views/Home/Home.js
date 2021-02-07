import React, { useEffect, useState } from "react";

import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import { Layout } from "antd";

import Api from "../../utils/Api";

import Particle from "../../components/Particle";
import Nav from "../../components/Nav";
import HeaderContent from "../../components/HeaderContent";
import About from "../../components/About";
import Services from "../../components/Services";
import Hire from "../../components/Hire";
import Work from "../../components/Work";
import Resume from "../../components/Resume";
import Experience from "../../components/Experience";
import Contact from "../../components/Contact";
import FooterContent from "../../components/FooterContent";
import Spinner from "../../components/Spinner";

const { Header, Content } = Layout;
function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [data, setData] = useState(null);
  const [certificates, setCertificates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    (async function () {
      try {
        const response = await Api({
          method: "GET",
          url: "https://api.github.com/users/chjesus/repos?per_page=400",
        });
        const response1 = await Api({
          method: "GET",
          url:
            "https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@chjesus",
        });

        Promise.all([response, response1]).then((values) => {
          const date = values[0].data.filter(
            (element) => element.homepage && !element.fork
          );
          setData(date);
          setCertificates(values[1].data.userData.courses);
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useScrollPosition(
    ({ currPos }) => {
      const isShow = currPos.y < 0;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    100
  );

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="wrapper">
      <Header className="home">
        <Nav width={width} menu={hideOnScroll ? "menu-shrink" : ""} />
        <HeaderContent />
        <Particle />
      </Header>
      <Content>
        <About />
      </Content>
      <Content>
        <Services />
      </Content>
      <Content>
        <Hire />
      </Content>
      <Content>
        <Work data={data} certificates={certificates} />
      </Content>
      <Content>
        <Experience />
      </Content>
      <Content>
        <Resume />
      </Content>
      <Content>
        <Contact />
      </Content>
      <FooterContent />
    </div>
  );
}

export default Home;
