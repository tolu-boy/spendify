import React from "react";
import { Row, Col, Image, Divider } from "antd";
import logo from "../images/s-logo.png";
import overview from "../images/d-overview.svg";
import tickets from "../images/tickets.svg";
import bulb from "../images/bulb.svg";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="sidebar p-3 pt-3">
          <Row className="spendify pb-2">
            <Col md={5}>
              <Image src={logo} preview={false} width={25} />
            </Col>
            <Col md={15} className="pt7x">
              <li className="white-color"> MySpendify</li>
            </Col>
          </Row>
          <li className="analytics-dashboard ">ANALYTICS</li>

          <ul className="nav">
            <li className="navlist">
              <Link to="/downloads">
                <span className="pr-5">
                  <Image src={overview} preview={false} width={14} />
                </span>
                Downloads
              </Link>
            </li>

            <li className="navlist">
              <Link to="/audience">
                <span className="pr-5">
                  <Image src={tickets} preview={false} width={14} />
                </span>
                Audience
              </Link>
            </li>

            <div className="navlist">
              <Row>
                <Col md={3}>
                  <Image src={bulb} preview={false} width={14} />
                </Col>

                <Col md={18}>
                  <li className="behaviour">Behaviour</li>

                  <Row className="nav-drowpdown">
                    <Col md={24} className="pt-2">
                      <li>
                        <Link to="/behaviour/expense">—Expense </Link>
                      </li>
                    </Col>

                    <Col md={24} className="pt-2">
                      <li>
                        <Link to="/behaviour/income">—Income </Link>
                      </li>
                    </Col>

                    <Col md={24} className="pt-2 f-12">
                      <li>
                        <Link to="/behaviour/bank-transaction">
                          —Bank transactions
                        </Link>
                      </li>
                    </Col>

                    <Col md={24} className="pt-2">
                      <li>
                        <Link to="/behaviour/income-Expense-Ratio">
                          —Income to Expense ratio{" "}
                        </Link>
                      </li>
                    </Col>

                    <Col md={24} className="t-28">
                      <li>
                        <Link to="/behaviour/budgeting">—Budgeting </Link>
                      </li>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <li>
              <Divider className="nav-divided" />
            </li>

            <li className="navlist pt-2 mt-2">
              <Link to="/global-stats">
                <span className="pr-2">
                  <Image src={bulb} preview={false} width={14} />
                </span>
                Global stats
              </Link>
            </li>
          </ul>
        </div>

        <div className="main_content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
