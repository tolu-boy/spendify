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
            {" "}
            $0 <span className="f-10 grey-color"> /month</span>
          </h6>
          <h6>Free</h6>
          <p>For most businesses that want to otpimize web queries</p>
          <p className="f-10 grey-color">
            {" "}
            <span className="pr-2">
              <Image src={check} width={20} preview={false} />
            </span>{" "}
            All limited links
          </p>

          <p className="f-10 grey-color">
            {" "}
            <span className="pr-2">
              <Image src={check} width={20} preview={false} />
            </span>{" "}
            Chat support
          </p>

          <p className="f-10 grey-color">
            {" "}
            <span className="pr-2">
              <Image src={check} width={20} preview={false} />
            </span>{" "}
            Optimize hashtags{" "}
          </p>

          <p className="f-10 grey-color pb-2">
            {" "}
            <span className="pr-2">
              <Image src={check} width={20} preview={false} />
            </span>{" "}
            Unlimited users{" "}
          </p>

          <Button className="price-button" block>
            {" "}
            Choose Plan
          </Button>
        </Col>

        <Col md={12} className="card-pro ">
          <Button className="most-popular mt-2"> MOST POPULAR</Button>

          <h6 className="white-color">
            {" "}
            $100 <span className="f-10 grey-color"> /month</span>
          </h6>
          <h6 className="white-color">Free</h6>
          <p className="white-color ">
            {" "}
            For most businesses that want to otpimize web queries
          </p>
          <p className="f-10 white-color">
            {" "}
            <span className="pr-2">
              <Image src={check2} width={20} preview={false} />
            </span>{" "}
            All limited links
          </p>

          <p className="f-10 white-color">
            {" "}
            <span className="pr-2">
              <Image src={check2} width={20} preview={false} />
            </span>{" "}
            Chat support
          </p>

          <p className="f-10 white-color">
            {" "}
            <span className="pr-2">
              <Image src={check2} width={20} preview={false} />
            </span>{" "}
            Optimize hashtags{" "}
          </p>

          <p className="f-10 white-color pb-2">
            {" "}
            <span className="pr-2">
              <Image src={check2} width={20} preview={false} />
            </span>{" "}
            Unlimited users{" "}
          </p>

          <Button className="price-button"> Choose Plan</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Payment;
