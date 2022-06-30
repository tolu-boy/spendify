import React from "react";
import { Row, Col, Image, Divider } from "antd";
import logo from "../images/spendify-logo-wh.png";
import overview from "../images/d-overview.svg";
import tickets from "../images/tickets.svg";
import bulb from "../images/bulb.svg";
import { MenuUnfoldOutlined, PoweroffOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MiniSidebar = ({ setIsopen, isOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="sidebarMini p-3 pt-3">
      <Row
        gutter={[{ md: 8 }, { md: 32, lg: 32, xl: 32, xxl: 80 }]}
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
          <Image src={logo} preview={false} width="1.5rem" />
        </Col>

        <Col
          md={24}
          xxl={24}
          onClick={() => {
            navigate("/downloads");

          }}
        >
          <Image src={overview} preview={false} width="1.5rem" />
        </Col>

        <Col
          md={24}
          xxl={24}
          onClick={() => {
            navigate("/audience");
          }}
        >
          <Image src={tickets} preview={false} width="1.5rem" />
        </Col>

        <Col md={24} xxl={24} className="p-0">
          <Row>
            <Col md={24}  onClick={() => {
            navigate("/behaviour/expense");
          }}>
              <p className="f-12 white-color pointer-cusor"> Expense</p>
            </Col>

            <Col md={24}  onClick={() => {
            navigate("/behaviour/income");
          }}>
              <p className="f-12 white-color pointer-cusor"> Income</p>
            </Col>

            <Col md={24} onClick={() => {
            navigate("/behaviour/income-Expense-Ratio");
          }}>
              <p className="f-12 white-color pointer-cusor"> Ratios</p>
            </Col>

            <Col md={24}>
              <Divider className="nav-divided" />
            </Col>
          </Row>
        </Col>

        <Col md={24} onClick={() => {
            navigate("/global-stats");
          }} >
          <Image src={bulb} preview={false} width="1.5rem" />
        </Col>


        <Col md={24} onClick={() => {
            navigate("/");
          }} >
        <PoweroffOutlined className="slide-menu"/>
        </Col>


      </Row>

     
    </div>
  );
};

export default MiniSidebar;
