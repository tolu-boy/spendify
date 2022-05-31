import React from "react";
import { Row, Col, Button, Form, Input, Card } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

import logo from "../../images/logo.svg";
import LatestUpdate from "../../components/LatestUpdate";

const Login = () => {
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
                  <h6>Login</h6>
                  <Form name="normal_login" initialValues={{ remember: true }}>
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Username!",
                        },
                      ]}
                    >
                      <Input prefix={<MailOutlined />} placeholder="Email" />
                    </Form.Item>

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

                    <Form.Item>
                      <Button htmlType="submit" block className="form-button">
                        Login
                      </Button>
                    </Form.Item>
                    <Row>
                      <Col md={24} className="text-center">
                        <Form.Item>
                          <p>
                            New here?
                            <span className="purple-color span-singup">
                              Sign Up
                            </span>
                          </p>
                        </Form.Item>
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

export default Login;
