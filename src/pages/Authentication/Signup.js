import React from "react";
import { Row, Col, Button, Form, Input, Card, Select } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import logo from "../../images/logo.svg";
import company from "../../images/company.svg";
import website from "../../images/www.svg";
import LatestUpdate from "../../components/LatestUpdate";
import { Icon } from "@ant-design/compatible";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { Option } = Select;
  const navigate = useNavigate();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select defaultValue={`+1`}>
        <Option value="86">+2</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div>
      <Row>
        <Col md={14}>
          <LatestUpdate />
        </Col>

        <Col md={10} className="grey-background">
          <section className="login-section">
            <Row className="m-20">
              <Col md={6}>
                <img src={logo} alt="logo" />
              </Col>

              <Col md={17}>
                <Row>
                  <Col md={20}>
                    <li className="login-header line2 "> MySpendify</li>
                    <li className="analytics">ANALYTICS</li>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="pt-10">
              <Col md={24}>
                <Card>
                  <h6>Sign Up</h6>
                  <Form name="normal_login" initialValues={{ remember: true }}>
                    <Row gutter={16}>
                      <Col md={24}>
                        <Form.Item
                          name="email"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Email!",
                            },
                          ]}
                        >
                          <Input
                            prefix={<MailOutlined />}
                            placeholder="Email"
                          />
                        </Form.Item>
                      </Col>

                      <Col md={12}>
                        <Form.Item
                          name="fName"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Full name!",
                            },
                          ]}
                        >
                          <Input
                            prefix={<UserOutlined />}
                            type="text"
                            placeholder="Full name"
                          />
                        </Form.Item>
                      </Col>

                      <Col md={12}>
                        <Form.Item
                          name="password"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Password!",
                            },
                          ]}
                        >
                          <Input
                            prefix={
                              <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Item>
                      </Col>

                      <Col md={24}>
                        <Form.Item
                          name="company"
                          rules={[
                            {
                              required: true,
                              message: "Please input your company!",
                            },
                          ]}
                        >
                          <Input
                            prefix={
                              <Icon
                                component={() => (
                                  <img src={company} alt="comapny" />
                                )}
                              />
                            }
                            type="text"
                            placeholder="company"
                          />
                        </Form.Item>
                      </Col>

                      <Col md={24}>
                        <Form.Item
                          name="website"
                          rules={[
                            {
                              required: true,
                              message: "Please input your website!",
                            },
                          ]}
                        >
                          <Input
                            prefix={
                              <Icon
                                component={() => (
                                  <img src={website} alt="website" />
                                )}
                              />
                            }
                            type="text"
                            placeholder="Website"
                          />
                        </Form.Item>
                      </Col>

                      <Col md={24}>
                        <Form.Item
                          name="phone"
                          rules={[
                            {
                              required: true,
                              message: "Please input your phone number!",
                            },
                          ]}
                        >
                          <Input
                            addonBefore={prefixSelector}
                            placeholder="Phone number"
                          />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Form.Item className="pt-2">
                      <Button htmlType="submit" block className="form-button">
                        Login
                      </Button>
                    </Form.Item>
                    <Row>
                      <Col md={24} className="text-center">
                        <Form.Item>
                          <p className="f-12">
                            By creating account You agree to the{" "}
                            <span className="purple-color">Terms of use </span>{" "}
                            and
                            <span className="purple-color">
                              {" "}
                              Privacy Policy
                            </span>
                          </p>
                        </Form.Item>
                      </Col>

                      <Col md={24}>
                        <p className="text-center">
                          Have an account?
                          <span
                            className="purple-color span-singup"
                            onClick={() => {
                              navigate("/");
                            }}
                          >
                            Login
                          </span>
                        </p>
                      </Col>
                    </Row>
                  </Form>
                </Card>
              </Col>
            </Row>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default SignUp;
