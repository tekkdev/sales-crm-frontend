import { Clock, Package, Users } from "lucide-react";

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
  activeOrders: -5,
  totalRevenue: 15,
  pendingPayments: -5,
};

export const orders = [
  { id: 1, status: "Qualified", dueDate: "2026-01-15" },
  { id: 2, status: "In Progress", dueDate: "2026-01-20" },
  { id: 3, status: "Delayed", dueDate: "2026-01-10" },
  { id: 4, status: "In Progress", dueDate: "2026-01-22" },
  { id: 5, status: "Qualified", dueDate: "2026-01-18" },
    { id: 6, status: "Completed", dueDate: "2026-01-18" },
];

export const transactions = [
  { id: 1, paymentStatus: "Pending", amount: 1200000 },
  { id: 2, paymentStatus: "Completed", amount: 800000 },
  { id: 3, paymentStatus: "Paid", amount: 1500000 },
];

export const conversionRate = 32; // percentage
export const wonLeads = 86;
export const qualifiedLeads = 120;
export const avgDealSize = 450000;
export const totalDeals = 75;

export const overduePayments = transactions.filter((t) => t.paymentStatus === "Pending");

export const delayedOrders = orders.filter(
  (o) => new Date(o.dueDate) < new Date() && o.status !== "Completed"
);

export const staleLeads = [
  { id: 1, name: "Lead A", lastContact: "2026-01-10" },
  { id: 2, name: "Lead B", lastContact: "2026-01-12" },
];

// export const statusCards = [
//   {
//     key: "overdue",
//     title: "Overdue Payments",
//     icon: Clock,
//     variant: "teal",
//     badgeCount: "overduePayments",
//     type: "amount",
//   },
//   {
//     key: "delayed",
//     title: "Delayed Orders",
//     icon: Package,
//     variant: "amber",
//     badgeCount: "delayedOrders",
//     type: "text",
//     description: "Past due date",
//   },
//   {
//     key: "stale",
//     title: "Stale Leads",
//     icon: Users,
//     variant: "gray",
//     type: "text",
//     description: "No follow-up in 7+ days",
//   },
// ];
