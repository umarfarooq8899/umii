import React from 'react';
import { Row, Col, Card, Typography, Table, Space, Avatar, Tag } from 'antd';
import { Line, Pie } from '@ant-design/plots';
import { useOutletContext } from 'react-router-dom';
import { recentOrdersData } from '../data/mockData';

const { Title, Text } = Typography;

export default function DashboardEcommerce() {
  const { primaryColor } = useOutletContext();

  const salesData = [
    { month: 'Jan', sales: 3000 },
    { month: 'Feb', sales: 4200 },
    { month: 'Mar', sales: 3800 },
    { month: 'Apr', sales: 5100 },
    { month: 'May', sales: 4900 },
    { month: 'Jun', sales: 6500 },
    { month: 'Jul', sales: 7200 },
  ];

  const categoryData = [
    { type: 'Electronics', value: 45 },
    { type: 'Clothing', value: 25 },
    { type: 'Home', value: 15 },
    { type: 'Sports', value: 10 },
    { type: 'Books', value: 5 },
  ];

  const lineConfig = {
    data: salesData,
    xField: 'month',
    yField: 'sales',
    shapeField: 'smooth',
    color: primaryColor,
    point: { size: 4, shape: 'diamond' },
  };

  const pieConfig = {
    data: categoryData,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.6,
    color: [primaryColor, '#1890ff', '#13c2c2', '#faad14', '#f5222d'],
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
          <Card bordered={false}>
            <Text type="secondary">Total Revenue</Text>
            <Title level={2} style={{ margin: '8px 0', color: primaryColor }}>$124.5K</Title>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false}>
            <Text type="secondary">Total Orders</Text>
            <Title level={2} style={{ margin: '8px 0' }}>1,452</Title>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false}>
            <Text type="secondary">Conversion Rate</Text>
            <Title level={2} style={{ margin: '8px 0' }}>3.2%</Title>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card bordered={false}>
            <Text type="secondary">Avg. Order Value</Text>
            <Title level={2} style={{ margin: '8px 0' }}>$85.20</Title>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={16}>
          <Card title="Sales Over Time" bordered={false}>
            <div style={{ height: 300 }}>
              <Line {...lineConfig} />
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Top Categories" bordered={false}>
            <div style={{ height: 300 }}>
              <Pie {...pieConfig} />
            </div>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: 24 }}>
        <Col span={24}>
          <Card title="Recent Transactions" bordered={false}>
            <Table columns={columns} dataSource={recentOrdersData} pagination={false} scroll={{ x: 'max-content' }} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
