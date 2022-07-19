import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Select,
  Image,
  Divider,
  Progress,
  
} from "antd";
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

import { Chart as MapChart }  from "react-google-charts";
import Header from "../../components/Header";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
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
    colorAxis: { colors: ["#828282", "#6D3088"] },
    datalessRegionColor: "#828282",
    defaultColor: "#828282",
  };


  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="#ffff" textAnchor={x > cx ? "middle" : "middle"}>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const data11 = [
    { name: "Group A", value: 400, color: "#0C2A66" }, // you may pass a value directly as string  },
    { name: "Group D", value: 200, color: "#0CBEA9" },
    { name: "Group B", value: 300, color: "#007AFF" },
    { name: "Group C", value: 300, color: "#EE7301" },
  ];

  const data12 = [
    {
      name: "Female",
      uv: 100,
      color: "#EE3B86",
    },
    {
      name: "Male",
      uv: 150,
      color: "#007AFF",
    },

    {
      name: "Non binary",
      uv: 70,
      color: "#FF6B00",
    },
  ];




  return (
    <div>
      <Header title="Audience" dropdown={true} />
    
     <div className="grid-size info">
      <Card >
        
       

            <div className="row-end">
            
            <p className="mr-auto pt-1 f-16">Active users</p>

            <Button shape="round" className="purple-button">
                 Daily
                </Button>
        
            <Button shape="round" className="pink-button ml-2">
                   Weekly
                </Button>

          
            <Button shape="round" className="pink-button ml-2">
            Monthly
                </Button>

                <Button shape="round" className="pink-button ml-2">
            Yearly
                </Button>
                </div>

                

                <Row className="pt-2" >
                  <Col md={24}>
                  <Line options={options} data={data}  />

                  </Col>
                </Row>


          </Card>


          <Card 
          // className="pb-25" 
          >

            <div className="row-end">
            <li className="f-10 mt-2x" >To</li>
        
            <Select
                  defaultValue="Present"
                  onChange={handleChange}
                  className="select-item ml-2"
                  size="small"
                >
                  <Option value="jack"> last week</Option>
                </Select>
          
                <li className="f-10 mt-2x ml-2">From</li>


                <Select
                  defaultValue="Inception"
                  onChange={handleChange}
                  className="select-item ml-2"
                  size="small"
                >
                  <Option value="jack"> last week</Option>
                </Select>

                </div>


            <Row gutter={8} className="pt-10">
              <Col md={5}>
                <Image src={Rdownload} preview={false} />
              </Col>

              <Col md={14}>
                <h4>
                  500,053
                  <span>
                    <p className="f-12 grey-color">Total User</p>
                  </span>
                </h4>
              </Col>

              <Col md={5}>
                <Button
                  size="small"
                  shape="round"
                  className="green-button f-10"
                >
                  +262
                </Button>
              </Col>

              <Divider className="card-divider" />

              <Col md={5}>
                <Image src={Rdownload} preview={false} />
              </Col>

              <Col md={14}>
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

              <Col md={5}>
                <Image src={Rdownload} preview={false} />
              </Col>

              <Col md={14}>
                <h4>
                  40,344
                  <span>
                    <p className="f-12 grey-color">Average Daily active User</p>
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

         
          <Card >
            <MapChart
              chartType="GeoChart"
              width="100%"
              height="150px"
              data={data1}
              options={options1}
            />

            <Row gutter={16}>
              <Col md={12} className="pt-2">
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

              <Col md={12} className="pt-2">
                <p className="purple-color pl-35">
                  Country
                </p>
                <Row>
                  <Col md={24}></Col>
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
    
      </div>


    <div className="grid-col">
   
    <Card>
            <Row gutter={32}>
              <Col md={24}>
                <p className="f-18">Demography</p>
              </Col>

              <Col lg={10} xl={10} xxl={12}  className="ptx10">
                <ResponsiveContainer minWidth={250} aspect={1} maxHeight={300}>
                  <PieChart>
                    <Pie
                      data={data11}
                      label={renderCustomizedLabel}
                      labelLine={false}
                      innerRadius={40}
                      dataKey="value"
                      isAnimationActive={false}
                    >
                      {data11.map((entry, index) => (
                        <Cell fill={entry.color} key={`cell-${index}`} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Col>

              <Col  lg={4} xxl={1} className="v-line mt-2"></Col>

              <Col md={10} xxl={10} className="pt-10 mt-2 pl-2">
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


          <Card>
            <Row gutter={32}>
              <Col md={24}>
                <p className="f-18">Gender</p>
              </Col>

              <Col md={15} className="pt-5">
            <ResponsiveContainer minWidth={150} aspect={1} maxHeight={250}>
                <BarChart
                  data={data12}
                  margin={{
                    top: 5,
                    right: 30,
                    left: -35,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal=""
                    vertical=""
                  />
                  <XAxis dataKey="name" interval={0} />
                  <YAxis tick={false} />

                  <Bar dataKey="uv" fill="#82ca9d">
                    {data12.map((entry, index) => (
                      <Cell fill={entry.color} key={`cell-${index}`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              </Col>

              <Col md={9}>
                <div className="line">
                  <span className="m-end"> %</span>
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
    </div>



      
    </div>
  );
};

export default Audience;
