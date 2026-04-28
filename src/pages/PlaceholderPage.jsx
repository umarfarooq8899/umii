import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

export default function PlaceholderPage({ title }) {
  return (
    <Card bordered={false} style={{ height: 'calc(100vh - 120px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Title level={2}>{title}</Title>
        <Text type="secondary">This is a placeholder page. Content has not been implemented yet.</Text>
      </div>
    </Card>
  );
}
