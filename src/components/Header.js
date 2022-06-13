

import React from 'react'
import { Row, Col, Image } from "antd";
import downloads from "../images/downloads.svg";


const Header = ({title}) => {
  return (

          <div className="header">
            <Row>
              <Col md={23}>
                <p className="download-p"> {title}</p>
              </Col>

              <Col md={1}>
                <Image src={downloads} preview={false} width={32} />
              </Col>
            </Row>
          </div>
 
  )
}

export default Header