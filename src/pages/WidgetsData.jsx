import React from 'react';
import { Row, Col, Card, Typography, Progress, Space } from 'antd';
import { Area, Column } from '@ant-design/plots';
import { useOutletContext } from 'react-router-dom';
import { totalViewsData, monthlyRevenueData } from '../data/mockData';

const { Title, Text } = Typography;

export default function WidgetsData() {
  const { primaryColor } = useOutletContext();

  const areaConfig = {
    data: totalViewsData,
    xField: 'date',
    yField: 'views',
    shapeField: 'smooth',
    color: primaryColor,
    style: { fill: `linear-gradient(-90deg, transparent 0%, ${primaryColor} 100%)`, fillOpacity: 0.3 },
    axis: false,
  };

  const colConfig = {
    data: monthlyRevenueData.slice(0, 5),
    xField: 'month',
    yField: 'revenue',
    color: '#00e5ff',
    axis: false,
    columnStyle: { radius: [2, 2, 0, 0] },
  };

  return (
    <>
      <Title level={4} style={{ marginTop: 0, marginBottom: 24 }}>Data Widgets</Title>
      
      <Row gutter={[24, 24]}>
        {/* Tiny Chart Cards */}
        <Col xs={24} sm={12} lg={8}>
          <Card bordered={false}>
            <Text type="secondary">Page Views</Text>
            <Title level={2} style={{ margin: '8px 0' }}>8,421</Title>
            <div style={{ height: 60, marginTop: 16 }}>
              <Area {...areaConfig} />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card bordered={false}>
            <Text type="secondary">Total Earnings</Text>
            <Title level={2} style={{ margin: '8px 0', color: '#52c41a' }}>$12,450</Title>
            <div style={{ height: 60, marginTop: 16 }}>
              <Column {...colConfig} />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card bordered={false}>
            <Text type="secondary">Bounce Rate</Text>
            <Title level={2} style={{ margin: '8px 0', color: '#f5222d' }}>42.3%</Title>
            <Progress percent={42.3} status="exception" showInfo={false} />
          </Card>
        </Col>

        {/* Progress Breakdown */}
        <Col xs={24} lg={12}>
          <Card title="Traffic Sources" bordered={false}>
            <Space direction="vertical" style={{ width: '100%' }} size="large">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text>Organic Search</Text>
                  <Text strong>45%</Text>
                </div>
                <Progress percent={45} strokeColor={primaryColor} showInfo={false} />
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text>Social Media</Text>
                  <Text strong>30%</Text>
                </div>
                <Progress percent={30} strokeColor="#1890ff" showInfo={false} />
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Text>Direct</Text>
                  <Text strong>25%</Text>
                </div>
                <Progress percent={25} strokeColor="#52c41a" showInfo={false} />
              </div>
            </Space>
          </Card>
        </Col>

        {/* Circular Gauges */}
        <Col xs={24} lg={12}>
          <Card title="Goal Completions" bordered={false}>
            <Row justify="space-around" align="middle" style={{ height: '100%' }}>
              <Col style={{ textAlign: 'center' }}>
                <Progress type="circle" percent={75} strokeColor={primaryColor} />
                <div style={{ marginTop: 8 }}><Text>Signups</Text></div>
              </Col>
              <Col style={{ textAlign: 'center' }}>
                <Progress type="circle" percent={48} strokeColor="#faad14" />
                <div style={{ marginTop: 8 }}><Text>Purchases</Text></div>
              </Col>
              <Col style={{ textAlign: 'center' }}>
                <Progress type="circle" percent={100} strokeColor="#52c41a" />
                <div style={{ marginTop: 8 }}><Text>Downloads</Text></div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
