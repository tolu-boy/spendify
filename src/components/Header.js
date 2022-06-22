import React from "react";
import { Row, Col, Image, Dropdown, Menu } from "antd";
import downloads from "../images/downloads.svg";
import { DownOutlined } from "@ant-design/icons";

const Header = ({ title, dropdown }) => {
  const menu = (
    <Menu
      selectable
      // defaultSelectedKeys={["3"]}
      items={[
        {
          key: "1",
          label: "Select Country",
          disabled: true,

        },
        {
          key: "2",
          label: "Chad",
        },
        {
          key: "3",
          label: "Usa",
        },
        {
          key: "4",
          label: "Ghana",
        },
      ]}
    />
  );
  return (
    <div className="header">

{!dropdown === true && (
  <Row>
        <Col md={23} className="pl-2">
          <p className="download-p"> {title}</p>
        </Col>

        <Col md={1}>
          <Image src={downloads} preview={false} width={32} />
        </Col>
      </Row>
)}
      

      {dropdown === true && (
        <Row>
          <Col md={5} className="pl-2">
            <Dropdown overlay={menu}>
              <p onClick={(e) => e.preventDefault()} className="download-p">
              {title}
                <DownOutlined />
              </p>
            </Dropdown>
          </Col>

          <Col  md={1} offset={18}>
          <Image src={downloads} preview={false} width={32} />
        </Col>
        </Row>
      )}
    </div>
  );
};

export default Header;
