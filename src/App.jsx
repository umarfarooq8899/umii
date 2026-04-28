import React, { useState, useEffect } from 'react';
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
  List,
  Drawer,
  Grid
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
  DownOutlined,
  SunOutlined,
  MoonOutlined,
  BorderOuterOutlined,
  WifiOutlined,
  ExpandOutlined,
  ControlOutlined
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [primaryColor, setPrimaryColor] = useState(() => localStorage.getItem('umii_primaryColor') || '#6f42c1');
  const [customizerOpen, setCustomizerOpen] = useState(false);
  const [themeVariation, setThemeVariation] = useState(() => localStorage.getItem('umii_themeVariation') || 'dark');

  useEffect(() => {
    localStorage.setItem('umii_primaryColor', primaryColor);
  }, [primaryColor]);

  useEffect(() => {
    localStorage.setItem('umii_themeVariation', themeVariation);
  }, [themeVariation]);
  const navigate = useNavigate();
  const location = useLocation();
  const screens = Grid.useBreakpoint();
  const isMobile = screens.lg === false;

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
      <div style={{ textAlign: 'center', cursor: 'pointer' }}><MailOutlined style={{ fontSize: 24, color: primaryColor }} /><br />Mail</div>
      <div style={{ textAlign: 'center', cursor: 'pointer' }}><MessageOutlined style={{ fontSize: 24, color: primaryColor }} /><br />Chat</div>
      <div style={{ textAlign: 'center', cursor: 'pointer' }}><CalendarOutlined style={{ fontSize: 24, color: primaryColor }} /><br />Calendar</div>
      <div style={{ textAlign: 'center', cursor: 'pointer' }}><FileOutlined style={{ fontSize: 24, color: primaryColor }} /><br />Docs</div>
    </div>
  );

  // Theme Configuration Logic
  const isLight = themeVariation === 'light' || themeVariation === 'bordered';
  const algorithm = isLight ? theme.defaultAlgorithm : theme.darkAlgorithm;
  
  const getThemeTokens = () => {
    switch(themeVariation) {
      case 'light':
      case 'bordered':
        return {
          colorBgBase: '#f5f5f5',
          colorBgContainer: '#ffffff',
          colorBgElevated: '#ffffff',
          colorBorder: themeVariation === 'bordered' ? '#d9d9d9' : '#f0f0f0',
          colorBgLayout: '#f5f5f5',
        };
      case 'blue':
        return {
          colorBgBase: '#0d1b2a',
          colorBgContainer: '#1b263b',
          colorBgElevated: '#415a77',
          colorBorder: '#415a77',
          colorBgLayout: '#0d1b2a',
        };
      case 'semi-dark':
      case 'dark':
      default:
        return {
          colorBgBase: '#121212',
          colorBgContainer: '#1e1e1e',
          colorBgElevated: '#282828',
          colorBorder: '#333333',
          colorBgLayout: '#121212',
        };
    }
  };

  const themeTokens = getThemeTokens();
  
  // Custom Sider and Header colors for specific themes
  const siderBg = themeVariation === 'semi-dark' ? '#001529' : themeTokens.colorBgBase;
  const siderBorder = themeVariation === 'semi-dark' ? 'none' : `1px solid ${themeTokens.colorBorder}`;
  const headerBg = themeVariation === 'blue' ? '#1b263b' : themeTokens.colorBgContainer;

  return (
    <ConfigProvider
      theme={{
        algorithm: algorithm,
        token: {
          colorPrimary: primaryColor,
          borderRadius: 8,
          fontFamily: "'Inter', sans-serif",
          ...themeTokens
        },
      }}
    >
      <Layout style={{ height: '100vh', overflow: 'hidden', background: themeTokens.colorBgLayout }}>
        {!isMobile && (
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            trigger={null}
            style={{ background: siderBg, borderRight: siderBorder, overflow: 'auto', height: '100vh', position: 'sticky', left: 0, top: 0, bottom: 0 }}
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
              background: siderBg
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
              <Title level={4} style={{ margin: 0, color: themeVariation === 'semi-dark' ? '#fff' : (isLight ? '#000' : '#fff') }}>
                Umii
              </Title>
            )}
          </div>
          <Menu
            selectedKeys={[location.pathname]}
            defaultOpenKeys={['sub-dashboard']}
            mode="inline"
            theme={themeVariation === 'semi-dark' ? 'dark' : (isLight ? 'light' : 'dark')}
            items={menuItems}
            onClick={handleMenuClick}
            style={{ background: siderBg, borderRight: 0 }}
          />
        </Sider>
      )}

      <Drawer
        title={<div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: 32, height: 32, background: `linear-gradient(45deg, ${primaryColor}, #00e5ff)`, borderRadius: 8, marginRight: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>U</div>
          <span style={{ fontSize: 20 }}>Umii</span>
        </div>}
        placement="left"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen && isMobile}
        styles={{ body: { padding: 0, background: themeTokens.colorBgBase }, header: { background: themeTokens.colorBgContainer, borderBottom: `1px solid ${themeTokens.colorBorder}` } }}
      >
        <Menu
          selectedKeys={[location.pathname]}
          defaultOpenKeys={['sub-dashboard']}
          mode="inline"
          theme={isLight ? 'light' : 'dark'}
          items={menuItems}
          onClick={(e) => { handleMenuClick(e); setMobileMenuOpen(false); }}
          style={{ background: themeTokens.colorBgBase, borderRight: 0 }}
        />
      </Drawer>

      <Layout style={{ background: themeTokens.colorBgLayout }}>
        <Header style={{
          padding: '0 24px',
          background: headerBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${themeTokens.colorBorder}`
        }}>
          <div style={{ display: 'flex', alignItems: 'center', flex: 1, overflow: 'hidden' }}>
            <Button
              type="text"
              icon={isMobile ? <MenuUnfoldOutlined /> : (collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />)}
              onClick={() => isMobile ? setMobileMenuOpen(true) : setCollapsed(!collapsed)}
              style={{ fontSize: '18px', width: 48, height: 48, color: isLight ? '#000' : '#fff', flexShrink: 0 }}
            />
            <Input
              prefix={<SearchOutlined style={{ color: '#888' }} />}
              placeholder="Search"
              style={{ width: isMobile ? 120 : 300, borderRadius: 20, background: themeTokens.colorBgBase, border: `1px solid ${themeTokens.colorBorder}`, color: isLight ? '#000' : '#fff', marginLeft: isMobile ? 8 : 16 }}
            />
          </div>
            <Space size={isMobile ? "small" : "large"} align="center" style={{ display: 'flex', alignItems: 'center' }}>
              {!isMobile && (
                <>
                  <Dropdown menu={languageMenu} placement="bottomRight" trigger={['click']}>
                    <GlobalOutlined style={{ fontSize: 20, color: '#aaa', cursor: 'pointer' }} />
                  </Dropdown>

                  <Popover content={tasksPopover} placement="bottomRight" trigger="click">
                    <CheckOutlined style={{ fontSize: 20, color: '#aaa', cursor: 'pointer' }} />
                  </Popover>

                  <Popover content={appsPopover} placement="bottomRight" trigger="click">
                    <AppstoreOutlined style={{ fontSize: 20, color: '#aaa', cursor: 'pointer' }} />
                  </Popover>
                </>
              )}

              <Popover content={cartPopover} placement="bottomRight" trigger="click">
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <Badge count={8} color="red">
                    <ShoppingCartOutlined style={{ fontSize: 20, color: '#aaa', cursor: 'pointer', display: 'block' }} />
                  </Badge>
                </div>
              </Popover>

              <Popover content={notificationsPopover} placement="bottomRight" trigger="click">
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <Badge count={6} color="red">
                    <BellOutlined style={{ fontSize: 20, color: '#aaa', cursor: 'pointer', display: 'block' }} />
                  </Badge>
                </div>
              </Popover>

              <Dropdown menu={profileMenu} placement="bottomRight" trigger={['click']}>
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <Avatar size={26} src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" style={{ cursor: 'pointer' }} />
                </div>
              </Dropdown>
            </Space>
          </Header>

          <Content style={{ padding: isMobile ? 12 : 24, overflow: 'auto' }}>
            <Outlet context={{ primaryColor, themeVariation, isLight, themeTokens }} />
          </Content>
        </Layout>
      </Layout>

      {/* Theme Customizer Trigger */}
      <Button
        type="primary"
        icon={<ControlOutlined style={{ fontSize: 20 }} />}
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          height: 44,
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          background: 'linear-gradient(90deg, #f01671 0%, #8b25cf 100%)',
          border: 'none',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          padding: '0 24px',
          fontSize: 16,
          fontWeight: 500,
        }}
        onClick={() => setCustomizerOpen(true)}
      >
        Customize
      </Button>

      <Drawer
        title={
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>Theme Customizer</div>
            <div style={{ fontSize: 13, fontWeight: 'normal', color: '#888' }}>Customize your theme</div>
          </div>
        }
        placement="right"
        onClose={() => setCustomizerOpen(false)}
        open={customizerOpen}
        size="default"
        styles={{
          header: { borderBottom: '1px solid #333', background: '#222' },
          body: { background: '#222', padding: '24px' },
          closeIcon: { color: '#fff' }
        }}
      >
        <div style={{ marginBottom: 16, color: '#fff' }}>Theme variation</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
          {/* Blue */}
          <div 
            onClick={() => setThemeVariation('blue')}
            style={{ 
              width: 'calc(50% - 8px)', 
              height: 90, 
              borderRadius: 8, 
              border: themeVariation === 'blue' ? 'none' : '1px solid #444', 
              background: themeVariation === 'blue' ? '#6b7280' : 'transparent',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: themeVariation === 'blue' ? '#fff' : '#888',
              transition: 'all 0.3s'
            }}
          >
            <WifiOutlined style={{ fontSize: 24, marginBottom: 8 }} />
            <span style={{ fontSize: 14 }}>Blue</span>
          </div>

          {/* Light */}
          <div 
            onClick={() => setThemeVariation('light')}
            style={{ 
              width: 'calc(50% - 8px)', 
              height: 90, 
              borderRadius: 8, 
              border: themeVariation === 'light' ? 'none' : '1px solid #444', 
              background: themeVariation === 'light' ? '#6b7280' : 'transparent',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: themeVariation === 'light' ? '#fff' : '#888',
              transition: 'all 0.3s'
            }}
          >
            <SunOutlined style={{ fontSize: 24, marginBottom: 8 }} />
            <span style={{ fontSize: 14 }}>Light</span>
          </div>

          {/* Dark */}
          <div 
            onClick={() => setThemeVariation('dark')}
            style={{ 
              width: 'calc(50% - 8px)', 
              height: 90, 
              borderRadius: 8, 
              border: themeVariation === 'dark' ? 'none' : '1px solid #444', 
              background: themeVariation === 'dark' ? '#6b7280' : 'transparent',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: themeVariation === 'dark' ? '#fff' : '#888',
              transition: 'all 0.3s'
            }}
          >
            <MoonOutlined style={{ fontSize: 24, marginBottom: 8 }} />
            <span style={{ fontSize: 14 }}>Dark</span>
          </div>

          {/* Semi Dark */}
          <div 
            onClick={() => setThemeVariation('semi-dark')}
            style={{ 
              width: 'calc(50% - 8px)', 
              height: 90, 
              borderRadius: 8, 
              border: themeVariation === 'semi-dark' ? 'none' : '1px solid #444', 
              background: themeVariation === 'semi-dark' ? '#6b7280' : 'transparent',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: themeVariation === 'semi-dark' ? '#fff' : '#888',
              transition: 'all 0.3s'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 8 }}>
               <div style={{ width: 12, height: 24, background: 'currentColor', borderRadius: '12px 0 0 12px' }} />
               <div style={{ width: 12, height: 24, border: '2px solid currentColor', borderLeft: 'none', borderRadius: '0 12px 12px 0' }} />
            </div>
            <span style={{ fontSize: 14 }}>Semi Dark</span>
          </div>

          {/* Bordered */}
          <div 
            onClick={() => setThemeVariation('bordered')}
            style={{ 
              width: 'calc(50% - 8px)', 
              height: 90, 
              borderRadius: 8, 
              border: themeVariation === 'bordered' ? 'none' : '1px solid #444', 
              background: themeVariation === 'bordered' ? '#6b7280' : 'transparent',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: themeVariation === 'bordered' ? '#fff' : '#888',
              transition: 'all 0.3s'
            }}
          >
            <BorderOuterOutlined style={{ fontSize: 24, marginBottom: 8 }} />
            <span style={{ fontSize: 14 }}>Bordered</span>
          </div>
        </div>
      </Drawer>
    </ConfigProvider>
  );
}

export default App;
