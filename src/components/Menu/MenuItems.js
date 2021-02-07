import React from "react";
import { Link } from "react-scroll";
import { Menu, Grid } from "antd";

const { useBreakpoint } = Grid;
const { Item } = Menu;

function MenuItems() {
  const { lg } = useBreakpoint();

  const arrayMenu = ["Home", "About", "Service", "Work", "Resume", "Contact"];
  return (
    <Menu
      theme={lg ? "dark" : "light"}
      defaultSelectedKeys={["2"]}
      className={lg ? "text-right" : "text-center"}
      mode={lg ? "horizontal" : "inline"}
    >
      {arrayMenu.map((e) => (
        // eslint-disable-next-line react/no-array-index-key
        <Item className="font-s-18" key={e}>
          <Link
            activeClass="active"
            to={e}
            spy
            smooth
            offset={-70}
            duration={500}
            className="link"
          >
            {e}
          </Link>
        </Item>
      ))}
    </Menu>
  );
}

export default MenuItems;
