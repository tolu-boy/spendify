import React from "react";
import { Row, Col, Card, Button, Select, Image, Divider, Progress} from "antd";
import Rdownload from "../../images/r-download.svg";
import { Chart as MapChart } from "react-google-charts";
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

 ;

  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
  };

  const labels = [
    "Kaduna",
    "Abuja",
    "Lagos",
    "Kebbi",
    "Ogun",
    "Ibadan",
    "Others",
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
      <Header title="Behaviour"  />

      <Row>
          {/* <Col md={5} className="pl-1">
            <Dropdown overlay={menu}>
              <h6 onClick={(e) => e.preventDefault()} className="pt-2  pl-2">
              Ratios
                <DownOutlined className="pl-1"/>
              </h6>
            </Dropdown>
          </Col> */}


      <Col md={3} className="pl-1 pt2x">
          <h6 className=""> Ratios </h6>
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
            
            <p className="mr-auto pt-1">Expense to Income ratio</p>

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
                  <Bar options={options} data={data} />

                  </Col>
                </Row>


          </Card>


          <Card>

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
                32%                  <span>
                    <p className="f-12 grey-color">Total Expense : Total income </p>
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
                45%
                <span>
                    <p className="f-12 grey-color">Average Expense : Income</p>
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
    <div className="row-end">
            
            <p className="mr-auto pt-1">By States</p>

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
               
               <Row>
               <Col md={24} className="pt-2 ">
                <Bar options={options} data={data} />
              </Col>
               </Row>


          </Card>


          <Card>
          <div className="row-end">
            
            <p className="mr-auto pt-1">By Gender</p>

            
                </div>

                <Row>
               <Col md={24} className="pt-2">
               <Bar options={options2} data={data2}  />
              </Col>
               </Row>
           
          </Card>
    </div>


   
   

    



     
    </div>
  );
};

export default IncomeToExpenseRatio;
