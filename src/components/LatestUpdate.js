import React from "react";
import { Row, Col, Table, Tag } from "antd";
import market from "../images/market.svg";
import smallRect from "../images/smallRect.svg";

const LatestUpdate = () => {
  const columns = [
    {
      title: "CURRENCY",
      dataIndex: "currency",
      key: "currency",
    },
    {
      title: "VALUE",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "CHANGE",
      dataIndex: "change",
      key: "change",
      render: (tags, text) => (
        <span>
          {tags.map((tag) => {
            let color;
            let textColor;
            if (tag === 0.00019) {
              color = "#00BA88";
              textColor = "#000000";
            }

            if (tag === 0.22) {
              color = "#F2190D";
              textColor = "#000000";
            }
            return (
              <Tag color={color} style={{ color: textColor }} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: "NETCHANGE",
      key: "netChange",
      dataIndex: "netChange",
      render: (tags, text) => (
        <span>
          {tags.map((tag) => {
            let color;
            let textColor;
            if (tag === -0.09) {
              color = "#FFB6C1";
              textColor = "#000000";
            }

            if (tag === "+0.20") {
              color = "#00BA88";
              textColor = "#000000";
            }
            return (
              <Tag color={color} style={{ color: textColor }} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </span>
      ),
    },

    {
      title: "TIME",
      dataIndex: "time",
      key: "time",
    },
  ];
  const data = [
    {
      key: "1",
      currency: "EUR-USD",
      value: 1.119,
      change: [0.00019],
      netChange: [-0.09],
      time: `9/10/2021`,
    },

    {
      key: "2",
      currency: "EUR-USD",
      value: 1.119,
      change: [0.00019],
      netChange: [`+0.20`],
      time: `9/10/2021`,
    },

    {
      key: "3",
      currency: "EUR-USD",
      value: 1.119,
      change: [0.00019],
      netChange: [-0.09],
      time: `9/10/2021`,
    },

    {
      key: "4",
      currency: "EUR-USD",
      value: 1.119,
      change: [0.00019],
      netChange: [`+0.20`],
      time: `9/10/2021`,
    },

    {
      key: "5",
      currency: "EUR-USD",
      value: 1.119,
      change: [0.00019],
      netChange: [`+0.20`],
      time: `9/10/2021`,
    },

    {
      key: "6",
      currency: "EUR-USD",
      value: 1.119,
      change: [0.00019],
      netChange: [-0.09],
      time: `9/10/2021`,
    },

    {
      key: "7",
      currency: "EUR-USD",
      value: 1.119,
      change: [0.00019],
      netChange: [`+0.20`],
      time: `9/10/2021`,
    },
  ];
  return (
    <section className="latest-update">
      <h6 className="small-header">Lastest Updates</h6>
      <div className="line"> </div>
      <Row gutter={8}>
        <Col md={16} className="pt-2">
          <Row gutter={16}>
            <Col md={10}>
              <Row>
                <Col md={24}>
                  <h4>
                    Back-To-School Season Has Stock Sellers Tapping Market in
                    Droves
                  </h4>

                  <p className="pt-2">
                    Global equity capital markets are firing on all cylinders,
                    with a raft of listings and billions of ...
                  </p>

                  <h6>Marina Sherif</h6>

                  <p className="f-12 grey-color">
                    Editor Bloomberg June 24, 2021
                  </p>
                  <div className="line"> </div>
                </Col>
                <Col md={24}>
                  <div className="pt-2">
                    <img src={market} alt="maket" className="image-fit" />
                  </div>

                  <p className="pt-2">
                    Global equity capital markets are firing on all cylinders,
                    with a raft of listings and billions of ...
                  </p>

                  <h6>Marina Sherif</h6>

                  <p className="f-12 grey-color">
                    Editor Bloomberg June 24, 2021
                  </p>
                </Col>
              </Row>
            </Col>

            <Col md={1} className="v-line "></Col>

            <Col md={13}>
              <div>
                <img src={market} alt="market" className="image-fit" />
              </div>

              <h5>Back-To-School Season Has Stock Sellers</h5>

              <h6>Marina Sherif</h6>

              <p className="f-12 grey-color">Editor Bloomberg June 24, 2021</p>
              <div className="line"> </div>

              <p className="f-14 pt-2">Markets</p>
              <h5>Global equity capital markets are firing on all cylinders</h5>
              <p color="f-14 ">Economics</p>
              <h5>
                Global equity capital markets are firing on all cylinders,{" "}
              </h5>
            </Col>

            <Col md={24} className="pt-2">
              <div className="line "> </div>
              <div className="orange-line pt-5"> </div>
              <div className="orange-line"> </div>
              <div className="orange-line"> </div>
              <div className="orange-line"> </div>
              <div className="orange-line"> </div>

              <Table columns={columns} dataSource={data} className="pt-2" />
            </Col>
          </Row>
        </Col>

        <Col md={1} className="v-line mt-2"></Col>

        <Col md={7}>
          <div className="pt-2 ">
            <img src={market} alt="market" className="image-fit" />
          </div>

          <p className="f-14 pt-2">
            Global equity capital markets are firing on all cylinders, with a
            raft of listings and billions of ...
          </p>

          <h6>Marina Sherif</h6>

          <p className="f-12 grey-color">Editor Bloomberg June 24, 2021</p>

          <div className="line"> </div>

          <Row className="pt-2">
            <Col md={16}>
              <h6>Marina Sherif</h6>

              <p className="f-12 grey-color">Editor Bloomberg June 24, 2021</p>
            </Col>

            <Col md={8}>
              <div className="pt-2 ">
                <img src={smallRect} alt="market" className="image-fit" />
              </div>
            </Col>
          </Row>

          <div className="line pt-2"> </div>

          <Row className="pt-2">
            <Col md={16}>
              <h6>Marina Sherif</h6>

              <p className="f-12 grey-color">Editor Bloomberg June 24, 2021</p>
            </Col>

            <Col md={8}>
              <div className="pt-2 ">
                <img src={smallRect} alt="market" className="image-fit" />
              </div>
            </Col>
          </Row>

          <div className="line pt-2"> </div>

          <Row className="pt-2">
            <Col md={16}>
              <h6>Marina Sherif</h6>

              <p className="f-12 grey-color">Editor Bloomberg June 24, 2021</p>
            </Col>

            <Col md={8}>
              <div className="pt-2 ">
                <img src={smallRect} alt="market" className="image-fit" />
              </div>
            </Col>
          </Row>

          <div className="line pt-2"> </div>

          <Row className="pt-2">
            <Col md={16}>
              <h6>Marina Sherif</h6>

              <p className="f-12 grey-color">Editor Bloomberg June 24, 2021</p>
            </Col>

            <Col md={8}>
              <div className="pt-2 ">
                <img src={smallRect} alt="market" className="image-fit" />
              </div>
            </Col>
          </Row>

          <div className="line pt-2"> </div>

          <Row className="pt-2">
            <Col md={16}>
              <h6>Marina Sherif</h6>

              <p className="f-12 grey-color">Editor Bloomberg June 24, 2021</p>
            </Col>

            <Col md={8}>
              <div className="pt-2 ">
                <img src={smallRect} alt="market" />
              </div>
            </Col>
          </Row>

          <div className="line pt-2"> </div>

          <Row className="pt-2">
            <Col md={16}>
              <h6>Marina Sherif</h6>

              <p className="f-12 grey-color">Editor Bloomberg June 24, 2021</p>
            </Col>

            <Col md={8}>
              <div className="pt-2 ">
                <img src={smallRect} alt="market" />
              </div>
            </Col>
          </Row>

          <div className="line pt-2"> </div>

          <Row className="pt-2">
            <Col md={16}>
              <h6>Marina Sherif</h6>

              <p className="f-12 grey-color">Editor Bloomberg June 24, 2021</p>
            </Col>

            <Col md={8}>
              <div className="pt-2 ">
                <img src={smallRect} alt="market" />
              </div>
            </Col>
          </Row>

          <div className="line pt-2"> </div>
        </Col>
      </Row>
    </section>
  );
};

export default LatestUpdate;
