import React from "react";
import Header from "../../components/Header";
import {  Card, Select, Divider } from "antd";
import { Chart } from "react-google-charts";

const GlobalStats = () => {
  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

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
    legend: "none",
  };

  return (
    <div>
      <Header title="Global stats" />
      {/* <Row gutter={16} className="info" bodyStyle={{ height: "100vh", overflow: "auto" }}>
        <Col md={24} >
          <Card >
            <Row style={{height: '100%', width: '100%'}}>
              <Col md={4}>
                <p className="">Filter by:</p>
                <Divider className="card-divider" />

                <Row>
                  <Col md={24}>
                    <li className="pb-2">Select Location</li>
                    <Select onChange={handleChange} className="globalSelect">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </Col>

                

                  <Col md={24} className="pt-2">
                    <li className="pb-2">Filter by behaviour</li>
                    <Select onChange={handleChange} className="globalSelect">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </Col>

                  <Col md={24} className="pt-2">
                    <li className="pb-2">Gender</li>
                    <Select onChange={handleChange} className="globalSelect">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </Col>

                  <Col md={24} className="pt-2">
                    <li className="pb-2">Demography</li>
                    <Select onChange={handleChange} className="globalSelect">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </Col>

                  <Col md={24} className="pt-2">
                    <li className="pb-2">Spending category</li>
                    <Select onChange={handleChange} className="globalSelect">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </Col>
                </Row>
              </Col>

              <Col md={1} className="v-line"></Col>

              <Col md={16}>
                <Chart
                  chartType="GeoChart"
                  width="100%"
                  height="100%"
                  data={data1}
                  options={options1}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row> */}

       <Card className="m-a" type="inner">
      <div className="grid-size">

      <div className="grid-5 ">
      <p className="ml-2 pt-2">Filter by:</p>
       <Divider className="card-divider" />
       <div >
                    <li className="pb-2">Select Location</li>
                    <Select onChange={handleChange} className="globalSelect">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </div>

                

                  <div  className="ptxxl">
                    <li className="pb-2">Filter by behaviour</li>
                    <Select onChange={handleChange} className="globalSelect">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </div>

                  <div md={24} className="ptxxl">
                    <li className="pb-2">Gender</li>
                    <Select onChange={handleChange} className="globalSelect">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </div>

                  <div md={24} className="ptxxl">
                    <li className="pb-2">Demography</li>
                    <Select onChange={handleChange} className="globalSelect">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </div>

                  <div md={24} className="ptxxl">
                    <li className="pb-2">Spending category</li>
                    <Select onChange={handleChange} className="globalSelect">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="disabled" disabled>
                        Disabled
                      </Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </div>
             
              

      </div>
     
     <div className="gridv-2 ">

     </div>


     <div className="gridv-3">
     <Chart
                  chartType="GeoChart"
                  width="100%"
                  height="100%"
                  data={data1}
                  options={options1}
                />
     </div>
     </div>
      </Card> 

      


    </div>
  );
};

export default GlobalStats;
