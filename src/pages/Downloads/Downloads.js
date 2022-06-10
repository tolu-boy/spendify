import React from "react";
import { Row, Col, Card, Button, Select, Image, Divider, Progress } from "antd";
import Rdownload from "../../images/r-download.svg";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Chart } from "react-google-charts";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const Downloads = () => {
  const { Option } = Select;

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },

    stacked: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
    },
  };

  const labels = ["Jan", "Feb", "March", "Apr", "May", "Jun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [110, 140, 44, 24, 77, 98, 45, 56, 66, 99, 88, 78, 300],
        borderColor: "#F3E1EF",
        pointBackgroundColor: "#6D3088",
        fill: true,
        backgroundColor: "#F3E1EF",
        yAxisID: "y",
      },
    ],
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const data1 = [
    ["Country", "Popularity"],
    ["Germany", 200],
    ["United States", 300],
    ["RU", 700],
  ];

  const options1 = {
    // region: "002", // Africa
    colorAxis: { colors: ["#828282", "#6D3088"] },
    datalessRegionColor: "#828282",
    defaultColor: "#828282",
  };
  return (
    <div>
      <Row gutter={16}>
        <Col md={11}>
          <Card>
            <Row>
              <Col md={4} offset={11}>
                <Button shape="round" className="purple-button">
                  Weekly
                </Button>
              </Col>

              <Col md={4}>
                <Button shape="round" className="pink-button">
                  Monthly
                </Button>
              </Col>

              <Col md={4}>
                <Button shape="round" className="pink-button">
                  Year to Date
                </Button>
              </Col>

              <Col md={24} className="pt-2">
                <Line options={options} data={data} />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={7}>
          <Card className="pb-25">
            <Row>
              <Col md={2} offset={6} className="mt-2x">
                <p className="f-10 ">To</p>
              </Col>

              <Col md={6} xs={24}>
                <Select
                  defaultValue="Present"
                  onChange={handleChange}
                  className="select-item"
                  size="small"
                >
                  <Option value="jack"> last week</Option>
                </Select>
              </Col>

              <Col md={3} className="mt-2x">
                <p className="f-10">From</p>
              </Col>
              <Col md={6} xs={24}>
                <Select
                  defaultValue="Inception"
                  onChange={handleChange}
                  className="select-item"
                  size="small"
                >
                  <Option value="jack"> last week</Option>
                </Select>
              </Col>

              <Col md={5} className="pt-2">
                <Image src={Rdownload} preview={false} width={44} />
              </Col>

              <Col md={15} className="pt-2">
                <h4>
                  500,053{" "}
                  <span>
                    <p className="f-12 grey-color">Total Download</p>
                  </span>
                </h4>
              </Col>

              <Col md={4} className="pt-5 ">
                <Button
                  size="small"
                  shape="round"
                  className="green-button f-10"
                >
                  {" "}
                  +262
                </Button>
              </Col>

              <Divider className="card-divider" />

              <Col md={5} className="">
                <Image src={Rdownload} preview={false} width={44} />
              </Col>

              <Col md={15} className="">
                <h4>
                  40,344{" "}
                  <span>
                    <p className="f-12 grey-color">Average Download</p>
                  </span>
                </h4>
              </Col>

              <Col md={4} className="">
                <Button
                  size="small"
                  shape="round"
                  className="green-button f-10"
                >
                  {" "}
                  +262
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Chart
              chartType="GeoChart"
              width="100%"
              height="150px"
              data={data1}
              options={options1}
            />

            <Row gutter={16}>
              <Col md={11} className="pt-2">
                <p className="f-14">Location</p>

                <Row>
                  <Col md={20}>
                    <p>Russia</p>
                  </Col>

                  <Col md={4}>
                    <p>94%</p>
                  </Col>

                  <Col md={24}>
                    <Progress percent={94} showInfo={false} size="small" />
                  </Col>

                  <Col md={20} className="pt-2">
                    <p>Ukraine</p>
                  </Col>

                  <Col md={4} className="pt-2">
                    <p>20%</p>
                  </Col>

                  <Col md={24}>
                    <Progress percent={20} showInfo={false} />
                  </Col>

                  <Col md={20} className="pt-2">
                    <p>Magnolia</p>
                  </Col>

                  <Col md={4} className="pt-2">
                    <p>13%</p>
                  </Col>

                  <Col md={24}>
                    <Progress percent={13} showInfo={false} />
                  </Col>
                </Row>
              </Col>

              <Col md={13} className="pt-2">
                <p className="purple-color pl-35">
                  Country <span className="f-10 grey-color"> city</span>
                </p>

                <Row>
                  <Col md={20}>
                    <p>China</p>
                  </Col>

                  <Col md={4}>
                    <p>26%</p>
                  </Col>

                  <Col md={24}>
                    <Progress percent={94} showInfo={false} size="small" />
                  </Col>

                  <Col md={20} className="pt-2">
                    <p>Usa</p>
                  </Col>

                  <Col md={4} className="pt-2">
                    <p>20%</p>
                  </Col>

                  <Col md={24}>
                    <Progress percent={20} showInfo={false} />
                  </Col>

                  <Col md={20} className="pt-2">
                    <p>other</p>
                  </Col>

                  <Col md={4} className="pt-2">
                    <p>10%</p>
                  </Col>

                  <Col md={24}>
                    <Progress percent={10} showInfo={false} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Downloads;
