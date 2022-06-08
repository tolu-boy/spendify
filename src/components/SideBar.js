import React from "react";
import { Row, Col, Image,Divider} from "antd";
import logo from "../images/l1.png";
import downloads from "../images/downloads.svg";
import overview from "../images/d-overview.svg";
import tickets from "../images/tickets.svg";
import bulb from "../images/bulb.svg";

import { Link } from "react-router-dom";
import { Outlet } from 'react-router-dom';



 
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
          <li className=" analytics-dashboard ">ANALYTICS</li>

          <ul className="nav">
          <li className="navlist">
          <Link to='/downloads'> 
          <span className="pr-2"> 
          <Image src={overview} preview={false} width={14} />
          </span> Downloads
           </Link>
          </li>

          <li className="navlist">
          <Link to='/audience'> 
          <span className="pr-2"> 
          <Image src={tickets} preview={false} width={14} />
          </span>  Audience
           </Link>
          </li>
          

          <li className="navlist">
         
         <Row>
             <Col md={3} >
            <Image src={bulb} preview={false} width={14}  />
             </Col>
             
             <Col md={18} >
               <li className="behaviour">Behaviour</li>
        
               <Row className="nav-drowpdown">
                <Col md={24} className="pt-2">
                <li><Link to='/audience'>—Expense </Link></li>
                </Col>

                <Col md={24} className="pt-2">
                <li><Link to='/audience'>—Income </Link></li>
                </Col>

                <Col md={24} className="pt-2 f-12">
                <li><Link to='/audience'>—Bank transactions </Link></li>
                </Col>


                <Col md={24} className="pt-2">
                <li><Link to='/audience'>—Income to Expense ratio  </Link></li>
                </Col>

                <Col md={24} className="t-28">
                <li><Link to='/audience'>—Expense </Link></li>
                </Col>


                 
               </Row>
             </Col>
              
         </Row>
          </li>

          <li>
              <Divider className="nav-divided"/>
          </li>

         
          <li className="navlist pt-2">
          <Link to='/audience'> 
          <span className="pr-2"> 
          <Image src={bulb} preview={false} width={14} />
          </span> Global stats
           </Link>
          </li>
        </ul>

        </div>
        

        <div class="main_content">
          <div class="header">
            <Row>
              <Col md={23}>
                <p className="download-p"> Downloads</p>
              </Col>

              <Col md={1}>
                <Image src={downloads} preview={false} width={32} />
              </Col>
            </Row>
          </div>
          <br />
          <div class="info">
        
           
                  <Outlet />

          </div>
        </div>
      </div>

    </div>
  );
};

export default SideBar;
