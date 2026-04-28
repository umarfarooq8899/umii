import React from 'react';
import { Row, Col, Card, Typography, Avatar, Button, Space, Divider, List } from 'antd';
import { TwitterOutlined, FacebookOutlined, LinkedinOutlined, CheckOutlined } from '@ant-design/icons';
import { useOutletContext } from 'react-router-dom';

const { Title, Text } = Typography;

export default function WidgetsStatic() {
  const { primaryColor } = useOutletContext();

  const pricingData = [
    { title: 'Basic', price: '$19', features: ['1 User', '10GB Storage', 'Basic Support'] },
    { title: 'Pro', price: '$49', features: ['5 Users', '50GB Storage', 'Priority Support', 'Analytics'] },
    { title: 'Enterprise', price: '$99', features: ['Unlimited Users', '500GB Storage', '24/7 Support', 'Custom Domain'] },
  ];

  return (
    <>
      <Title level={4} style={{ marginTop: 0, marginBottom: 24 }}>Static Widgets</Title>

      <Row gutter={[24, 24]}>
        {/* User Profile Card */}
        <Col xs={24} md={12} lg={8}>
          <Card bordered={false} style={{ textAlign: 'center' }}>
            <Avatar size={100} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" style={{ marginBottom: 16 }} />
            <Title level={4} style={{ margin: 0 }}>Pakistan</Title>
            <Text type="secondary">Senior Developer</Text>

            <Space style={{ marginTop: 16 }}>
              <Button type="primary" style={{ background: primaryColor, borderColor: primaryColor }}>Follow</Button>
              <Button>Message</Button>
            </Space>

            <Divider />

            <Row>
              <Col span={8}>
                <Title level={4} style={{ margin: 0 }}>245</Title>
                <Text type="secondary">Posts</Text>
              </Col>
              <Col span={8}>
                <Title level={4} style={{ margin: 0 }}>12.5K</Title>
                <Text type="secondary">Followers</Text>
              </Col>
              <Col span={8}>
                <Title level={4} style={{ margin: 0 }}>1,452</Title>
                <Text type="secondary">Following</Text>
              </Col>
            </Row>

            <Space size="large" style={{ marginTop: 24 }}>
              <TwitterOutlined style={{ fontSize: 20, color: '#1da1f2' }} />
              <FacebookOutlined style={{ fontSize: 20, color: '#4267B2' }} />
              <LinkedinOutlined style={{ fontSize: 20, color: '#0077b5' }} />
            </Space>
          </Card>
        </Col>

        {/* Pricing Cards */}
        {pricingData.map((tier, index) => (
          <Col xs={24} md={12} lg={5} key={index}>
            <Card bordered={false} style={{ textAlign: 'center', height: '100%', borderTop: index === 1 ? `4px solid ${primaryColor}` : 'none' }}>
              <Title level={4} type="secondary">{tier.title}</Title>
              <div style={{ margin: '24px 0' }}>
                <Title level={1} style={{ margin: 0, color: index === 1 ? primaryColor : 'inherit' }}>{tier.price}</Title>
                <Text type="secondary">/ month</Text>
              </div>

              <List
                dataSource={tier.features}
                renderItem={item => (
                  <List.Item style={{ borderBottom: 'none', justifyContent: 'center' }}>
                    <Space>
                      <CheckOutlined style={{ color: '#52c41a' }} />
                      <Text>{item}</Text>
                    </Space>
                  </List.Item>
                )}
              />

              <Button type={index === 1 ? 'primary' : 'default'} block style={{ marginTop: 24, background: index === 1 ? primaryColor : undefined, borderColor: index === 1 ? primaryColor : undefined }}>
                Choose Plan
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
