import React from 'react';
import { Row, Col, Card, Typography, Avatar, Button, Space } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, HeartOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useOutletContext } from 'react-router-dom';

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

export default function UiCards() {
  const { primaryColor } = useOutletContext();

  return (
    <>
      <Title level={4} style={{ marginTop: 0, marginBottom: 24 }}>UI Cards Gallery</Title>
      
      <Row gutter={[24, 24]} style={{ display: 'flex' }}>
        {/* Basic Content Card */}
        <Col xs={24} sm={12} lg={8}>
          <Card title="Basic Content" bordered={false} className="premium-hover" style={{ height: '100%', display: 'flex', flexDirection: 'column' }} bodyStyle={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>
              <Paragraph>
                This is a standard card component containing some basic text. It is often used to group related information and provide a clean separation of content within a complex layout.
              </Paragraph>
            </div>
            <Button type="primary" style={{ background: primaryColor, borderColor: primaryColor, borderRadius: 8, boxShadow: `0 4px 12px ${primaryColor}40`, alignSelf: 'flex-start' }}>Read More</Button>
          </Card>
        </Col>

        {/* Card with Image Cover */}
        <Col xs={24} sm={12} lg={8}>
          <Card
            hoverable
            className="premium-hover"
            style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" style={{ height: 200, objectFit: 'cover' }} />}
            bordered={false}
          >
            <Meta title="Retro Gaming Setup" description="Explore the ultimate nostalgic workstation." />
          </Card>
        </Col>

        {/* Card with Actions */}
        <Col xs={24} sm={12} lg={8}>
          <Card
            className="premium-hover"
            style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            bodyStyle={{ flex: 1 }}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
            bordered={false}
          >
            <Meta
              avatar={<Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=CardAvatar" />}
              title="Card title"
              description="This card features interactive action buttons at the bottom footer area."
            />
          </Card>
        </Col>

        {/* Social Media Style Card */}
        <Col xs={24} sm={12} lg={8}>
          <Card bordered={false} className="premium-hover" style={{ height: '100%', display: 'flex', flexDirection: 'column' }} bodyStyle={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
              <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Designer" />
              <div style={{ marginLeft: 12 }}>
                <Text strong style={{ display: 'block' }}>Alex Designer</Text>
                <Text type="secondary" style={{ fontSize: 12 }}>2 hours ago</Text>
              </div>
            </div>
            <Paragraph>
              Just finished the new UI kit for the upcoming project. The dark mode implementation looks stunning with these vibrant accent colors! 🎨✨
            </Paragraph>
            <img alt="post image" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" style={{ width: '100%', borderRadius: 8, marginBottom: 16 }} />
            <Space size="large">
              <Space style={{ cursor: 'pointer', color: primaryColor }}><HeartOutlined /> 1.2k</Space>
              <Space style={{ cursor: 'pointer', color: '#888' }}><ShareAltOutlined /> 45</Space>
            </Space>
          </Card>
        </Col>

        {/* Inner Tabbed Card */}
        <Col xs={24} sm={12} lg={8}>
          <Card
            bordered={false}
            className="premium-hover"
            style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            bodyStyle={{ flex: 1 }}
            title="Tabbed Card Widget"
            tabList={[
              { key: 'tab1', tab: 'Overview' },
              { key: 'tab2', tab: 'Analytics' },
              { key: 'tab3', tab: 'Settings' },
            ]}
            activeTabKey="tab1"
          >
            <Title level={5}>Project Overview</Title>
            <Paragraph>
              This card utilizes internal tabs to switch between different views without leaving the context of the widget. Very useful for dense data environments.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </>
  );
}
