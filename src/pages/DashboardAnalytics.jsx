import React from 'react';
import { Row, Col, Card, Typography, Progress, Badge, Space, Tag, Table, Checkbox } from 'antd';
import { ArrowUpOutlined, StarFilled } from '@ant-design/icons';
import { Area, Pie, Column } from '@ant-design/plots';
import {
  totalViewsData,
  deviceData,
  recentOrdersData,
  monthlyRevenueData,
  totalClicksData,
  visitorsGrowthData,
  campaignStats,
  newUsers,
  detailedViewsData,
  detailedRevenueData
} from '../data/mockData';
import { useOutletContext } from 'react-router-dom';
import { Avatar } from 'antd'; // Make sure to import Avatar from antd

const { Title, Text } = Typography;

export default function DashboardAnalytics() {
  const { primaryColor, isLight, themeTokens } = useOutletContext();

  // Table columns
  const columns = [
    {
      title: 'Item Name',
      dataIndex: 'item',
      key: 'item',
      render: (text, record) => (
        <Space>
          <Avatar src={record.image} shape="square" />
          <Text strong>{text}</Text>
        </Space>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Vendor',
      dataIndex: 'vendor',
      key: 'vendor',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === 'Completed' ? 'success' : status === 'Pending' ? 'warning' : 'error';
        return <Tag color={color} style={{ borderRadius: 12 }}>{status}</Tag>;
      },
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating) => (
        <Space>
          <StarFilled style={{ color: '#faad14' }} />
          <Text strong>{rating}</Text>
        </Space>
      ),
    },
  ];

  // Chart Configs
  const flattenedRevenueData = detailedRevenueData.flatMap(item => [
    { month: item.month, value: item.revenue, category: 'Revenue' },
    { month: item.month, value: item.profit, category: 'Profit' },
    { month: item.month, value: item.expenses, category: 'Expenses' },
  ]);

  const monthlyRevenueConfig = {
    data: flattenedRevenueData,
    xField: 'month',
    yField: 'value',
    colorField: 'category',
    isGroup: true,
    theme: isLight ? 'light' : 'dark',
    color: [primaryColor, '#00e5ff', '#ff00e4'],
    columnStyle: { radius: [4, 4, 0, 0] },
    slider: { x: { style: { fill: 'rgba(255,255,255,0.1)' } } },
    legend: { position: 'top-left' },
  };

  const deviceConfig = {
    data: deviceData,
    angleField: 'value',
    colorField: 'type',
    innerRadius: 0.7,
    theme: isLight ? 'light' : 'dark',
    color: [primaryColor, '#00e5ff', '#ff00e4'],
    statistic: {
      title: false,
      content: {
        style: { whiteSpace: 'pre-wrap', overflow: 'hidden', textOverflow: 'ellipsis', color: themeTokens.colorText, fontSize: '20px' },
        content: '68%\nTotal Views',
      },
    },
    legend: { color: { position: 'bottom' } },
  };

  const totalClicksConfig = {
    data: totalClicksData,
    xField: 'month',
    yField: 'clicks',
    theme: isLight ? 'light' : 'dark',
    color: `l(90) 0:#ff00e4 1:${primaryColor}`,
    columnStyle: { radius: [4, 4, 0, 0] },
  };

  const flattenedViewsData = detailedViewsData.flatMap(item => [
    { date: item.date, value: item.views, category: 'Total Views' },
    { date: item.date, value: item.uniqueViews, category: 'Unique Views' },
  ]);

  const totalViewsConfig = {
    data: flattenedViewsData,
    xField: 'date',
    yField: 'value',
    colorField: 'category',
    shapeField: 'smooth',
    theme: isLight ? 'light' : 'dark',
    color: ['#00e5ff', primaryColor],
    slider: { x: { style: { fill: 'rgba(255,255,255,0.1)' } } },
    legend: { position: 'top-right' },
  };

  const totalUsersConfig = {
    data: visitorsGrowthData,
    xField: 'date',
    yField: 'value',
    shapeField: 'smooth',
    theme: isLight ? 'light' : 'dark',
    color: primaryColor,
    style: { fill: `linear-gradient(-90deg, transparent 0%, ${primaryColor} 100%)`, fillOpacity: 0.3 },
    axis: { x: { label: null }, y: { label: null } }
  };

  return (
    <>
      {/* Top Row: Welcome & Core Metrics */}
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={12}>
          <Card variant="borderless" className="premium-hover" style={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
            <div style={{ zIndex: 2, position: 'relative' }}>
              <Title level={3} style={{ marginTop: 0 }}>Welcome back Umar!</Title>
              <Text type="secondary">You have 2 new messages and 15 new tasks.</Text>

              <Row gutter={24} style={{ marginTop: 32 }}>
                <Col span={12}>
                  <Text type="secondary">Today's Sales</Text>
                  <Title level={2} style={{ margin: '4px 0', color: '#52c41a' }}>$65.4K</Title>
                  <Progress percent={78} strokeColor="#52c41a" showInfo={false} />
                </Col>
                <Col span={12}>
                  <Text type="secondary">Growth Rate</Text>
                  <Title level={2} style={{ margin: '4px 0', color: primaryColor }}>78.4%</Title>
                  <Progress percent={78} strokeColor={primaryColor} showInfo={false} />
                </Col>
              </Row>
            </div>
            {/* Decorative Background Element */}
            <div style={{
              position: 'absolute', right: -20, top: -20, width: 200, height: 200,
              background: `radial-gradient(circle, ${primaryColor}40 0%, transparent 70%)`,
              zIndex: 1, borderRadius: '50%'
            }} />
          </Card>
        </Col>

        <Col xs={24} md={12} lg={6}>
          <Card variant="borderless" className="premium-hover" style={{ height: '100%' }}>
            <Text type="secondary">Active Users</Text>
            <Title level={2} style={{ margin: '8px 0' }}>42.5K</Title>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
              <Progress
                type="dashboard"
                percent={75}
                strokeColor="#00e5ff"
                railColor={themeTokens.colorBorder}
                size={140}
                format={() => ''}
              />
            </div>
            <Space size="large" style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
              <Space size="small"><Badge color="#00e5ff" /><Text type="secondary">Desktop</Text></Space>
              <Space size="small"><Badge color={themeTokens.colorTextSecondary} /><Text type="secondary">Mobile</Text></Space>
            </Space>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={6}>
          <Card variant="borderless" className="premium-hover" style={{ height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Text type="secondary">Total Users</Text>
                <Title level={2} style={{ margin: '8px 0' }}>97.4K</Title>
              </div>
              <Tag color="success" icon={<ArrowUpOutlined />} style={{ alignSelf: 'flex-start' }}>12.5%</Tag>
            </div>
            <div style={{ height: 150, marginTop: 16 }}>
              <Area {...totalUsersConfig} />
            </div>
          </Card>
        </Col>
      </Row>

      {/* Middle Row: Revenue & Traffic */}
      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={8}>
          <Card title="Monthly Revenue" variant="borderless" className="premium-hover" style={{ height: '100%' }}>
            <div style={{ height: 250 }}>
              <Column {...monthlyRevenueConfig} />
            </div>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <Card title="Device Type" variant="borderless" className="premium-hover" style={{ height: '100%' }}>
            <div style={{ height: 250 }}>
              <Pie {...deviceConfig} />
            </div>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={8}>
          <Card title="Total Clicks" variant="borderless" className="premium-hover" style={{ height: '100%' }}>
            <div style={{ height: 250 }}>
              <Column {...totalClicksConfig} />
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={16}>
          <Card title="Total Views" variant="borderless" className="premium-hover" style={{ height: '100%' }}>
            <div style={{ height: 300 }}>
              <Area {...totalViewsConfig} />
            </div>
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card title="Campaign Stats" variant="borderless" className="premium-hover" style={{ height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
              {campaignStats.map((stat, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <Text>{stat.title}</Text>
                    <Text strong>{stat.value}</Text>
                  </div>
                  <Progress percent={stat.percent} strokeColor={stat.color} showInfo={false} />
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      {/* Bottom Row Widgets & Tables */}
      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={16}>
          <Card title="Recent Orders" variant="borderless" className="premium-hover" style={{ height: '100%' }}>
            <Table
              columns={columns}
              dataSource={recentOrdersData}
              pagination={false}
              scroll={{ x: 'max-content' }}
            />
          </Card>
        </Col>

        <Col xs={24} lg={8}>
          <Card title="New Users" variant="borderless" className="premium-hover" style={{ height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {newUsers.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${themeTokens.colorBorder}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Avatar src={item.avatar} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <Text strong style={{ lineHeight: 1.2 }}>{item.name}</Text>
                      <Text type="secondary" style={{ fontSize: 12 }}>{item.handle}</Text>
                    </div>
                  </div>
                  <Checkbox />
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
