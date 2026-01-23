// src/data/mock.ts
export const kpiData = {
  totalLeads: 245,
  activeOrders: 78,
  totalRevenue: 12000000,
  pendingPayments: 2200000,
  productRevenue: 5000000,
  serviceRevenue: 4000000,
  projectRevenue: 3000000,
};

export const trends = {
  totalLeads: 12,
  activeOrders: 8,
  totalRevenue: 15,
  pendingPayments: -5,
};

export const orders = [
  { id: 1, status: "In Progress" },
  { id: 2, status: "Completed" },
  { id: 3, status: "Qualified" },
];

export const transactions = [
  { id: 1, paymentStatus: "Pending", amount: 500000 },
  { id: 2, paymentStatus: "Paid", amount: 1500000 },
];

export const conversionRate = 35;
export const wonLeads = 50;
export const qualifiedLeads = 120;
export const avgDealSize = 240000;
export const totalDeals = 45;
