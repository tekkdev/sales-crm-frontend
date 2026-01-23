import DashboardCard from "../components/cards/DashboardCard.tsx";
import { Badge } from "../components/ui/Badge.tsx";
import {
  Users,
  Clock,
  ShoppingCart,
  CheckCircle2,
  Package,
  Target,
  DollarSign,
  Award,
  AlertCircle,
} from "lucide-react";
import { currencySymbol } from "../constants/constants.ts";
import {
  kpiData,
  orders,
  transactions,
  overduePayments,
  delayedOrders,
  staleLeads,
  trends,
  conversionRate,
  wonLeads,
  qualifiedLeads,
  avgDealSize,
  totalDeals,
} from "../data/mock";
import { getTrendIcon, getTrendColor } from "../utils/helpers.tsx"; // helper functions

export const Dashboard = () => {
  const overdueAmount =
    overduePayments.reduce((sum, t) => sum + t.amount, 0) / 1_000_000;

  const navigateToLeads = () => {
    console.log("Navigate to Leads");
  };

  const navigateToOrders = () => {
    console.log("Navigate to Orders");
  };

  const navigateToTransactions = (filters?: any) => {
    console.log("Navigate to Transactions", filters);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
      {/* Total Leads */}
      <DashboardCard
        title="Total Leads"
        value={kpiData.totalLeads}
        icon={Users}
        variant="neutral"
        trendIcon={getTrendIcon(trends.totalLeads)}
        onClick={() => console.log("Navigate to Leads")}
        footer={
          <>
            <div className="flex justify-between text-xs">
              <span>New (7d):</span>
              <span className="font-semibold">
                +{Math.floor(kpiData.totalLeads * 0.15)}
              </span>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span>Qualified:</span>
              <span className="font-semibold">
                {orders.filter((o) => o.status === "Qualified").length}
              </span>
            </div>
          </>
        }
        subtitle={
          <p className={`text-xs mt-1 ${getTrendColor(trends.totalLeads)}`}>
            {trends.totalLeads > 0 ? "+" : ""}
            {trends.totalLeads}% vs last period
          </p>
        }
      />
      {/* Active Orders */}
      <DashboardCard
        title="Active Orders"
        value={kpiData.activeOrders}
        icon={ShoppingCart}
        variant="emerald"
        trendIcon={getTrendIcon(trends.totalLeads)}
        onClick={() => console.log("Navigate to Active Orders")}
        subtitle={
          <p className={`text-xs mt-1 ${getTrendColor(trends.activeOrders)}`}>
            {trends.activeOrders > 0 ? "+" : ""}
            {trends.activeOrders}% vs last period
          </p>
        }
        footer={
          <>
            <div className="flex justify-between text-xs">
              <span>In Progress:</span>
              <span className="font-semibold">
                {orders.filter((o) => o.status === "In Progress").length}
              </span>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span>Total Orders:</span>
              <span className="font-semibold">{orders.length}</span>
            </div>
          </>
        }
      />
      {/* Total Revenue */}
      <DashboardCard
        title="Total Revenue"
        value={`${currencySymbol}${(kpiData.totalRevenue / 1000000).toFixed(1)}M`}
        icon={CheckCircle2}
        variant="blue"
        trendIcon={getTrendIcon(trends.totalLeads)}
        onClick={() => console.log("Navigate to Revenue")}
        subtitle={
          <p className={`text-xs mt-1 ${getTrendColor(trends.totalRevenue)}`}>
            {trends.totalRevenue > 0 ? "+" : ""}
            {trends.totalRevenue}% vs last period
          </p>
        }
        footer={
          <>
            <div className="flex justify-between text-xs">
              <span>This Month:</span>
              <span className="font-semibold">
                {currencySymbol}
                {((kpiData.totalRevenue * 0.18) / 1000000).toFixed(1)}M
              </span>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span>Avg/Deal:</span>
              <span className="font-semibold">
                {currencySymbol}
                {(
                  kpiData.totalRevenue /
                  Math.max(orders.length, 1) /
                  1000
                ).toFixed(0)}
                K
              </span>
            </div>
          </>
        }
      />
      {/* Pending Payments */}
      <DashboardCard
        title="Pending Payments"
        value={`${currencySymbol}${(kpiData.pendingPayments / 1000000).toFixed(1)}M`}
        icon={Clock}
        variant="amber"
        trendIcon={getTrendIcon(trends.totalLeads)}
        onClick={() => console.log("Navigate to Pending Payments")}
        subtitle={
          <p
            className={`text-xs mt-1 ${getTrendColor(trends.pendingPayments)}`}
          >
            {trends.pendingPayments > 0 ? "+" : ""}
            {trends.pendingPayments}% vs last period
          </p>
        }
        footer={
          <>
            <div className="flex justify-between text-xs">
              <span>Overdue:</span>
              <span className="font-semibold text-red-600 dark:text-red-400">
                {currencySymbol}
                {((kpiData.pendingPayments * 0.25) / 1000000).toFixed(1)}M
              </span>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span>Pending Count:</span>
              <span className="font-semibold text-amber-600 dark:text-amber-400">
                {
                  transactions.filter((t) => t.paymentStatus === "Pending")
                    .length
                }
              </span>
            </div>
          </>
        }
      />
      {/* Conversion Rate */}
      <DashboardCard
        title="Conversion Rate"
        value={`${conversionRate}%`}
        icon={Target}
        variant="teal"
        trendIcon={getTrendIcon(trends.totalLeads)}
        onClick={() => console.log("Navigate to Conversion")}
        subtitle={
          <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
            Lead → Order
          </p>
        }
        footer={
          <>
            <div className="flex justify-between text-xs">
              <span>Won:</span>
              <span className="font-semibold text-green-600 dark:text-green-400">
                {wonLeads}
              </span>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span>Qualified:</span>
              <span className="font-semibold text-teal-600 dark:text-teal-400">
                {qualifiedLeads}
              </span>
            </div>
          </>
        }
      />
      {/* Avg Deal Size */}
      <DashboardCard
        title="Avg Deal Size"
        value={`${currencySymbol}${(avgDealSize / 1000).toFixed(0)}K`}
        icon={DollarSign}
        variant="gray"
        trendIcon={getTrendIcon(trends.totalLeads)}
        onClick={() => console.log("Navigate to Orders")}
        subtitle={
          <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
            Per completed order
          </p>
        }
        footer={
          <>
            <div className="flex justify-between text-xs">
              <span>Total Deals:</span>
              <span className="font-semibold text-green-600 dark:text-green-400">
                {totalDeals}
              </span>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span>Total Value:</span>
              <span className="font-semibold text-gray-600 dark:text-gray-400">
                {currencySymbol}
                {(kpiData.totalRevenue / 1000000).toFixed(1)}M
              </span>
            </div>
          </>
        }
      />

      <DashboardCard
        variant="emerald"
        onClick={() => navigateToTransactions({ paymentStatus: "Overdue" })}
      >
        <div className="flex items-center justify-between mb-2">
          <Clock className="w-5 h-5 text-red-600 dark:text-red-400" />

          <Badge className="bg-red-200 text-red-700 dark:bg-red-900/50 dark:text-red-300">
            {overduePayments.length}
          </Badge>
        </div>

        <p className="text-sm font-medium text-red-900 dark:text-red-100">
          Overdue Payments
        </p>

        <p className="text-xs text-red-700 dark:text-red-400 mt-1">
          {currencySymbol}
          {overdueAmount.toFixed(1)}M pending
        </p>
      </DashboardCard>
    </div>
  );
};
