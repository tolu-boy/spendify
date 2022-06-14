import React from "react";
import { Row, Col, Button, Form, Input, Card, Image } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import logo from "../../images/s-logo.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="login-section">
        <Row className="m-20">
          <Col md={6}>
            <Image src={logo} preview={false} width={57} />
          </Col>

          <Col md={15}>
            <li className="login-header line2 "> MySpendify</li>
            <li className="analytics">ANALYTICS</li>
          </Col>
        </Row>

        <Row className="pt-10">
          <Col md={24}>
            <Card bordered={false} className="card-body">
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
                    prefix={<LockOutlined className="site-form-item-icon" />}
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
                        <span
                          className="purple-color span-singup pl-2"
                          onClick={() => {
                            navigate("/signup");
                          }}
                        >
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
    </div>
  );
};

export default Login;
