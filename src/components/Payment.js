import React from "react";
import { Row, Col, Button, Image } from "antd";
import check from "../images/check-circle-1.svg";
import check2 from "../images/check2.svg";

const Payment = () => {
  return (
    <div>
      <Row>
        <Col md={11}>
          <h6>
         
            $0 <span className="f-10 grey-color"> /month</span>
          </h6>
          <h6>Free</h6>
          <p>For most businesses that want to otpimize web queries</p>
        
          <Row>
            <Col md={3} className="pr-2">
            <Image src={check} width="100%" preview={false} />
            </Col>

            <Col md={21} className="pt-1">
            <p className="f-10 grey-color"> 
            All limited links
            </p>
            </Col>

            <Col md={3} className="pr-2">
            <Image src={check} width="100%" preview={false} />
            </Col>

            <Col md={21} className="pt-1">
            <p className="f-10 grey-color"> 
            Chat support
            </p>
            </Col>


            <Col md={3} className="pr-2">
            <Image src={check} width="100%" preview={false} />
            </Col>

            <Col md={21} className="pt-1">
            <p className="f-10 grey-color"> 
            Optimize hashtags
            </p>
            </Col>


            <Col md={3} className="pr-2">
            <Image src={check} width="100%" preview={false} />
            </Col>

            <Col md={21} className="pt-1">
            <p className="f-10 grey-color pb-2"> 
            Unlimited users
            </p>
            </Col>

          </Row>


          <Button className="price-button" block>
         
            Choose Plan
          </Button>
        </Col>

        <Col md={12} className="card-pro ">
          <Button className="most-popular mt-2"> MOST POPULAR</Button>

          <h6 className="white-color">
            
            $100 <span className="f-10 grey-color"> /month</span>
          </h6>
          <h6 className="white-color">Free</h6>
          <p className="white-color ">
            
            For most businesses that want to otpimize web queries
          </p>



          <Row>
            <Col md={3} className="pr-2">
            <Image src={check2} width="100%" preview={false} />
            </Col>

            <Col md={21} className="pt-1">
            <p className="f-10 white-color"> 
            All limited links
            </p>
            </Col>

            <Col md={3} className="pr-2">
            <Image src={check2} width="100%" preview={false} />
            </Col>

            <Col md={21} className="pt-1">
            <p className="f-10 white-color"> 
            Chat support
            </p>
            </Col>


            <Col md={3} className="pr-2">
            <Image src={check2} width="100%" preview={false} />
            </Col>

            <Col md={21} className="pt-1">
            <p className="f-10 white-color"> 
            Optimize hashtags
            </p>
            </Col>


            <Col md={3} className="pr-2">
            <Image src={check2} width="100%" preview={false} />
            </Col>

            <Col md={21} className="pt-1">
            <p className="f-10 white-color pb-2"> 
            Unlimited users
            </p>
            </Col>

          </Row>

        

          <Button className="price-button"> Choose Plan</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Payment;
