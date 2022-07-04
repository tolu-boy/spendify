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
import Chart  from "react-apexcharts";

import { Chart as MapChart }  from "react-google-charts";
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


const Expense = () => {
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

  let ChartState = {
    options: {
      legend: {
        show: false
      },

      

      chart: {
        type: 'donut',
      },
      dataLabels: {
        style: {
          colors: ['#FFFFFF', '#FFFFFF', '#000000','#000000'],
          fontSize: "10px",
          fontFamily: "DINNeuzeitGrotesk-Light, sans-serif",
          fontWeight: "bold"
        },
        dropShadow: {
          enabled: false,
          
      }
      },

      colors: ['#0C2A66', '#EE7301', '#007AFF','#0CBEA9']

      
    },


    series: [44, 55, 41, 17, ],
    labels: ['A', 'B', 'C', 'D']
  }

  let ChartState1 = {
          
    series: [{
      name: 'PRODUCT A',
      data: [44, 55, 41]
    }, 
    
  ],
    options: {

      chart: {
        type: 'bar',
        height: "150%",
        stacked: false,
        toolbar: {
          show: false
        },

       

      plotOptions: {
        bar: {
          horizontal: false,
          // borderRadius: 10
          },
         
        },
      },
      
      xaxis: {
        type: 'String',
        categories: ['Male', 'Female', 'Non binary',
        ],
        tickPlacement: 'on',
      },

      yaxis: { 
        show: false,
        labels: {
          show: false,
         
      }
    },
      dataLabels: {
        enabled: false,
       
      },

      legend: {
        show:false
      },
      fill: {
        opacity: 10
      },      


   
    plotOptions: {
        bar: {
            distributed: true, // this line is mandatory
            horizontal: false,
        },
    },
    colors: [ // this array contains different color code for each data
        "#EE3C86",
        "#007AFF",
        "#FF6B00",
    ],

    },
  
   
    
  
  };

  let ChartState2 = {
          
    series: [44, 55, 13, 43, 22],
    options: {

      legend: {
        show: false
      },
      chart: {
        type: 'pie',
      },

      

      dataLabels: {
        style: {
          colors: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
          fontSize: "10px",
          fontFamily: "DINNeuzeitGrotesk-Light, sans-serif",
          fontWeight: "bold"
        },
        dropShadow: {
          enabled: false,
          
      }
    },
    
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      
      colors: ["#45843C", "#1F744B", "#0C876A", "#4A6D1C", "#4BB03C"],

    },
  
  
  };

  return (
    <div>
      <Header title="Behaviour"  />

      <Row>

      <Col md={3} className="pl-1 pt2x">
          <h6 className=""> Expense </h6>
        </Col>

          <Col md={2} className="pl-1 pt2x">
        
            <Select
                  defaultValue="Filter"
                  onChange={handleChange}
                  className="select-item purple-select uppercase letter-space"
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

        
        </Row>
    
     <div className="grid-size info">
      <Card >
        
            <div className="row-end">
            
            <p className="mr-auto pt-1 f-16">Spending patterns</p>

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
                N1,500,053
                  <span>
                    <p className="f-12 grey-color">Total spending</p>
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
                N500,344
                  <span>
                    <p className="f-12 grey-color">Average Spending</p>
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
                {/* <Chart
                  chartType="PieChart"
                  width="900px"
                  height="300px"
                  data={data3}
                  options={options3}
                /> */}

                <Chart
              options={ChartState.options}
              series={ChartState.series}
              type="donut"
              height="107%"
              width="100%"
            />

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
                {/* <MapChart
                  chartType="ColumnChart"
                  width="100%"
                  height="100%"
                  data={data4}
                  options={options4}
                /> */}

                <Chart
              options={ChartState1.options}
              series={ChartState1.series}
              type="bar"
              height="130%"
              width="100%"
            />
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


    <div className="grid-size info">
    <Card className="grid-1" >
        
            <div className="row-end">
            
            <p className="mr-auto pt-1 f-16">Average spend</p>

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


          <Card className="grid-2">
            <Row>
              <Col md={24}>
                <p className="f-18">Categories</p>
              </Col>

              <Col md={10} className="pt-5">
                {/* <Chart
                  chartType="PieChart"
                  width="300px"
                  height="300px"
                  data={data6}
                  options={options6}
                /> */}

                <Chart
              options={ChartState2.options}
              series={ChartState2.series}
              width="120%"
              type="pie"

            />
              </Col>

              <Col md={4} className="v-line mt-2"></Col>

              {/* <div className="line2"></div> */}

              <Col md={10} className="pt-10  pl-2">
                <Row gutter={8} className="line">
                  <Col md={3}>
                    <div className="travelling-box"></div>
                  </Col>

                  <Col md={10}>
                    <p> Travelling</p>
                  </Col>

                  <Col md={6} offset={5}>
                    <p> N44,341</p>
                  </Col>
                </Row>

                <Row gutter={8} className="line pt-2">
                  <Col md={3}>
                    <div className="grocery-box"></div>
                  </Col>

                  <Col md={10}>
                    <p>Grocery</p>
                  </Col>

                  <Col md={6} offset={5}>
                    <p> 50,341</p>
                  </Col>
                </Row>

                <Row gutter={8} className="line pt-2">
                  <Col md={3}>
                    <div className="clothes-box"></div>
                  </Col>

                  <Col md={10}>
                    <p> Clothes</p>
                  </Col>

                  <Col md={6} offset={5}>
                    <p> 34,341</p>
                  </Col>
                </Row>

                <Row gutter={8} className="line pt-2">
                  <Col md={3}>
                    <div className="telecommunication-box"></div>
                  </Col>

                  <Col md={10}>
                    <p className="f-12"> Telecommunication</p>
                  </Col>

                  <Col md={6} offset={5}>
                    <p> 34,341</p>
                  </Col>
                </Row>

                <Row gutter={8} className=" pt-2">
                  <Col md={3}>
                    <div className="utility-box"></div>
                  </Col>

                  <Col md={10}>
                    <p> Utility</p>
                  </Col>

                  <Col md={6} offset={5}>
                    <p> 34,341</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        
    
      </div>
   

   

    



     
    </div>
  );
};

export default Expense;
