export const topCardsData = [
  {
    title: "Today's Sales",
    value: 65400,
    prefix: "$",
    percentChange: 78.4,
    isUp: true,
  },
  {
    title: "Active Users",
    value: 42500,
    prefix: "",
    percentChange: 15.2,
    isUp: true,
  },
  {
    title: "Total Users",
    value: 97400,
    prefix: "",
    percentChange: 12.5,
    isUp: true,
  },
];

export const trafficData = [
  { date: "2024-01-01", visitors: 4500 },
  { date: "2024-01-02", visitors: 5200 },
  { date: "2024-01-03", visitors: 4800 },
  { date: "2024-01-04", visitors: 6100 },
  { date: "2024-01-05", visitors: 5900 },
  { date: "2024-01-06", visitors: 6800 },
  { date: "2024-01-07", visitors: 7200 },
];

export const totalViewsData = [
  { date: "Jan", views: 24000 },
  { date: "Feb", views: 13980 },
  { date: "Mar", views: 98000 },
  { date: "Apr", views: 39080 },
  { date: "May", views: 48000 },
  { date: "Jun", views: 38000 },
  { date: "Jul", views: 43000 },
];

export const totalAccountsData = [
  { date: "Mon", accounts: 1000 },
  { date: "Tue", accounts: 2500 },
  { date: "Wed", accounts: 2000 },
  { date: "Thu", accounts: 4500 },
  { date: "Fri", accounts: 3500 },
  { date: "Sat", accounts: 6000 },
  { date: "Sun", accounts: 5000 },
];

export const visitorsGrowthData = [
  { date: "Q1", value: 300 },
  { date: "Q2", value: 500 },
  { date: "Q3", value: 400 },
  { date: "Q4", value: 700 },
];

export const monthlyRevenueData = [
  { month: "Jan", revenue: 45 },
  { month: "Feb", revenue: 52 },
  { month: "Mar", revenue: 38 },
  { month: "Apr", revenue: 65 },
  { month: "May", revenue: 48 },
  { month: "Jun", revenue: 72 },
  { month: "Jul", revenue: 58 },
  { month: "Aug", revenue: 60 },
  { month: "Sep", revenue: 85 },
];

export const totalClicksData = [
  { month: "Jan", clicks: 35 },
  { month: "Feb", clicks: 42 },
  { month: "Mar", clicks: 28 },
  { month: "Apr", clicks: 55 },
  { month: "May", clicks: 38 },
  { month: "Jun", clicks: 62 },
];

export const deviceData = [
  { type: "Desktop", value: 35 },
  { type: "Tablet", value: 48 },
  { type: "Mobile", value: 27 },
];

export const campaignStats = [
  { title: "Campaigns", value: 54, percent: 100, color: "#6f42c1" },
  { title: "Emailed", value: 245, percent: 80, color: "#1890ff" },
  { title: "Opened", value: 54, percent: 60, color: "#faad14" },
  { title: "Clicked", value: 859, percent: 45, color: "#f5222d" },
  { title: "Subscribed", value: 24758, percent: 70, color: "#52c41a" },
];

export const socialNetworks = [
  { platform: "Instagram", percent: 78, color: "#e1306c" },
  { platform: "Snapchat", percent: 46, color: "#fffc00" },
  { platform: "Google", percent: 38, color: "#4285f4" },
  { platform: "Twitter", percent: 25, color: "#1da1f2" },
];

export const newUsers = [
  { id: 1, name: "Hammad Raja", handle: "@hammad", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elon" },
  { id: 2, name: "Umar Ghafoor", handle: "@umar", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julia" },
  { id: 3, name: "Danish Nazeer", handle: "@danish", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus" },
  { id: 4, name: "Ali", handle: "@ali", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sonya" },
];

export const recentOrdersData = [
  {
    key: '1',
    item: 'Nike Air Max',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=Order',
    amount: '$120.00',
    vendor: 'Hammad Raja',
    status: 'Completed',
    rating: 5.0,
  },
  {
    key: '2',
    item: 'Apple Watch Series 8',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=Order',
    amount: '$399.00',
    vendor: 'Umar Ghafoor',
    status: 'Pending',
    rating: 4.8,
  },
  {
    key: '3',
    item: 'Sony WH-1000XM5',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=Order',
    amount: '$348.00',
    vendor: 'Danish Nazeer',
    status: 'Canceled',
    rating: 4.5,
  },
  {
    key: '4',
    item: 'Logitech MX Master 3S',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=Order',
    amount: '$99.00',
    vendor: 'Ali',
    status: 'Completed',
    rating: 4.9,
  },
  {
    key: '5',
    item: 'Samsung Galaxy S23',
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=Order',
    amount: '$799.00',
    vendor: 'Khalil Ahmad',
    status: 'Pending',
    rating: 4.7,
  },
];

export const detailedViewsData = Array.from({ length: 30 }).map((_, i) => ({
  date: `2024-03-${String(i + 1).padStart(2, '0')}`,
  views: Math.floor(15000 + Math.sin(i / 2) * 5000 + (i * 200)),
  uniqueViews: Math.floor(8000 + Math.sin(i / 2) * 2000 + (i * 100)),
}));

export const detailedRevenueData = [
  { month: "Jan", revenue: 45000, profit: 22000, expenses: 23000 },
  { month: "Feb", revenue: 52000, profit: 26000, expenses: 26000 },
  { month: "Mar", revenue: 38000, profit: 15000, expenses: 23000 },
  { month: "Apr", revenue: 65000, profit: 35000, expenses: 30000 },
  { month: "May", revenue: 48000, profit: 20000, expenses: 28000 },
  { month: "Jun", revenue: 72000, profit: 42000, expenses: 30000 },
  { month: "Jul", revenue: 58000, profit: 28000, expenses: 30000 },
  { month: "Aug", revenue: 60000, profit: 32000, expenses: 28000 },
  { month: "Sep", revenue: 85000, profit: 50000, expenses: 35000 },
  { month: "Oct", revenue: 75000, profit: 40000, expenses: 35000 },
  { month: "Nov", revenue: 95000, profit: 55000, expenses: 40000 },
  { month: "Dec", revenue: 110000, profit: 65000, expenses: 45000 },
];

export const detailedEcommerceSalesData = Array.from({ length: 30 }).map((_, i) => ({
  date: `2024-04-${String(i + 1).padStart(2, '0')}`,
  sales: Math.floor(3000 + Math.cos(i / 3) * 1000 + (i * 50)),
  orders: Math.floor(80 + Math.cos(i / 3) * 20 + i),
}));

export const detailedCategoryData = [
  { type: 'Electronics', value: 45000, orders: 120 },
  { type: 'Clothing', value: 25000, orders: 300 },
  { type: 'Home & Garden', value: 15000, orders: 80 },
  { type: 'Sports', value: 10000, orders: 60 },
  { type: 'Books', value: 5000, orders: 200 },
  { type: 'Automotive', value: 8000, orders: 40 },
];
