import React from 'react';
import { Form, Input, Button, Row, Col, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';

const QuestionsPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Handle form submission, e.g., validation
    // Redirect to the budget page
    navigate('/budget');
  };

  return (
    <div className="container">
      <h2>Finance Questions</h2>
      <Form onFinish={handleSubmit} layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Salary" name="salary">
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Other Income" name="otherIncome">
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Gender" name="gender">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Age" name="age">
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Rent" name="rent">
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Mortgages" name="mortgages">
              <Checkbox />
            </Form.Item>
          </Col>
        </Row>
       
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Car Loan" name="carLoan">
              <Checkbox />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Kids" name="kids">
              <Checkbox />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Groceries Amount" name="groceriesAmount">
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Leisure and Entertainment Amount"
              name="leisureEntertainmentAmount"
            >
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Electricity Amount" name="electricityAmount">
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Water Amount" name="waterAmount">
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="WiFi Amount" name="wifiAmount">
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Health Expenses Amount"
              name="healthExpensesAmount"
            >
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
        {/* Add more rows for additional questions */}
       
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Get My Budget
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default QuestionsPage;
