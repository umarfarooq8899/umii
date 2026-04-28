import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// Import Pages
import DashboardAnalytics from './pages/DashboardAnalytics.jsx';
import DashboardEcommerce from './pages/DashboardEcommerce.jsx';
import WidgetsData from './pages/WidgetsData.jsx';
import WidgetsStatic from './pages/WidgetsStatic.jsx';
import AppsEmail from './pages/AppsEmail.jsx';
import AppsChat from './pages/AppsChat.jsx';
import AppsCalendar from './pages/AppsCalendar.jsx';
import UiCards from './pages/UiCards.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/dashboard/analysis" replace />} />
          <Route path="dashboard/analysis" element={<DashboardAnalytics />} />
          <Route path="dashboard/ecommerce" element={<DashboardEcommerce />} />
          <Route path="widgets/data" element={<WidgetsData />} />
          <Route path="widgets/static" element={<WidgetsStatic />} />
          <Route path="apps/email" element={<AppsEmail />} />
          <Route path="apps/chat" element={<AppsChat />} />
          <Route path="apps/calendar" element={<AppsCalendar />} />
          <Route path="ui/cards" element={<UiCards />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
