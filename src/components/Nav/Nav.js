import React, { useState } from "react";
import { Row, Col, Drawer, Button } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import MenuItems from "../Menu";

function Nav(props) {
  const { menu, width } = props;

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className={`nav_bar ${menu}`}>
      <div className="container">
        <Row align="middle">
          <Col span={8}>
            <h1 className="nav_bar-title font-w-900 text-left">CHJESUS</h1>
          </Col>
          <Col
            span={16}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            {width < 992 ? (
              <>
                <Button icon={<MenuUnfoldOutlined />} onClick={showDrawer} />
                <Drawer
                  title=""
                  placement="right"
                  closable={false}
                  onClose={onClose}
                  visible={visible}
                >
                  <MenuItems />
                </Drawer>
              </>
            ) : (
              <MenuItems />
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Nav;
