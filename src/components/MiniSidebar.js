import React from "react";
import { Row, Col, Image, Divider } from "antd";
import logo from "../images/spendify-logo-wh.png";
import {
  MenuUnfoldOutlined,
  PoweroffOutlined,
  FallOutlined,
  RiseOutlined,
  PieChartOutlined,
  GlobalOutlined,
  UsergroupAddOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
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
          <DownloadOutlined className="slide-menu" />
        </Col>

        <Col
          md={24}
          xxl={24}
          onClick={() => {
            navigate("/audience");
          }}
        >
          <UsergroupAddOutlined className="slide-menu" />
        </Col>

        <Col
          md={24}
          xxl={24}
          onClick={() => {
            navigate("/behaviour/expense");
          }}
        >
          <RiseOutlined className="slide-menu" />
        </Col>

        <Col
          md={24}
          xxl={24}
          onClick={() => {
            navigate("/behaviour/income");
          }}
        >
          <FallOutlined className="slide-menu" />
        </Col>

        <Col
          md={24}
          xxl={24}
          onClick={() => {
            navigate("/behaviour/income-Expense-Ratio");
          }}
        >
          <PieChartOutlined className="slide-menu" />
        </Col>

        <Col md={24}>
          <Divider className="nav-divided" />
        </Col>

        <Col
          md={24}
          xxl={24}
          onClick={() => {
            navigate("/global-stats");
          }}
        >
          <GlobalOutlined className="slide-menu" />
        </Col>

        <Col
          md={24}
          onClick={() => {
            navigate("/");
          }}
        >
          <PoweroffOutlined className="slide-menu" />
        </Col>
      </Row>
    </div>
  );
};

export default MiniSidebar;
