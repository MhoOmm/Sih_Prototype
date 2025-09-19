import React, { useState, useEffect, useRef } from "react";
import * as Chart from 'chart.js';
import Coin from './Coin.jsx';

// Scaled Coin Component for different sizes
function ScaledCoin({ scale = 0.5 }) {
  return (
    <div style={{ transform: `scale(${scale})`, transformOrigin: 'center', }}>
      <Coin />
    </div>
  );
}

export default function GovtCoinDashboard() {
  const [selectedMonth, setSelectedMonth] = useState("December 2024");
  const monthlyChartRef = useRef(null);
  const categoryChartRef = useRef(null);
  const monthlyChartInstance = useRef(null);
  const categoryChartInstance = useRef(null);
  
  // Updated sample data with ₹40-80 coin values
  const monthlyData = {
    "December 2024": {
      totalCoins: 1250,
      coinValue: 65, // Current market value per coin
      transactions: [
        { id: 1, date: "2024-12-15", seller: "Rajesh Kumar", location: "Ranchi", amount: 25, type: "Tourism Sale", coinValue: 68 },
        { id: 2, date: "2024-12-14", seller: "Priya Singh", location: "Jamshedpur", amount: 18, type: "Handicraft Sale", coinValue: 72 },
        { id: 3, date: "2024-12-13", seller: "Amit Gupta", location: "Dhanbad", amount: 32, type: "Food & Beverage", coinValue: 58 },
        { id: 4, date: "2024-12-12", seller: "Sunita Devi", location: "Bokaro", amount: 15, type: "Souvenir Sale", coinValue: 75 },
        { id: 5, date: "2024-12-11", seller: "Ravi Sharma", location: "Ranchi", amount: 28, type: "Tour Guide Service", coinValue: 62 },
      ],
      totalTransactions: 118,
      monthlyIncentive: 81250, // 1250 coins × ₹65 average
      status: "Current Month",
      avgCoinValue: 65,
      minCoinValue: 42,
      maxCoinValue: 78
    },
    "November 2024": {
      totalCoins: 1100,
      coinValue: 58,
      transactions: [
        { id: 6, date: "2024-11-28", seller: "Vikash Singh", location: "Ranchi", amount: 22, type: "Tourism Sale", coinValue: 55 },
        { id: 7, date: "2024-11-25", seller: "Meera Devi", location: "Jamshedpur", amount: 30, type: "Handicraft Sale", coinValue: 61 },
        { id: 8, date: "2024-11-20", seller: "Suresh Kumar", location: "Dhanbad", amount: 20, type: "Food & Beverage", coinValue: 58 },
      ],
      totalTransactions: 95,
      monthlyIncentive: 63800, // 1100 coins × ₹58 average
      status: "Incentive Paid ✓",
      avgCoinValue: 58,
      minCoinValue: 45,
      maxCoinValue: 71
    },
    "October 2024": {
      totalCoins: 850,
      coinValue: 52,
      transactions: [
        { id: 9, date: "2024-10-30", seller: "Anita Sharma", location: "Bokaro", amount: 18, type: "Souvenir Sale", coinValue: 49 },
        { id: 10, date: "2024-10-25", seller: "Deepak Gupta", location: "Ranchi", amount: 35, type: "Tour Guide Service", coinValue: 55 },
      ],
      totalTransactions: 76,
      monthlyIncentive: 44200, // 850 coins × ₹52 average
      status: "Incentive Paid ✓",
      avgCoinValue: 52,
      minCoinValue: 41,
      maxCoinValue: 67
    }
  };

  // Updated chart data with coin values
  const monthlyChartData = {
    labels: ['Oct 2024', 'Nov 2024', 'Dec 2024'],
    datasets: [
      {
        label: 'Monthly Coins Earned',
        data: [850, 1100, 1250],
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderColor: 'rgba(16, 185, 129, 1)',
        pointBackgroundColor: 'rgba(16, 185, 129, 1)',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        yAxisID: 'y'
      },
      {
        label: 'Average Coin Value (₹)',
        data: [52, 58, 65],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        yAxisID: 'y1'
      }
    ]
  };

  const categoryChartData = {
    labels: ['Tourism Sale', 'Handicraft Sale', 'Food & Beverage', 'Souvenir Sale', 'Tour Guide Service'],
    datasets: [{
      data: [320, 280, 250, 200, 200],
      backgroundColor: [
        'rgba(16, 185, 129, 0.9)',
        'rgba(59, 130, 246, 0.9)',
        'rgba(245, 158, 11, 0.9)',
        'rgba(239, 68, 68, 0.9)',
        'rgba(139, 92, 246, 0.9)'
      ],
      borderColor: [
        'rgba(16, 185, 129, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(239, 68, 68, 1)',
        'rgba(139, 92, 246, 1)'
      ],
      borderWidth: 2,
      hoverBackgroundColor: [
        'rgba(16, 185, 129, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(239, 68, 68, 1)',
        'rgba(139, 92, 246, 1)'
      ]
    }]
  };

  useEffect(() => {
    // Register Chart.js components
    Chart.Chart.register(
      Chart.CategoryScale,
      Chart.LinearScale,
      Chart.PointElement,
      Chart.LineElement,
      Chart.BarElement,
      Chart.ArcElement,
      Chart.DoughnutController,
      Chart.LineController,
      Chart.Title,
      Chart.Tooltip,
      Chart.Legend,
      Chart.Filler
    );

    // Cleanup existing charts first
    if (monthlyChartInstance.current) {
      monthlyChartInstance.current.destroy();
      monthlyChartInstance.current = null;
    }
    if (categoryChartInstance.current) {
      categoryChartInstance.current.destroy();
      categoryChartInstance.current = null;
    }

    // Create monthly chart with dual y-axis
    if (monthlyChartRef.current) {
      monthlyChartInstance.current = new Chart.Chart(monthlyChartRef.current, {
        type: 'line',
        data: monthlyChartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
            mode: 'index',
            intersect: false,
          },
          plugins: {
            legend: {
              labels: {
                color: '#ffffff',
                font: {
                  size: 14
                }
              }
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              titleColor: '#ffffff',
              bodyColor: '#ffffff',
              borderColor: 'rgba(16, 185, 129, 1)',
              borderWidth: 1
            }
          },
          scales: {
            x: {
              ticks: {
                color: 'rgba(255, 255, 255, 0.8)',
                font: {
                  size: 12
                }
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }
            },
            y: {
              type: 'linear',
              display: true,
              position: 'left',
              beginAtZero: true,
              title: {
                display: true,
                text: 'Coins Earned',
                color: 'rgba(16, 185, 129, 1)',
                font: {
                  size: 12,
                  weight: 'bold'
                }
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.8)',
                font: {
                  size: 12
                }
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }
            },
            y1: {
              type: 'linear',
              display: true,
              position: 'right',
              min: 40,
              max: 80,
              title: {
                display: true,
                text: 'Coin Value (₹)',
                color: 'rgba(59, 130, 246, 1)',
                font: {
                  size: 12,
                  weight: 'bold'
                }
              },
              ticks: {
                color: 'rgba(255, 255, 255, 0.8)',
                font: {
                  size: 12
                },
                callback: function(value) {
                  return '₹' + value;
                }
              },
              grid: {
                drawOnChartArea: false,
              },
            }
          }
        }
      });
    }

    // Create category chart
    if (categoryChartRef.current) {
      categoryChartInstance.current = new Chart.Chart(categoryChartRef.current, {
        type: 'doughnut',
        data: categoryChartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: {
                color: '#ffffff',
                padding: 15,
                font: {
                  size: 12
                },
                usePointStyle: true
              }
            },
            tooltip: {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              titleColor: '#ffffff',
              bodyColor: '#ffffff',
              borderWidth: 1,
              callbacks: {
                label: function(context) {
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = ((context.raw / total) * 100).toFixed(1);
                  return context.label + ': ' + context.raw + ' coins (' + percentage + '%)';
                }
              }
            }
          },
          cutout: '60%',
          elements: {
            arc: {
              borderWidth: 2
            }
          }
        }
      });
    }

    // Cleanup function
    return () => {
      if (monthlyChartInstance.current) {
        monthlyChartInstance.current.destroy();
        monthlyChartInstance.current = null;
      }
      if (categoryChartInstance.current) {
        categoryChartInstance.current.destroy();
        categoryChartInstance.current = null;
      }
    };
  }, []);

  const currentData = monthlyData[selectedMonth];
  const totalIncentiveValue = currentData.totalCoins * currentData.avgCoinValue;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="rounded-2xl p-2 mb-8 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Aranya Coin Dashboard</h1>
              <p className="text-green-100">Dynamic coin values (₹40-80) - Performance-based seller rewards!</p>
            </div>
            <div className="flex flex-col items-center">
              <ScaledCoin scale={0.5} />
              <div className="text-center">
                <div className="text-3xl font-bold text-white">{currentData.totalCoins}</div>
                <div className="text-green-100">Total Coins</div>
                <div className="text-xl font-semibold text-yellow-400 mt-1">₹{currentData.avgCoinValue}/coin</div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Monthly Trends Chart */}
          <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4">Monthly Coins & Value Trends</h3>
            <div className="relative h-64">
              <canvas ref={monthlyChartRef}></canvas>
            </div>
          </div>

          {/* Category Distribution Chart */}
          <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4">Coins by Category</h3>
            <div className="relative h-64">
              <canvas ref={categoryChartRef}></canvas>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Monthly Transactions */}
          <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 border border-green-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Monthly Transactions</h3>
              <div className="bg-green-600 rounded-full p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">{currentData.totalTransactions}</div>
            <div className="text-green-400">+12% from last month</div>
          </div>

          {/* Coins Earned */}
          <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 border border-green-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Coins Earned</h3>
              <ScaledCoin scale={0.15} />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{currentData.totalCoins}</div>
            <div className="text-green-400">This month</div>
          </div>

          {/* Current Coin Value */}
          <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 border border-yellow-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Current Coin Value</h3>
              <div className="bg-yellow-600 rounded-full p-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" stroke="none" viewBox="0 0 16 16">
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
                </svg>
              </div>

            </div>
            <div className="text-3xl font-bold text-white mb-2">₹{currentData.avgCoinValue}</div>
            <div className="text-yellow-400">Average value</div>
          </div>

          {/* Total Incentive Value */}
          <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 border border-blue-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Total Incentive Value</h3>
              <div className="bg-blue-600 rounded-full p-2">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">₹{totalIncentiveValue.toLocaleString()}</div>
            <div className="text-blue-400">Monthly payout</div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 border border-green-500">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Recent Transactions</h2>
            <select 
              className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-green-500"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="December 2024">December 2024 (Current)</option>
              <option value="November 2024">November 2024 (Paid ✓)</option>
              <option value="October 2024">October 2024 (Paid ✓)</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-green-500">
                  <th className="text-green-400 font-semibold p-3">Date</th>
                  <th className="text-green-400 font-semibold p-3">Seller</th>
                  <th className="text-green-400 font-semibold p-3">Location</th>
                  <th className="text-green-400 font-semibold p-3">Type</th>
                  <th className="text-green-400 font-semibold p-3">Coins</th>
                  <th className="text-green-400 font-semibold p-3">Coin Value</th>
                  <th className="text-green-400 font-semibold p-3">Total Value</th>
                </tr>
              </thead>
              <tbody>
                {currentData.transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-700 hover:bg-gray-700 hover:bg-opacity-50">
                    <td className="text-white p-3">{new Date(transaction.date).toLocaleDateString()}</td>
                    <td className="text-white p-3">{transaction.seller}</td>
                    <td className="text-white p-3">{transaction.location}</td>
                    <td className="text-white p-3">
                      <span className="bg-green-600 bg-opacity-30 text-green-300 px-2 py-1 rounded-full text-sm">
                        {transaction.type}
                      </span>
                    </td>
                    <td className="text-white p-3 font-semibold">{transaction.amount}</td>
                    <td className="text-yellow-400 p-3 font-semibold">₹{transaction.coinValue}</td>
                    <td className="text-blue-400 p-3 font-semibold">₹{(transaction.amount * transaction.coinValue).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="mt-6 bg-green-900 bg-opacity-30 rounded-lg p-4 border border-green-600">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <span className="text-lg font-semibold">Monthly Summary ({selectedMonth}):</span>
                <span className="ml-4">{currentData.transactions.length} transactions shown</span>
                <span className="ml-4 text-sm bg-gray-700 px-2 py-1 rounded">{currentData.status}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-green-400 text-sm">Coin Value Range</div>
                  <div className="text-white font-bold">₹{currentData.minCoinValue} - ₹{currentData.maxCoinValue}</div>
                </div>
                <div className="text-right">
                  <div className="text-green-400 text-sm">
                    {selectedMonth === "December 2024" ? "Next Payout" : "Payout Status"}
                  </div>
                  <div className="text-white font-bold">
                    {selectedMonth === "December 2024" ? "31st Dec 2024" : "Paid"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
