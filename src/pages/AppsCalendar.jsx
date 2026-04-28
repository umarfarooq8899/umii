import React from 'react';
import { Row, Col, Card, Typography, Avatar, Button, Space, Badge } from 'antd';
import { PlusOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useOutletContext } from 'react-router-dom';

const { Title, Text } = Typography;

export default function AppsCalendar() {
  const { primaryColor } = useOutletContext();

  const days = ['Mon 16', 'Tue 17', 'Wed 18', 'Thu 19', 'Fri 20', 'Sat 21', 'Sun 22'];
  const hours = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  // Events defined with top/height to position them accurately on the grid
  const events = [
    { day: 0, top: '65px', height: '110px', title: 'Weekly Sync', color: primaryColor, type: 'Work' },
    { day: 1, top: '150px', height: '80px', title: 'Design Review', color: '#faad14', type: 'Review' },
    { day: 1, top: '320px', height: '60px', title: '1-on-1', color: primaryColor, type: 'Work' },
    { day: 2, top: '100px', height: '120px', title: 'Client Presentation', color: '#52c41a', type: 'External' },
    { day: 3, top: '220px', height: '60px', title: 'Lunch with Team', color: '#f5222d', type: 'Personal' },
    { day: 4, top: '80px', height: '150px', title: 'Sprint Planning', color: primaryColor, type: 'Work' },
    { day: 4, top: '350px', height: '90px', title: 'Code Review', color: '#faad14', type: 'Review' },
  ];

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <Title level={4} style={{ margin: 0 }}>Calendar</Title>
          <Text type="secondary">Manage your weekly schedule</Text>
        </div>
        <Space>
          <Button icon={<LeftOutlined />} style={{ background: '#1e1e1e', borderColor: '#333', color: '#fff' }} />
          <Text strong style={{ fontSize: 16, margin: '0 8px' }}>Oct 16 - Oct 22, 2023</Text>
          <Button icon={<RightOutlined />} style={{ background: '#1e1e1e', borderColor: '#333', color: '#fff' }} />
          <Button type="primary" icon={<PlusOutlined />} style={{ background: primaryColor, borderColor: primaryColor, borderRadius: 8, marginLeft: 16, boxShadow: `0 4px 12px ${primaryColor}40` }}>
            New Event
          </Button>
        </Space>
      </div>

      <Row gutter={[24, 24]}>
        {/* Main Custom Weekly Grid */}
        <Col xs={24} lg={18}>
          <Card bordered={false} bodyStyle={{ padding: 0 }} style={{ overflow: 'hidden', background: '#1a1a1a', border: '1px solid #333', borderRadius: 12 }}>
            {/* Header: Days of the week */}
            <div style={{ display: 'flex', borderBottom: '1px solid #333', background: '#222' }}>
              <div style={{ width: 60, borderRight: '1px solid #333' }} /> {/* Empty corner block */}
              {days.map((day, idx) => (
                <div key={day} style={{ flex: 1, padding: '16px 0', textAlign: 'center', borderRight: idx === days.length - 1 ? 'none' : '1px solid #333' }}>
                  <Text type="secondary" style={{ display: 'block', marginBottom: 4, fontSize: 12 }}>{day.split(' ')[0]}</Text>
                  <Text strong style={{ fontSize: 22, color: idx === 3 ? primaryColor : '#fff' }}>{day.split(' ')[1]}</Text>
                </div>
              ))}
            </div>
            
            {/* Grid Body */}
            <div style={{ position: 'relative', height: hours.length * 60, overflowY: 'auto' }}>
              {hours.map((hour, i) => (
                <div key={hour} style={{ display: 'flex', height: 60, borderBottom: '1px solid #2a2a2a' }}>
                  {/* Hour Labels */}
                  <div style={{ width: 60, borderRight: '1px solid #333', textAlign: 'center', padding: '8px 0', background: '#1e1e1e' }}>
                    <Text type="secondary" style={{ fontSize: 12 }}>{hour}</Text>
                  </div>
                  {/* Vertical grid lines */}
                  {days.map((day, idx) => (
                    <div key={`${day}-${hour}`} style={{ flex: 1, borderRight: idx === days.length - 1 ? 'none' : '1px solid #2a2a2a' }} />
                  ))}
                </div>
              ))}

              {/* Event Blocks */}
              {events.map((ev, i) => (
                <div key={i} className="premium-hover" style={{
                  position: 'absolute',
                  top: ev.top,
                  left: `calc(60px + ${ev.day * (100 / 7)}%)`,
                  width: `calc(${100 / 7}% - 8px)`,
                  height: ev.height,
                  background: `${ev.color}15`, // highly transparent
                  border: `1px solid ${ev.color}40`,
                  borderLeft: `4px solid ${ev.color}`,
                  borderRadius: 6,
                  padding: '8px 12px',
                  margin: '0 4px',
                  cursor: 'pointer',
                  zIndex: 10,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  <Text strong style={{ display: 'block', color: '#fff', fontSize: 13, lineHeight: 1.2, marginBottom: 4 }}>{ev.title}</Text>
                  <Text type="secondary" style={{ fontSize: 11 }}>{ev.type}</Text>
                </div>
              ))}
              
              {/* Current Time Indicator Line (Fake) */}
              <div style={{ position: 'absolute', top: '210px', left: 60, right: 0, height: 2, background: '#f5222d', zIndex: 5 }} />
              <div style={{ position: 'absolute', top: '206px', left: 56, width: 10, height: 10, borderRadius: '50%', background: '#f5222d', zIndex: 6 }} />
            </div>
          </Card>
        </Col>

        {/* Sidebar */}
        <Col xs={24} lg={6}>
          <Card bordered={false} title="Calendars" style={{ marginBottom: 24, background: '#1a1a1a', border: '1px solid #333', borderRadius: 12 }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Badge color={primaryColor} text={<Text style={{ color: '#fff' }}>Work</Text>} />
                <Text type="secondary">4</Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Badge color="#faad14" text={<Text style={{ color: '#fff' }}>Review</Text>} />
                <Text type="secondary">2</Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Badge color="#52c41a" text={<Text style={{ color: '#fff' }}>External</Text>} />
                <Text type="secondary">1</Text>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Badge color="#f5222d" text={<Text style={{ color: '#fff' }}>Personal</Text>} />
                <Text type="secondary">1</Text>
              </div>
            </Space>
          </Card>
          
          <Card bordered={false} title="Team Status" style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: 12 }}>
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Space>
                  <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alice" />
                  <Text style={{ color: '#fff' }}>Alice Freeman</Text>
                </Space>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#52c41a', boxShadow: '0 0 8px #52c41a' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Space>
                  <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bob" />
                  <Text style={{ color: '#fff' }}>Bob Smith</Text>
                </Space>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#faad14' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Space>
                  <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie" />
                  <Text style={{ color: '#fff' }}>Charlie Davis</Text>
                </Space>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#333' }} />
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  );
}
