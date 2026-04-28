import React from 'react';
import { Row, Col, Card, Typography, Table, Space, Avatar, Tag } from 'antd';
import { Line, Pie } from '@ant-design/plots';
import { useOutletContext } from 'react-router-dom';
import { recentOrdersData, detailedEcommerceSalesData, detailedCategoryData } from '../data/mockData';

const { Title, Text } = Typography;

export default function DashboardEcommerce() {
  const { primaryColor, isLight } = useOutletContext();

  const flattenedSalesData = detailedEcommerceSalesData.flatMap(item => [
    { date: item.date, value: item.sales, category: 'Sales Volume ($)' },
    { date: item.date, value: item.orders * 20, category: 'Orders (Scaled)' },
  ]);

  const lineConfig = {
    data: flattenedSalesData,
    xField: 'date',
    yField: 'value',
    colorField: 'category',
    shapeField: 'smooth',
    theme: isLight ? 'light' : 'dark',
    color: [primaryColor, '#ff00e4'],
    point: { size: 3, shape: 'circle' },
    slider: { x: { style: { fill: isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' } } },
    legend: { position: 'top-right' },
  };

  const pieConfig = {
    data: detailedCategoryData,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    theme: isLight ? 'light' : 'dark',
    color: [primaryColor, '#1890ff', '#13c2c2', '#faad14', '#f5222d', '#722ed1'],
    legend: { position: 'right' }
  };

  const columns = [
    { title: 'Order ID', dataIndex: 'key', key: 'key', render: text => `#ORD-${text}091` },
    { title: 'Customer', dataIndex: 'vendor', key: 'vendor' },
    { title: 'Product', dataIndex: 'item', key: 'item', render: (text, record) => (
      <Space>
        <Avatar src={record.image} shape="square" />
        <Text strong>{text}</Text>
      </Space>
    )},
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
    { title: 'Status', dataIndex: 'status', key: 'status', render: (status) => {
      let color = status === 'Completed' ? 'success' : status === 'Pending' ? 'warning' : 'error';
      return <Tag color={color}>{status}</Tag>;
    }},
  ];

  return (
    <>
      <Title level={4} style={{ marginTop: 0, marginBottom: 24 }}>eCommerce Overview</Title>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} lg={6}>
          <Card variant="borderless">
            <Text type="secondary">Total Revenue</Text>
            <Title level={2} style={{ margin: '8px 0', color: primaryColor }}>$124.5K</Title>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card variant="borderless">
            <Text type="secondary">Total Orders</Text>
            <Title level={2} style={{ margin: '8px 0' }}>1,452</Title>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card variant="borderless">
            <Text type="secondary">Conversion Rate</Text>
            <Title level={2} style={{ margin: '8px 0' }}>3.2%</Title>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card variant="borderless">
            <Text type="secondary">Avg. Order Value</Text>
            <Title level={2} style={{ margin: '8px 0' }}>$85.20</Title>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={16}>
          <Card title="Sales Over Time" variant="borderless">
            <div style={{ height: 300 }}>
              <Line {...lineConfig} />
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Top Categories" variant="borderless">
            <div style={{ height: 300 }}>
              <Pie {...pieConfig} />
            </div>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="Recent Transactions" variant="borderless">
            <Table columns={columns} dataSource={recentOrdersData} pagination={false} scroll={{ x: 'max-content' }} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
