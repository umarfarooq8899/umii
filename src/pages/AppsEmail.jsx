import React from 'react';
import { Row, Col, Card, Typography, Menu, Avatar, Space, Button, Divider, Input, Grid } from 'antd';
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
  const { primaryColor, isLight, themeTokens } = useOutletContext();
  const screens = Grid.useBreakpoint();
  const isMobile = screens.md === false;
  const [activeMobileView, setActiveMobileView] = React.useState('list');

  const emails = [
    { id: 1, sender: 'Hammad raja', subject: 'Project Update Q3', preview: 'Hey, I just wanted to share the latest updates regarding...', time: '10:30 AM', unread: true },
    { id: 2, sender: 'Zain', subject: 'Design Assets', preview: 'Attached are the design assets you requested for the new...', time: 'Yesterday', unread: false },
    { id: 3, sender: 'Abdullah', subject: 'Campaign Results', preview: 'The results for the recent email campaign are in and...', time: 'Oct 12', unread: false },
    { id: 4, sender: 'Ali', subject: 'Server Maintenance', preview: 'Scheduled server maintenance will occur this weekend...', time: 'Oct 10', unread: true },
  ];

  return (
    <>
      <Title level={4} style={{ marginTop: 0, marginBottom: 24 }}>Inbox</Title>

      {isMobile && (
        <div style={{ marginBottom: 16, display: 'flex', gap: 8 }}>
          <Button style={{ flex: 1 }} type={activeMobileView === 'sidebar' ? 'primary' : 'default'} onClick={() => setActiveMobileView('sidebar')}>Folders</Button>
          <Button style={{ flex: 1 }} type={activeMobileView === 'list' ? 'primary' : 'default'} onClick={() => setActiveMobileView('list')}>Emails</Button>
          <Button style={{ flex: 1 }} type={activeMobileView === 'content' ? 'primary' : 'default'} onClick={() => setActiveMobileView('content')}>Reading</Button>
        </div>
      )}

      <div className="app-container" style={{ height: isMobile ? 'calc(100dvh - 180px)' : 'calc(100vh - 150px)', overflow: 'hidden', display: 'flex', background: themeTokens.colorBgContainer, border: `1px solid ${themeTokens.colorBorder}` }}>
        <Row style={{ height: '100%', width: '100%', margin: 0 }}>
          {/* Sidebar */}
          <Col xs={24} md={4} className="app-sidebar" style={{
            height: '100%',
            display: isMobile && activeMobileView !== 'sidebar' ? 'none' : 'flex',
            flexDirection: 'column',
            background: themeTokens.colorBgContainer,
            borderRight: isMobile ? 'none' : `1px solid ${themeTokens.colorBorder}`
          }}>
            <div style={{ padding: 24 }}>
              <Button type="primary" block style={{ background: primaryColor, borderColor: primaryColor, borderRadius: 8 }}>Compose Email</Button>
            </div>
            <Menu
              mode="inline"
              defaultSelectedKeys={['inbox']}
              theme={isLight ? 'light' : 'dark'}
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
          <Col xs={24} md={6} style={{
            height: '100%',
            display: isMobile && activeMobileView !== 'list' ? 'none' : 'flex',
            flexDirection: 'column',
            background: themeTokens.colorBgLayout,
            borderRight: isMobile ? 'none' : `1px solid ${themeTokens.colorBorder}`
          }}>
            <div style={{ padding: '16px 24px', borderBottom: `1px solid ${themeTokens.colorBorder}` }}>
              <Input prefix={<SearchOutlined style={{ color: themeTokens.colorTextSecondary }} />} placeholder="Search emails" variant="borderless" style={{ padding: 0, color: themeTokens.colorText }} />
            </div>
            <div style={{ flex: 1, overflowY: 'auto' }}>
              {emails.map(item => (
                <div key={item.id} className="premium-hover" onClick={() => isMobile && setActiveMobileView('content')} style={{
                  padding: '12px 16px',
                  borderLeft: item.unread ? `4px solid ${primaryColor}` : '4px solid transparent',
                  cursor: 'pointer',
                  background: item.unread ? `linear-gradient(90deg, ${primaryColor}20 0%, transparent 100%)` : 'transparent',
                  borderBottom: `1px solid ${themeTokens.colorBorder}`,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 16
                }}>
                  <Avatar src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.sender}`} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Text strong={item.unread}>{item.sender}</Text>
                      <Text type="secondary" style={{ fontSize: 12 }}>{item.time}</Text>
                    </div>
                    <div>
                      <Text strong={item.unread} style={{ display: 'block', color: themeTokens.colorText, marginTop: 4 }}>{item.subject}</Text>
                      <Text type="secondary" ellipsis style={{ display: 'block', width: '100%' }}>{item.preview}</Text>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Email Content */}
          <Col xs={24} md={14} style={{
            height: '100%',
            display: isMobile && activeMobileView !== 'content' ? 'none' : 'flex',
            flexDirection: 'column',
            background: themeTokens.colorBgContainer
          }}>
            {/* Top Action Bar */}
            <div style={{ padding: isMobile ? '8px 12px' : '16px 24px', borderBottom: `1px solid ${themeTokens.colorBorder}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
            <div style={{ padding: isMobile ? '8px 12px 0' : '24px 24px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: isMobile ? 4 : 12, flexWrap: 'wrap' }}>
                <Title level={isMobile ? 5 : 4} style={{ margin: 0, marginRight: 8, fontSize: isMobile ? 16 : undefined }}>Project Update Q3</Title>
                <Text type="secondary" style={{ fontSize: isMobile ? 11 : 12 }}>Oct 14, 2023, 10:30 AM</Text>
              </div>
              <Space align="start" style={{ marginBottom: isMobile ? 8 : 16 }}>
                <Avatar size={isMobile ? 32 : "large"} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hammad007" />
                <div style={{ overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 4 : 8, flexWrap: 'wrap' }}>
                    <Text strong style={{ margin: 0, fontSize: isMobile ? 13 : 14 }}>Hammad Raja</Text>
                    <Text type="secondary" style={{ fontSize: isMobile ? 11 : 12, wordBreak: 'break-all' }}>&lt;jHammad007@example.com&gt;</Text>
                  </div>
                  <Text type="secondary" style={{ fontSize: isMobile ? 11 : 12 }}>to me, Umar, DevOps</Text>
                </div>
              </Space>
            </div>

            {/* Email Body */}
            <div style={{ padding: isMobile ? '0 12px 12px' : '0 24px 24px', flex: 1, overflow: 'auto', fontSize: isMobile ? 13 : 14, color: themeTokens.colorText }}>
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
                Best,<br />
                Hammad Raja<br />
                <Text type="secondary" style={{ fontSize: 12 }}>Senior Product Manager | Umii Inc.</Text>
              </Paragraph>

              {/* Fake Attachment */}
              <div className="premium-hover" style={{ marginTop: 24, padding: 12, border: `1px solid ${themeTokens.colorBorder}`, borderRadius: 8, display: 'inline-flex', alignItems: 'center', gap: 12, cursor: 'pointer', background: themeTokens.colorBgLayout }}>
                <div style={{ background: '#f5222d', color: '#fff', padding: '4px 8px', borderRadius: 4, fontWeight: 'bold', fontSize: 10 }}>PDF</div>
                <div>
                  <Text strong style={{ display: 'block' }}>Q3_Metrics_Report.pdf</Text>
                  <Text type="secondary" style={{ fontSize: 12 }}>2.4 MB</Text>
                </div>
              </div>
            </div>

            {/* Reply Area */}
            <div style={{ padding: isMobile ? '8px 12px' : '12px 24px', borderTop: `1px solid ${themeTokens.colorBorder}`, background: themeTokens.colorBgLayout, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" size="small" style={{ marginTop: 4 }} />
              <div style={{ flex: 1 }}>
                <div style={{ background: themeTokens.colorBgContainer, border: `1px solid ${themeTokens.colorBorder}`, borderRadius: 8, padding: '0px 8px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)' }}>
                  <Input.TextArea autoSize={{ minRows: 1, maxRows: 5 }} placeholder="Reply to John Anderson..." variant="borderless" style={{ color: themeTokens.colorText, fontSize: 13, resize: 'none', padding: '6px 0' }} />
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

const Paragraph = ({ children }) => {
  const { themeTokens } = useOutletContext();
  return <div style={{ marginBottom: 16, color: themeTokens.colorTextSecondary }}>{children}</div>;
}
