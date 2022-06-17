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
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Chart } from "react-google-charts";
import Header from "../../components/Header";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

const Audience = () => {
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

  const data3 = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Eats", 2],

    ["Sleep", 7], // CSS-style declaration
  ];

  const options3 = {
    pieHole: 0.4,
    is3D: false,
    legend: "none",
    colors: ["#0C2A66", "#EE7301", "#007AFF", "#0CBEA9"],
  };

  const data4 = [
    ["Element", "Density", { role: "style" }],
    ["Female", 8.94, "#EE3C86"], // RGB value
    ["Male", 10.49, "#007AFF"], // English color name
    ["non-binary", 19.3, "#FF6B00"],
  ];

  return (
    <div>
      <Header title="Audience" />
      <Row gutter={16} className="info">
        <Col md={12}>
          <Card>
            <Row>
              <Col md={4}>
                <p>Active users</p>
              </Col>

              <Col md={4} offset={8}>
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
                <Line options={options} data={data} />
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={6}>
          <Card >
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
                  500,053
                  <span>
                    <p className="f-12 grey-color">Total User</p>
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
                40,344
                  <span>
                    <p className="f-12 grey-color">Total Active User</p>
                  </span>
                </h4>
              </Col>

              <Col md={5} className="p ">
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
                40,344
                  <span>
                    <p className="f-10 grey-color">Average Daily active User</p>
                  </span>
                </h4>
              </Col>

              <Col md={5} className="p ">
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
                {/* <p className="f-14">Location</p> */}
                <Row>
                <Col md={24}>
                <p className="f-14">Location</p>
                </Col>
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
                  Country<span className="f-10 grey-color pl-1">city</span>
                </p>
                <Row>
                <Col md={24}>
                </Col>
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

        <Col md={12} className="mt-2" >
          <Card>
            <Row gutter={32}>
              <Col md={24}>
                <p className="f-16">Demography</p>
              </Col>

              <Col md={10} lg={10} className="tolu">
                <Chart
                  chartType="PieChart"
                  width="300px"
                  height="300px"
                  data={data3}
                  options={options3}
                />
              </Col>

              <Col md={2} lg={4} className="v-line mt-2"></Col>

              <Col md={10} className="pt-10 mt-2 pl-2">
                <Row gutter={8} className="line">
                  <Col md={3}>
                    <div className="blue-box"></div>
                  </Col>

                  <Col md={10}>
                    <p> Below 20</p>
                  </Col>

                  <Col md={6} offset={5}>
                    <p> 44,341</p>
                  </Col>
                </Row>

                <Row gutter={8} className="line pt-2">
                  <Col md={3}>
                    <div className="orange-box"></div>
                  </Col>

                  <Col md={10}>
                    <p> 20- 30</p>
                  </Col>

                  <Col md={6} offset={5}>
                    <p> 50,341</p>
                  </Col>
                </Row>

                <Row gutter={8} className="line pt-2">
                  <Col md={3}>
                    <div className="green-box"></div>
                  </Col>

                  <Col md={10}>
                    <p> 31 - 45</p>
                  </Col>

                  <Col md={6} offset={5}>
                    <p> 34,341</p>
                  </Col>
                </Row>

                <Row gutter={8} className="line pt-2">
                  <Col md={3}>
                    <div className="dark-box"></div>
                  </Col>

                  <Col md={10}>
                    <p> 45 - above</p>
                  </Col>

                  <Col md={6} offset={5}>
                    <p> 34,341</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={12}  className="mt-2">
          <Card>
            <Row>
              <Col md={24}>
                <p className="f-16">Gender</p>
              </Col>

              <Col md={15}>
                <Chart
                  chartType="ColumnChart"
                  width="300px"
                  height="300px"
                  data={data4}
                  options={{
                    legend: "none",
                  }}
                />
              </Col>

              <Col md={9}>
                <div className="line">
                  <span className="m-end"> %</span>{" "}
                </div>
                <Row gutter={8} className="line pt-2">
                  <Col md={3}>
                    <div className="blue-box"></div>
                  </Col>
                  <Col md={10}>
                    <p> Male</p>
                  </Col>

                  <Col md={6}>
                    <p> 50,341</p>
                  </Col>

                  <Col md={5}>
                    <p> 33</p>
                  </Col>
                </Row>

                <Row gutter={8} className="line pt-2">
                  <Col md={3}>
                    <div className="female-box"></div>
                  </Col>

                  <Col md={10}>
                    <p> Female</p>
                  </Col>

                  <Col md={6}>
                    <p> 50,341</p>
                  </Col>

                  <Col md={5}>
                    <p> 33</p>
                  </Col>
                </Row>

                <Row gutter={8} className=" pt-2">
                  <Col md={3}>
                    <div className="orange-box"></div>
                  </Col>

                  <Col md={10}>
                    <p> Non-binary</p>
                  </Col>

                  <Col md={6}>
                    <p> 50,341</p>
                  </Col>

                  <Col md={5}>
                    <p> 33</p>
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

export default Audience;
