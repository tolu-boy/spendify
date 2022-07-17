import React, {useState} from "react";
import { Row, Col, Image, Divider } from "antd";
import logo from "../images/spendify-logo-wh.png";
import bulb from "../images/bulb.svg";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import MiniSidebar from "./MiniSidebar";
import { MenuFoldOutlined, PoweroffOutlined,GlobalOutlined,UsergroupAddOutlined,DownloadOutlined } from "@ant-design/icons";

const SideBar = () => {
  const [isOpen, setIsopen]  = useState(false)
  return (
    <div>
      <div className="wrapper">

      {
        isOpen === true &&(
          <MiniSidebar setIsopen={setIsopen} isOpen={isOpen}/>
        )
      }
      
      {
        isOpen === false &&(
          <div className="sidebar p-3 pt-3">
          <MenuFoldOutlined  className="full-slide-menu"
           onClick={()=>{
           setIsopen(!isOpen)
          }}/>
    
          <Row className="spendify pb-2">
            <Col md={5} onClick={()=>{
             window.open('https://spendify.ca/', '_blank');

            }}>
              <Image src={logo} preview={false} width='85%' />
            </Col>
            <Col md={15} className="pt7x">
              <li className="white-color pl-2"> Spendify</li>
            </Col>
          </Row>
          <li className="analytics-dashboard">ANALYTICS</li>

          <ul className="nav">
            <li className="navlist">
              <Link to="/downloads">
                <span className="pr-5">
                  <DownloadOutlined className="slide-menu" />

                </span>
                Downloads
              </Link>
            </li>

            <li className="navlist">
              <Link to="/audience">
                <span className="pr-5">
                  <UsergroupAddOutlined className="slide-menu" />

                </span>
                Audience
              </Link>
            </li>

            <div className="navlist pl-2">
              <Row>
                <Col md={3}>
                  <Image src={bulb} preview={false} width={14} />
                </Col>

                <Col md={18}>
                  <li className="behaviour pl-1">Behaviour</li>

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
{/* 
                    <Col md={24} className="pt-2 f-12">
                      <li>
                        <Link to="/behaviour/bank-transaction">
                          —Bank transactions
                        </Link>
                      </li>
                    </Col> */}

                    {/* <Col md={24} className="pt-2">
                      <li>
                        <Link to="/behaviour/income-Expense-Ratio">
                          —Income to Expense ratio
                        </Link>
                      </li>
                    </Col> */}

                    <Col md={24} className="t-28">
                      <li>
                        <Link to="/behaviour/income-Expense-Ratio">—Ratios </Link>
                      </li>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <li>
              <Divider className="nav-divided" />
            </li>

            {/* <li className="navlist pt-2 mt-2">
              <Link to="/global-stats">
                <span className="pr-2">
                  <Image src={bulb} preview={false} width={14} />

                </span>
                Global stats
              </Link>
            </li> */}


            <li className="navlist">
              <Link to="/global-stats">
                <span className="pr-5">
                  <GlobalOutlined className="slide-menu" />
                  </span>
                  Global stats

              </Link>
            </li>

            <li className="navlist">
              <Link to="/">
                <span className="pr-5">
                <PoweroffOutlined  className="slide-menu" />
                </span>
                LogOut
              </Link>
            </li>

           
          </ul>
        </div>
        )
      }
       

        
        
        
        <div className="main_content" style={{marginLeft: isOpen ? '80px' : '200px'}}>
        
          <Row justify="center">
            <Col  lg={24} xl={24} xxl={24}>
            <Outlet />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
