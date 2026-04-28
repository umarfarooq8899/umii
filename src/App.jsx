import React, { useState } from 'react';
import { 
  ConfigProvider, 
  Layout, 
  Menu, 
  Typography, 
  Space,
  Avatar,
  Input,
  Badge,
  FloatButton,
  theme,
  Button,
  Dropdown,
  Popover,
  List
} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  ShoppingCartOutlined,
  BellOutlined,
  SearchOutlined,
  AppstoreOutlined,
  CheckOutlined,
  GlobalOutlined,
  FormatPainterOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  MessageOutlined,
  CalendarOutlined,
  MailOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  DownOutlined
} from '@ant-design/icons';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

// Theme options
const themes = [
  { name: 'Purple', color: '#6f42c1' },
  { name: 'Blue', color: '#1890ff' },
  { name: 'Teal', color: '#13c2c2' },
  { name: 'Red', color: '#f5222d' },
  { name: 'Green', color: '#52c41a' },
];

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#6f42c1');
  const navigate = useNavigate();
  const location = useLocation();

  // Sidebar Menu Items
  const menuItems = [
    {
      label: 'Dashboard',
      key: 'sub-dashboard',
      icon: <PieChartOutlined />,
      children: [
        { key: '/dashboard/analysis', label: 'Analysis' },
        { key: '/dashboard/ecommerce', label: 'eCommerce' },
      ],
    },
    {
      label: 'Widgets',
      key: 'sub-widgets',
      icon: <AppstoreOutlined />,
      children: [
        { key: '/widgets/data', label: 'Data' },
        { key: '/widgets/static', label: 'Static' },
      ],
    },
    {
      label: 'Apps',
      key: 'sub-apps',
      icon: <DesktopOutlined />,
      children: [
        { key: '/apps/email', label: 'Email' },
        { key: '/apps/chat', label: 'Chat' },
        { key: '/apps/calendar', label: 'Calendar' },
      ],
    },
    {
      label: 'UI Elements',
      key: 'sub-ui',
      icon: <FileOutlined />,
      children: [
        { key: '/ui/cards', label: 'Cards' },
      ],
    },
  ];

  // Handle menu click
  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  // Dropdown Items for Header
  const languageMenu = {
    items: [
      { key: '1', label: 'English' },
      { key: '2', label: 'Spanish' },
      { key: '3', label: 'French' },
    ]
  };

  const profileMenu = {
    items: [
      { key: '1', icon: <UserOutlined />, label: 'My Profile' },
      { key: '2', icon: <SettingOutlined />, label: 'Settings' },
      { type: 'divider' },
      { key: '3', icon: <LogoutOutlined />, label: 'Logout' },
    ]
  };

  const tasksPopover = (
    <div style={{ width: 250 }}>
      <Title level={5}>Pending Tasks</Title>
      <List
        size="small"
        dataSource={['Finish Q3 Report', 'Update Server Config']}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );

  const cartPopover = (
    <div style={{ width: 250 }}>
      <Title level={5}>Shopping Cart</Title>
      <List
        size="small"
        dataSource={['Nike Air Max - $120', 'Apple Watch - $399']}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
      <Button type="primary" block style={{ marginTop: 8 }}>Checkout</Button>
    </div>
  );

  const notificationsPopover = (
    <div style={{ width: 250 }}>
      <Title level={5}>Notifications</Title>
      <List
        size="small"
        dataSource={['New user registered', 'Server load high', 'Payment received']}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );

  const appsPopover = (
    <div style={{ width: 200, display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', padding: '8px' }}>
       <div style={{ textAlign: 'center', cursor: 'pointer' }}><MailOutlined style={{ fontSize: 24, color: primaryColor }} /><br/>Mail</div>
       <div style={{ textAlign: 'center', cursor: 'pointer' }}><MessageOutlined style={{ fontSize: 24, color: primaryColor }} /><br/>Chat</div>
       <div style={{ textAlign: 'center', cursor: 'pointer' }}><CalendarOutlined style={{ fontSize: 24, color: primaryColor }} /><br/>Calendar</div>
       <div style={{ textAlign: 'center', cursor: 'pointer' }}><FileOutlined style={{ fontSize: 24, color: primaryColor }} /><br/>Docs</div>
    </div>
  );

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: primaryColor,
          borderRadius: 8,
          fontFamily: "'Inter', sans-serif",
          colorBgBase: '#121212',
          colorBgContainer: '#1e1e1e',
          colorBgElevated: '#282828',
        },
      }}
    >
      <Layout style={{ height: '100vh', overflow: 'hidden' }}>
        <Sider 
          collapsible 
          collapsed={collapsed} 
          onCollapse={(value) => setCollapsed(value)}
          trigger={null}
          style={{ background: '#121212', borderRight: '1px solid #333', overflow: 'auto', height: '100vh', position: 'sticky', left: 0, top: 0, bottom: 0 }}
          width={260}
        >
          <div style={{ 
            height: 80, 
            padding: '16px 24px', 
            display: 'flex', 
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: '#121212'
          }}>
            <div style={{ 
              width: 32, 
              height: 32, 
              background: `linear-gradient(45deg, ${primaryColor}, #00e5ff)`, 
              borderRadius: 8,
              marginRight: collapsed ? 0 : 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 18
            }}>
              U
            </div>
            {!collapsed && (
              <Title level={4} style={{ margin: 0, color: '#fff' }}>
                Umii
              </Title>
            )}
          </div>
          <Menu 
            selectedKeys={[location.pathname]} 
            defaultOpenKeys={['sub-dashboard']}
            mode="inline" 
            items={menuItems}
            onClick={handleMenuClick}
            style={{ background: '#121212', borderRight: 0 }}
          />
        </Sider>
        
        <Layout style={{ background: '#121212' }}>
          <Header style={{ 
            padding: '0 24px', 
            background: '#1e1e1e', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            borderBottom: '1px solid #333'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <Button 
                type="text" 
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} 
                onClick={() => setCollapsed(!collapsed)} 
                style={{ fontSize: '18px', width: 48, height: 48, color: '#fff' }}
              />
              <Input 
                prefix={<SearchOutlined style={{ color: '#888' }} />} 
                placeholder="Search" 
                style={{ width: 300, borderRadius: 20, background: '#121212', border: '1px solid #333', color: '#fff', marginLeft: 16 }}
              />
            </div>
            <Space size="large" align="center" style={{ display: 'flex', alignItems: 'center' }}>
              <Dropdown menu={languageMenu} placement="bottomRight" trigger={['click']}>
                <GlobalOutlined style={{ fontSize: 20, color: '#aaa', cursor: 'pointer' }} />
              </Dropdown>
              
              <Popover content={tasksPopover} placement="bottomRight" trigger="click">
                <CheckOutlined style={{ fontSize: 20, color: '#aaa', cursor: 'pointer' }} />
              </Popover>

              <Popover content={appsPopover} placement="bottomRight" trigger="click">
                <AppstoreOutlined style={{ fontSize: 20, color: '#aaa', cursor: 'pointer' }} />
              </Popover>

              <Popover content={cartPopover} placement="bottomRight" trigger="click">
                <Badge count={8} color="red">
                  <ShoppingCartOutlined style={{ fontSize: 20, color: '#aaa', cursor: 'pointer' }} />
                </Badge>
              </Popover>

              <Popover content={notificationsPopover} placement="bottomRight" trigger="click">
                <Badge count={6} color="red">
                  <BellOutlined style={{ fontSize: 20, color: '#aaa', cursor: 'pointer' }} />
                </Badge>
              </Popover>

              <Dropdown menu={profileMenu} placement="bottomRight" trigger={['click']}>
                <Avatar size={28} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" style={{ cursor: 'pointer', verticalAlign: 'middle' }} />
              </Dropdown>
            </Space>
          </Header>
          
          <Content style={{ padding: 24, overflow: 'auto' }}>
            <Outlet context={{ primaryColor }} />
          </Content>
        </Layout>
      </Layout>

      {/* Theme Customizer FloatButton */}
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 24, bottom: 24 }}
        icon={<FormatPainterOutlined />}
      >
        {themes.map(t => (
          <FloatButton 
            key={t.name}
            icon={<div style={{ width: 14, height: 14, borderRadius: '50%', background: t.color, margin: 'auto' }} />} 
            onClick={() => setPrimaryColor(t.color)}
            tooltip={`Switch to ${t.name} theme`}
          />
        ))}
      </FloatButton.Group>
    </ConfigProvider>
  );
}

export default App;
