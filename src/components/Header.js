import React from "react";
import { Row, Col, Image ,Select} from "antd";
import downloads from "../images/downloads.svg";

const Header = ({ title, dropdown }) => {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <div className="header">

{!dropdown === true && (
  <Row>
        <Col md={23} className="pl-1">
          <p className="download-p"> {title}</p>
        </Col>

        <Col md={1}>
          <Image src={downloads} preview={false} width={32} />
        </Col>
      </Row>
)}
      

      {dropdown === true && (
        <Row>

        <Col md={3} className="pl-1">
          <p className="download-p"> {title}</p>
        </Col>


          <Col md={3} className="pl-1 mtl2">
          <Select
                  defaultValue="Filter"
                  onChange={handleChange}
                  className="select-item purple-select"
                  // size="small"
                >
                 <Option value="disabled" disabled>
        Pick Country
      </Option>
                  <Option value="jack">Ghana</Option>
                  <Option value="jackw"> America</Option>
                  <Option value="jacke"> Russia</Option>
                  <Option value="jack2"> Ukraine</Option>

                </Select>
          </Col>

          

          <Col  md={1} offset={17}>
          <Image src={downloads} preview={false} width={32} />
        </Col>
        </Row>
      )}
    </div>
  );
};

export default Header;
