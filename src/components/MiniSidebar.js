import React from "react";
import { Row, Col, Image, Divider } from "antd";
import logo from "../images/s-logo.png";
import overview from "../images/d-overview.svg";
import tickets from "../images/tickets.svg";
import bulb from "../images/bulb.svg";
import { MenuUnfoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MiniSidebar = ({ setIsopen, isOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="sidebarMini p-3 pt-3">
      <Row
        gutter={[{ md: 8 }, { md: 32, lg: 32, xl: 32, xxl: 100 }]}
        className="spendifyMini pb-2"
      >
        <Col
          md={24}
          xxl={24}
          onClick={() => {
            setIsopen(!isOpen);
          }}
        >
          <MenuUnfoldOutlined className="slide-menu" />
        </Col>
        <Col
          md={24}
          xxl={24}
          onClick={() => {
            window.open("https://spendify.ca/", "_blank");
          }}
        >
          <Image src={logo} preview={false} width="80%" />
        </Col>

        <Col
          md={24}
          xxl={24}
          onClick={() => {
            navigate("/downloads");

          }}
        >
          <Image src={overview} preview={false} width="80%" />
        </Col>

        <Col
          md={24}
          xxl={24}
          onClick={() => {
            navigate("/audience");
          }}
        >
          <Image src={tickets} preview={false} width="80%" />
        </Col>

        <Col md={24} xxl={24} className="p-0">
          <Row>
            <Col md={24}  onClick={() => {
            navigate("/behaviour/expense");
          }}>
              <p className="f-16 white-color"> Expense</p>
            </Col>

            <Col md={24}  onClick={() => {
            navigate("/behaviour/income");
          }}>
              <p className="f-16 white-color"> Income</p>
            </Col>

            <Col md={24} onClick={() => {
            navigate("/behaviour/income-Expense-Ratio");
          }}>
              <p className="f-16 white-color"> Ratios</p>
            </Col>

            <Col md={24}>
              <Divider className="nav-divided" />
            </Col>
          </Row>
        </Col>

        <Col md={24} onClick={() => {
            navigate("/global-stats");
          }} >
          <Image src={bulb} preview={false} width="80%" />
        </Col>
      </Row>

     
    </div>
  );
};

export default MiniSidebar;