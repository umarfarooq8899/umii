import React from 'react';
import { Row, Col, Card, Typography, Menu, List, Avatar, Space, Button, Divider, Input } from 'antd';
import { 
  InboxOutlined, 
  SendOutlined, 
  FileOutlined, 
  DeleteOutlined, 
  StarOutlined,
  SearchOutlined,
  MoreOutlined,
  RollbackOutlined,
  PaperClipOutlined
} from '@ant-design/icons';
import { useOutletContext } from 'react-router-dom';

const { Title, Text } = Typography;

export default function AppsEmail() {
  const { primaryColor } = useOutletContext();

  const emails = [
    { id: 1, sender: 'John Anderson', subject: 'Project Update Q3', preview: 'Hey, I just wanted to share the latest updates regarding...', time: '10:30 AM', unread: true },
    { id: 2, sender: 'Sarah Connor', subject: 'Design Assets', preview: 'Attached are the design assets you requested for the new...', time: 'Yesterday', unread: false },
    { id: 3, sender: 'Marketing Team', subject: 'Campaign Results', preview: 'The results for the recent email campaign are in and...', time: 'Oct 12', unread: false },
    { id: 4, sender: 'DevOps', subject: 'Server Maintenance', preview: 'Scheduled server maintenance will occur this weekend...', time: 'Oct 10', unread: true },
  ];

  return (
    <>
      <Title level={4} style={{ marginTop: 0, marginBottom: 24 }}>Inbox</Title>
      <div className="app-container">
        <Row style={{ height: '100%', width: '100%' }}>
          {/* Sidebar */}
          <Col span={5} className="app-sidebar" style={{ height: '100%', display: 'flex', flexDirection: 'column', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ padding: 24 }}>
              <Button type="primary" block style={{ background: primaryColor, borderColor: primaryColor, borderRadius: 8 }}>Compose Email</Button>
            </div>
            <Menu
              mode="inline"
              defaultSelectedKeys={['inbox']}
              style={{ borderRight: 0, flex: 1, background: 'transparent', overflowY: 'auto' }}
              items={[
                { key: 'inbox', icon: <InboxOutlined />, label: 'Inbox' },
                { key: 'sent', icon: <SendOutlined />, label: 'Sent' },
                { key: 'drafts', icon: <FileOutlined />, label: 'Drafts' },
                { key: 'starred', icon: <StarOutlined />, label: 'Starred' },
                { key: 'trash', icon: <DeleteOutlined />, label: 'Trash' },
              ]}
            />
          </Col>

          {/* Email List */}
          <Col span={8} style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(0,0,0,0.2)', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <Input prefix={<SearchOutlined style={{ color: '#888' }} />} placeholder="Search emails" bordered={false} style={{ padding: 0 }} />
            </div>
            <List
              itemLayout="horizontal"
              dataSource={emails}
              style={{ flex: 1, overflowY: 'auto' }}
              renderItem={item => (
                <List.Item className="premium-hover" style={{ 
                  padding: '16px 24px', 
                  borderLeft: item.unread ? `4px solid ${primaryColor}` : '4px solid transparent', 
                  cursor: 'pointer', 
                  background: item.unread ? `linear-gradient(90deg, ${primaryColor}20 0%, transparent 100%)` : 'transparent',
                  borderBottom: '1px solid rgba(255,255,255,0.02)'
                }}>
                  <List.Item.Meta
                    avatar={<Avatar src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.sender}`} />}
                    title={
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Text strong={item.unread}>{item.sender}</Text>
                        <Text type="secondary" style={{ fontSize: 12 }}>{item.time}</Text>
                      </div>
                    }
                    description={
                      <div>
                        <Text strong={item.unread} style={{ display: 'block', color: 'rgba(255,255,255,0.85)' }}>{item.subject}</Text>
                        <Text type="secondary" ellipsis style={{ display: 'block', width: '100%' }}>{item.preview}</Text>
                      </div>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>

          {/* Email Content */}
          <Col span={11} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Top Action Bar */}
            <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Space size="middle">
                <Button type="text" icon={<DeleteOutlined />} className="premium-hover" />
                <Button type="text" icon={<InboxOutlined />} className="premium-hover" title="Archive" />
                <Button type="text" icon={<StarOutlined />} className="premium-hover" />
              </Space>
              <Space>
                <Button type="text" icon={<RollbackOutlined />} className="premium-hover" title="Reply" />
                <Button type="text" icon={<MoreOutlined />} className="premium-hover" />
              </Space>
            </div>

            {/* Email Header */}
            <div style={{ padding: '24px 24px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <Title level={4} style={{ margin: 0 }}>Project Update Q3</Title>
                <Text type="secondary" style={{ fontSize: 12 }}>Oct 14, 2023, 10:30 AM</Text>
              </div>
              <Space align="start" style={{ marginBottom: 24 }}>
                <Avatar size="large" src="https://api.dicebear.com/7.x/avataaars/svg?seed=John Anderson" />
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Title level={5} style={{ margin: 0 }}>John Anderson</Title>
                    <Text type="secondary">&lt;john.anderson@example.com&gt;</Text>
                  </div>
                  <Text type="secondary" style={{ fontSize: 12 }}>to me, Sarah, DevOps</Text>
                </div>
              </Space>
            </div>

            {/* Email Body */}
            <div style={{ padding: '0 24px 24px', flex: 1, overflow: 'auto' }}>
              <Paragraph>
                Hey Team,
              </Paragraph>
              <Paragraph>
                I just wanted to share the latest updates regarding the Q3 roadmap. We have successfully hit all our major milestones ahead of schedule!
              </Paragraph>
              <Paragraph>
                Please review the attached documents for a detailed breakdown of the metrics. We will be discussing these findings in tomorrow's standup.
              </Paragraph>
              <Paragraph>
                Best,<br/>
                John Anderson<br/>
                <Text type="secondary" style={{ fontSize: 12 }}>Senior Product Manager | Umii Inc.</Text>
              </Paragraph>
              
              {/* Fake Attachment */}
              <div className="premium-hover" style={{ marginTop: 24, padding: 12, border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, display: 'inline-flex', alignItems: 'center', gap: 12, cursor: 'pointer', background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ background: '#f5222d', color: '#fff', padding: '4px 8px', borderRadius: 4, fontWeight: 'bold', fontSize: 10 }}>PDF</div>
                <div>
                  <Text strong style={{ display: 'block' }}>Q3_Metrics_Report.pdf</Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>2.4 MB</Text>
                </div>
              </div>
            </div>

            {/* Reply Area */}
            <div style={{ padding: '12px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" size="small" style={{ marginTop: 4 }} />
              <div style={{ flex: 1 }}>
                <div style={{ background: '#1e1e1e', border: '1px solid #444', borderRadius: 8, padding: '0px 8px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)' }}>
                  <Input.TextArea autoSize={{ minRows: 1, maxRows: 5 }} placeholder="Reply to John Anderson..." bordered={false} style={{ color: '#fff', fontSize: 13, resize: 'none', padding: '6px 0' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
                  <Space size="middle">
                    <PaperClipOutlined className="premium-hover" style={{ fontSize: 16, color: '#aaa', cursor: 'pointer' }} />
                    <StarOutlined className="premium-hover" style={{ fontSize: 16, color: '#aaa', cursor: 'pointer' }} />
                  </Space>
                  <Space>
                    <Button type="primary" size="small" icon={<SendOutlined />} style={{ background: primaryColor, borderColor: primaryColor, borderRadius: 16 }}>Send</Button>
                    <Button type="primary" danger size="small" icon={<DeleteOutlined />} style={{ borderRadius: 16 }} />
                  </Space>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

const Paragraph = ({ children }) => <div style={{ marginBottom: 16, color: 'rgba(255,255,255,0.65)' }}>{children}</div>;
