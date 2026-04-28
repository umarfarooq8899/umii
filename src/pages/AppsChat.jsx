import React from 'react';
import { Row, Col, Card, Typography, List, Avatar, Input, Button, Space, Divider, Badge } from 'antd';
import { SearchOutlined, SendOutlined, PaperClipOutlined, SmileOutlined, PhoneOutlined, VideoCameraOutlined, MoreOutlined, CheckOutlined } from '@ant-design/icons';
import { useOutletContext } from 'react-router-dom';

const { Title, Text } = Typography;

export default function AppsChat() {
  const { primaryColor } = useOutletContext();

  const contacts = [
    { id: 1, name: 'Alice Freeman', status: 'online', preview: 'See you tomorrow!', time: '10:30 AM' },
    { id: 2, name: 'Bob Smith', status: 'offline', preview: 'Are you available for a call?', time: 'Yesterday' },
    { id: 3, name: 'Marketing Group', status: 'online', preview: 'Alice: I will send the files.', time: 'Oct 12' },
    { id: 4, name: 'Sarah Connor', status: 'online', preview: 'Thanks!', time: 'Oct 10' },
  ];

  const messages = [
    { id: 1, sender: 'Alice Freeman', isMe: false, text: 'Hey, are you free to chat about the new project?', time: '10:15 AM' },
    { id: 2, sender: 'Me', isMe: true, text: 'Yes, I am available now. What is on your mind?', time: '10:17 AM' },
    { id: 3, sender: 'Alice Freeman', isMe: false, text: 'I wanted to discuss the timeline for the eCommerce module.', time: '10:18 AM' },
    { id: 4, sender: 'Me', isMe: true, text: 'Sure, we have until the end of the month to wrap it up.', time: '10:20 AM' },
    { id: 5, sender: 'Alice Freeman', isMe: false, text: 'Perfect. See you tomorrow!', time: '10:30 AM' },
  ];

  return (
    <>
      <Title level={4} style={{ marginTop: 0, marginBottom: 24 }}>Messages</Title>
      <div className="app-container">
        <Row style={{ height: '100%', width: '100%' }}>
          {/* Contact List Sidebar */}
          <Col span={7} className="app-sidebar" style={{ height: '100%', display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <Input prefix={<SearchOutlined style={{ color: '#888' }} />} placeholder="Search contacts" style={{ borderRadius: 20, background: 'rgba(255,255,255,0.05)', border: 'none' }} />
            </div>
            <List
              itemLayout="horizontal"
              dataSource={contacts}
              style={{ flex: 1, overflowY: 'auto', padding: '12px' }}
              renderItem={item => (
                <List.Item className="premium-hover" style={{ 
                  padding: '12px 16px', 
                  cursor: 'pointer', 
                  background: item.id === 1 ? `linear-gradient(90deg, ${primaryColor}20 0%, transparent 100%)` : 'transparent', 
                  border: item.id === 1 ? `1px solid ${primaryColor}40` : '1px solid transparent',
                  borderRadius: 12,
                  marginBottom: 8
                }}>
                  <List.Item.Meta
                    avatar={
                      <Badge dot status={item.status === 'online' ? 'success' : 'default'} offset={[-4, 30]}>
                        <Avatar src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`} size="large" />
                      </Badge>
                    }
                    title={
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Text strong style={{ color: item.id === 1 ? primaryColor : 'inherit' }}>{item.name}</Text>
                        <Text type="secondary" style={{ fontSize: 12 }}>{item.time}</Text>
                      </div>
                    }
                    description={<Text type="secondary" ellipsis>{item.preview}</Text>}
                  />
                </List.Item>
              )}
            />
          </Col>

          {/* Chat Area */}
          <Col span={17} style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,0.2)' }}>
            {/* Chat Header */}
            <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Space>
                <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice Freeman" />
                <div>
                  <Title level={5} style={{ margin: 0 }}>Alice Freeman</Title>
                  <Text type="secondary" style={{ fontSize: 12, color: '#52c41a' }}>Online</Text>
                </div>
              </Space>
              <Space size="large">
                <PhoneOutlined className="premium-hover" style={{ fontSize: 18, color: primaryColor, cursor: 'pointer' }} />
                <VideoCameraOutlined className="premium-hover" style={{ fontSize: 18, color: primaryColor, cursor: 'pointer' }} />
                <MoreOutlined className="premium-hover" style={{ fontSize: 18, color: '#aaa', cursor: 'pointer' }} />
              </Space>
            </div>

            {/* Messages */}
            <div style={{ padding: 24, flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Divider plain style={{ color: '#555', fontSize: 12, borderColor: 'rgba(255,255,255,0.05)' }}>Today</Divider>
              {messages.map(msg => (
                <div key={msg.id} style={{ display: 'flex', flexDirection: msg.isMe ? 'row-reverse' : 'row', alignItems: 'flex-end', gap: '12px' }}>
                  {!msg.isMe && <Avatar src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${msg.sender}`} />}
                  <div className="premium-hover" style={{
                    maxWidth: '65%',
                    position: 'relative'
                  }}>
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: msg.isMe ? '16px 16px 0 16px' : '16px 16px 16px 0',
                      background: msg.isMe ? `linear-gradient(135deg, ${primaryColor}, #00e5ff)` : '#2a2a2a',
                      color: '#fff',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                      {msg.text}
                    </div>
                    <Text type="secondary" style={{ fontSize: 11, position: 'absolute', bottom: -20, [msg.isMe ? 'right' : 'left']: 4 }}>
                      {msg.time} {msg.isMe && <CheckOutlined style={{ color: '#52c41a', marginLeft: 4 }} />}
                    </Text>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '12px', marginTop: 12 }}>
                <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice Freeman" size="small" />
                <div style={{
                  padding: '12px 16px',
                  borderRadius: '16px 16px 16px 0',
                  background: '#2a2a2a',
                  color: '#888',
                  fontStyle: 'italic',
                  fontSize: 12
                }}>
                  Alice is typing...
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div style={{ padding: '12px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(0,0,0,0.1)' }}>
              <PaperClipOutlined className="premium-hover" style={{ fontSize: 20, color: '#aaa', cursor: 'pointer' }} />
              <div style={{ flex: 1, background: '#1e1e1e', border: '1px solid #444', borderRadius: 20, padding: '2px 8px', display: 'flex', alignItems: 'center', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)' }}>
                <Input placeholder="Type your message..." bordered={false} style={{ width: '100%', color: '#fff', fontSize: 14 }} />
              </div>
              <SmileOutlined className="premium-hover" style={{ fontSize: 20, color: '#aaa', cursor: 'pointer' }} />
              <Button type="primary" shape="circle" icon={<SendOutlined />} style={{ background: primaryColor, borderColor: primaryColor, boxShadow: `0 4px 12px ${primaryColor}40` }} />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
