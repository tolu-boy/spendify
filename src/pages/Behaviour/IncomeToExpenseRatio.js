import React from "react";
import { Row, Col, Card, Button, Select, Image, Divider, Progress } from "antd";
import Rdownload from "../../images/r-download.svg";
import { Chart } from "react-google-charts";
import Header from "../../components/Header";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const IncomeToExpenseRatio = () => {
  const { Option } = Select;

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

  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [220, 220, 100, 250, 180, 300, 230],
        backgroundColor: "#007AFF",
      },
      {
        label: "Dataset 2",
        data: [150, 150, 100, 150, 130, 230, 130],
        backgroundColor: "#F14055",
      },
    ],
  };

  const labels2 = ["Male", "Female", "Non-binary"];

  const data2 = {
    labels: labels2,
    datasets: [
      {
        label: "Dataset 1",
        data: [220, 220, 200],
        backgroundColor: "#007AFF",
      },
      {
        label: "Dataset 2",
        data: [150, 150, 100],
        backgroundColor: "#F14055",
      },
    ],
  };

  const options2 = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: false,
    },
  };

  return (
    <div>
      <Header title="Behaviour" />
      <h6 className="pt2x  pl-2"> income to expense ratio </h6>
      <Row gutter={16} className="info-behaviour ">
        <Col md={12}>
          <Card>
            <Row>
              <Col md={8} className="pt7x">
                <p>By period</p>
              </Col>

              <Col md={4} offset={4}>
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

              <Col md={24} className="pt-2 ">
                <Bar options={options} data={data} />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="pb-25" >
            <Row gutter={8} className="pl-15">
              <Col lg={2}  xl={2} className="mt-2x">
                <li className="f-10 ">To</li>
              </Col>

              <Col lg={10} xl={9} >
                <Select
                  defaultValue="Present"
                  onChange={handleChange}
                  className="select-item"
                  size="small"
                >
                  <Option value="jack"> last week</Option>
                </Select>
              </Col>

              <Col lg={4}  xl={4} className="mt-2x">
                <li className="f-10">From</li>
              </Col>   

               <Col lg={7} xl={8} >
                <Select
                  defaultValue="Inception"
                  onChange={handleChange}
                  className="select-item"
                  size="small"
                >
                  <Option value="jack"> last week</Option>
                </Select>
              </Col>          
            </Row>

            <Row gutter={8} className="pt-10">
           
              <Col md={5} >
                <Image src={Rdownload} preview={false}  />
              </Col>

              <Col md={14} >
                <h4>
                32%
                  <span>
                    <p className="f-12 grey-color">Total Expense : Total income </p>
                  </span>
                </h4>
              </Col>

              <Col md={5} >
                <Button
                  size="small"
                  shape="round"
                  className="green-button f-10"
                >
                  +262
                </Button>
              </Col>

              <Divider className="card-divider" />

              <Col md={5} >
                <Image src={Rdownload} preview={false}  />
              </Col>

              <Col md={14} >
                <h4>
                45%
                  <span>
                    <p className="f-10 grey-color"> Average Expense : Income</p>
                  </span>
                </h4>
              </Col>

              <Col md={5} className="">
                <Button
                  size="small"
                  shape="round"
                  className="green-button f-10"
                >
                  +262
                </Button>
              </Col>


            </Row>
          </Card>
        </Col>

        <Col md={6} >
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
                    <p className="f-12 grey-color">Russia</p>
                  </Col>

                  <Col md={4}>
                    <p className="f-12 grey-color">94%</p>
                  </Col>

                  <Col md={24} className="mtN15 pb-2">
                    <Progress percent={94} showInfo={false} size="small" />
                  </Col>

                  <Col md={20}>
                    <p className="f-12 grey-color">Ukraine</p>
                  </Col>

                  <Col md={4}>
                    <p className="f-12 grey-color">20%</p>
                  </Col>

                  <Col md={24} className="mtN15 pb-2">
                    <Progress percent={20} showInfo={false} size="small" />
                  </Col>

                  <Col md={20}>
                    <p className="f-12 grey-color">Mongolia</p>
                  </Col>

                  <Col md={4}>
                    <p className="f-12 grey-color">13%</p>
                  </Col>

                  <Col md={24} className="mtN15 pb-2">
                    <Progress percent={20} showInfo={false} size="small" />
                  </Col>
                </Row>
              </Col>

              <Col md={13} className="pt-2">
                <p className="purple-color pl-35">
                  Country <span className="f-10 grey-color"> city</span>
                </p>

                <Row>
                  <Col md={20}>
                    <p className="f-12 grey-color">China</p>
                  </Col>

                  <Col md={4}>
                    <p className="f-12 grey-color">24%</p>
                  </Col>

                  <Col md={24} className="mtN15 pb-2">
                    <Progress percent={24} showInfo={false} size="small" />
                  </Col>

                  <Col md={20}>
                    <p className="f-12 grey-color">USA</p>
                  </Col>

                  <Col md={4}>
                    <p className="f-12 grey-color">20%</p>
                  </Col>

                  <Col md={24} className="mtN15 pb-2">
                    <Progress percent={20} showInfo={false} size="small" />
                  </Col>

                  <Col md={20}>
                    <p className="f-12 grey-color">other</p>
                  </Col>

                  <Col md={4}>
                    <p className="f-12 grey-color">37%</p>
                  </Col>

                  <Col md={24} className="mtN15 pb-2">
                    <Progress percent={37} showInfo={false} size="small" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={16}  className="mt-2">
          <Card>
            <Row>
              <Col md={8} className="pt7x">
                <p> By Catergories</p>
              </Col>

              <Col md={3} offset={6}>
                <Button shape="round" className="purple-button">
                  Weekly
                </Button>
              </Col>

              <Col md={3}>
                <Button shape="round" className="pink-button">
                  Monthly
                </Button>
              </Col>

              <Col md={3}>
                <Button shape="round" className="pink-button">
                  Year to Date
                </Button>
              </Col>

              <Col md={24} className="pt-2 ">
                <Bar options={options} data={data} />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={8}  className="mt-2">
          <Card>
            <Row>
              <Col md={8} className="pt7x">
                <p className="f-16"> By Gender</p>
              </Col>

              <Col md={24} className="pt-2 ">
                <Bar options={options2} data={data2} height={320} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default IncomeToExpenseRatio;
