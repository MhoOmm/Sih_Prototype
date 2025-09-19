import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { TrendingUp, IndianRupee, Package, Eye, Users, ShoppingCart,DollarSign } from 'lucide-react';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const SellerDashboard = () => {
  // Sample data for the past 6 months
  const monthlyData = {
    months: ['April 2025', 'May 2025', 'June 2025', 'July 2025', 'August 2025', 'September 2025'],
    sales: [15, 28, 35, 22, 45, 38],
    revenue: [37500, 70000, 87500, 55000, 112500, 95000],
    views: [450, 680, 890, 720, 1200, 980],
    orders: [18, 32, 41, 28, 52, 44]
  };

  // Craft category breakdown
  const craftCategories = {
    labels: ['Dhokra Metal Art', 'Bamboo Crafts', 'Sohrai Paintings', 'Paitkar Scrolls'],
    data: [35, 25, 25, 15],
    colors: ['#10B981', '#3B82F6', '#F59E0B', '#EF4444']
  };

  // Line chart for sales trends
  const salesTrendData = {
    labels: monthlyData.months,
    datasets: [
      {
        label: 'Monthly Sales',
        data: monthlyData.sales,
        borderColor: '#10B981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#10B981',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
      },
    ],
  };

  // Bar chart for revenue
  const revenueData = {
    labels: monthlyData.months,
    datasets: [
      {
        label: 'Revenue (₹)',
        data: monthlyData.revenue,
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: '#10B981',
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  // Doughnut chart for craft categories
  const categoryData = {
    labels: craftCategories.labels,
    datasets: [
      {
        data: craftCategories.data,
        backgroundColor: craftCategories.colors,
        borderColor: '#1F2937',
        borderWidth: 2,
        hoverOffset: 4,
      },
    ],
  };

  // Chart options
  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#D1D5DB',
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleColor: '#F3F4F6',
        bodyColor: '#F3F4F6',
        borderColor: '#10B981',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(75, 85, 99, 0.3)',
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(75, 85, 99, 0.3)',
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 11,
          },
        },
      },
    },
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#D1D5DB',
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleColor: '#F3F4F6',
        bodyColor: '#F3F4F6',
        borderColor: '#10B981',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            return `Revenue: ₹${context.parsed.y.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(75, 85, 99, 0.3)',
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: 'rgba(75, 85, 99, 0.3)',
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 11,
          },
          callback: function(value) {
            return '₹' + (value / 1000) + 'K';
          },
        },
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#D1D5DB',
          font: {
            size: 11,
          },
          padding: 15,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleColor: '#F3F4F6',
        bodyColor: '#F3F4F6',
        borderColor: '#10B981',
        borderWidth: 1,
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed}%`;
          },
        },
      },
    },
  };

  // Calculate totals and averages
  const totalSales = monthlyData.sales.reduce((sum, val) => sum + val, 0);
  const totalRevenue = monthlyData.revenue.reduce((sum, val) => sum + val, 0);
  const totalViews = monthlyData.views.reduce((sum, val) => sum + val, 0);
  const totalOrders = monthlyData.orders.reduce((sum, val) => sum + val, 0);
  const avgMonthlySales = Math.round(totalSales / 6);
  const avgMonthlyRevenue = Math.round(totalRevenue / 6);

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Seller Analytics Dashboard</h1>
          <p className="text-gray-300">Performance overview for the past 6 months</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Sales</p>
                <p className="text-2xl font-bold text-green-400">{totalSales}</p>
                <p className="text-gray-500 text-xs">Avg: {avgMonthlySales}/month</p>
              </div>
              <ShoppingCart className="text-green-400" size={24} />
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Revenue</p>
                <p className="text-2xl font-bold text-blue-400">₹{(totalRevenue / 100000).toFixed(1)}L</p>
                <p className="text-gray-500 text-xs">Avg: ₹{(avgMonthlyRevenue / 1000).toFixed(0)}K/month</p>
              </div>
              <IndianRupee className="text-blue-400" size={24} />
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Views</p>
                <p className="text-2xl font-bold text-yellow-400">{(totalViews / 1000).toFixed(1)}K</p>
                <p className="text-gray-500 text-xs">Avg: {Math.round(totalViews / 6)}/month</p>
              </div>
              <Eye className="text-yellow-400" size={24} />
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Orders</p>
                <p className="text-2xl font-bold text-purple-400">{totalOrders}</p>
                <p className="text-gray-500 text-xs">Conversion: {((totalOrders/totalViews)*100).toFixed(1)}%</p>
              </div>
              <Package className="text-purple-400" size={24} />
            </div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Sales Trend Line Chart */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="mr-2 text-green-400" size={20} />
              Sales Trend (Last 6 Months)
            </h3>
            <div style={{ height: '300px' }}>
              <Line data={salesTrendData} options={lineChartOptions} />
            </div>
          </div>

          {/* Revenue Bar Chart */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <IndianRupee className="mr-2 text-blue-400" size={20} />
              Monthly Revenue
            </h3>
            <div style={{ height: '300px' }}>
              <Bar data={revenueData} options={barChartOptions} />
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Craft Categories Breakdown */}
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Package className="mr-2 text-yellow-400" size={20} />
              Sales by Category
            </h3>
            <div style={{ height: '250px' }}>
              <Doughnut data={categoryData} options={doughnutOptions} />
            </div>
          </div>

          {/* Monthly Performance Table */}
          <div className="lg:col-span-2 bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Users className="mr-2 text-purple-400" size={20} />
              Monthly Performance Summary
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left text-gray-300 pb-3 font-medium">Month</th>
                    <th className="text-right text-gray-300 pb-3 font-medium">Sales</th>
                    <th className="text-right text-gray-300 pb-3 font-medium">Revenue</th>
                    <th className="text-right text-gray-300 pb-3 font-medium">Views</th>
                    <th className="text-right text-gray-300 pb-3 font-medium">Conversion</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  {monthlyData.months.map((month, index) => (
                    <tr key={month} className="border-b border-gray-700/50">
                      <td className="py-3 font-medium">{month}</td>
                      <td className="py-3 text-right text-green-400 font-semibold">
                        {monthlyData.sales[index]}
                      </td>
                      <td className="py-3 text-right text-blue-400 font-semibold">
                        ₹{(monthlyData.revenue[index] / 1000).toFixed(0)}K
                      </td>
                      <td className="py-3 text-right text-yellow-400 font-semibold">
                        {monthlyData.views[index]}
                      </td>
                      <td className="py-3 text-right text-purple-400 font-semibold">
                        {((monthlyData.orders[index] / monthlyData.views[index]) * 100).toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Growth Indicators */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Sales Growth</p>
                <p className="text-lg font-bold text-green-400">
                  +{(((monthlyData.sales[5] - monthlyData.sales[0]) / monthlyData.sales[0]) * 100).toFixed(1)}%
                </p>
                <p className="text-gray-500 text-xs">vs 6 months ago</p>
              </div>
              <div className="text-green-400">
                <TrendingUp size={20} />
              </div>
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Revenue Growth</p>
                <p className="text-lg font-bold text-blue-400">
                  +{(((monthlyData.revenue[5] - monthlyData.revenue[0]) / monthlyData.revenue[0]) * 100).toFixed(1)}%
                </p>
                <p className="text-gray-500 text-xs">vs 6 months ago</p>
              </div>
              <div className="text-blue-400">
                <TrendingUp size={20} />
              </div>
            </div>
          </div>

          <div className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Best Month</p>
                <p className="text-lg font-bold text-yellow-400">August 2025</p>
                <p className="text-gray-500 text-xs">45 sales, ₹1.12L revenue</p>
              </div>
              <div className="text-yellow-400">
                <TrendingUp size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
