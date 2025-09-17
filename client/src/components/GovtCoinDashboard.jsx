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
  
  // Sample data
  const monthlyData = {
    "December 2024": {
      totalCoins: 1250,
      transactions: [
        { id: 1, date: "2024-12-15", seller: "Rajesh Kumar", location: "Ranchi", amount: 25, type: "Tourism Sale" },
        { id: 2, date: "2024-12-14", seller: "Priya Singh", location: "Jamshedpur", amount: 18, type: "Handicraft Sale" },
        { id: 3, date: "2024-12-13", seller: "Amit Gupta", location: "Dhanbad", amount: 32, type: "Food & Beverage" },
        { id: 4, date: "2024-12-12", seller: "Sunita Devi", location: "Bokaro", amount: 15, type: "Souvenir Sale" },
        { id: 5, date: "2024-12-11", seller: "Ravi Sharma", location: "Ranchi", amount: 28, type: "Tour Guide Service" },
      ],
      totalTransactions: 118,
      monthlyIncentive: 15000,
      status: "Current Month"
    },
    "November 2024": {
      totalCoins: 1100,
      transactions: [
        { id: 6, date: "2024-11-28", seller: "Vikash Singh", location: "Ranchi", amount: 22, type: "Tourism Sale" },
        { id: 7, date: "2024-11-25", seller: "Meera Devi", location: "Jamshedpur", amount: 30, type: "Handicraft Sale" },
        { id: 8, date: "2024-11-20", seller: "Suresh Kumar", location: "Dhanbad", amount: 20, type: "Food & Beverage" },
      ],
      totalTransactions: 95,
      monthlyIncentive: 13200,
      status: "Incentive Paid ✓"
    },
    "October 2024": {
      totalCoins: 850,
      transactions: [
        { id: 9, date: "2024-10-30", seller: "Anita Sharma", location: "Bokaro", amount: 18, type: "Souvenir Sale" },
        { id: 10, date: "2024-10-25", seller: "Deepak Gupta", location: "Ranchi", amount: 35, type: "Tour Guide Service" },
      ],
      totalTransactions: 76,
      monthlyIncentive: 10200,
      status: "Incentive Paid ✓"
    }
  };

  // Chart data - Monthly reset system (each month starts from 0)
  const monthlyChartData = {
    labels: ['Oct 2024', 'Nov 2024', 'Dec 2024'],
    datasets: [{
      label: 'Monthly Coins Earned',
      data: [850, 1100, 1250], // Each month's individual coin count
      backgroundColor: 'rgba(16, 185, 129, 0.2)',
      borderColor: 'rgba(16, 185, 129, 1)',
      pointBackgroundColor: 'rgba(16, 185, 129, 1)',
      pointBorderColor: '#ffffff',
      pointBorderWidth: 2,
      pointRadius: 6,
      borderWidth: 3,
      fill: true,
      tension: 0.4
    }]
  };

  const categoryChartData = {
    labels: ['Tourism Sale', 'Handicraft Sale', 'Food & Beverage', 'Souvenir Sale', 'Tour Guide Service'],
    datasets: [{
      data: [320, 280, 250, 200, 200], // Current month's distribution only
      backgroundColor: [
        'rgba(16, 185, 129, 0.9)',   // Bright green
        'rgba(59, 130, 246, 0.9)',   // Blue
        'rgba(245, 158, 11, 0.9)',   // Amber
        'rgba(239, 68, 68, 0.9)',    // Red
        'rgba(139, 92, 246, 0.9)'    // Purple
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

    // Create monthly chart
    if (monthlyChartRef.current) {
      monthlyChartInstance.current = new Chart.Chart(monthlyChartRef.current, {
        type: 'line',
        data: monthlyChartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
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
            y: {
              beginAtZero: true,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className=" rounded-2xl p-2 mb-8 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">BHARRA Coin</h1>
              <p className="text-green-100">Rack up coins monthly-great reviews mean sweet seller rewards!</p>
            </div>
            <div className="flex flex-col items-center ">
              <ScaledCoin scale={0.5} />
              <div>
                <div className="text-3xl font-bold text-white">{currentData.totalCoins}</div>
                <div className="text-green-100">Total Coins</div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Monthly Trends Chart */}
          <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4">Monthly Coin Trends</h3>
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

          {/* Government Incentive */}
          <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm rounded-xl p-6 border border-green-500">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Monthly Incentive</h3>
              <div className="bg-green-600 rounded-full p-2">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4h12M6 8h12m-6 12l6-8H6a4 4 0 1 0 0 8z" />
                    </svg>

              </div>
            </div>
            <div className="text-3xl font-bold text-white mb-2">₹{currentData.monthlyIncentive.toLocaleString()}</div>
            <div className="text-green-400">Expected payout</div>
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
                  <th className="text-green-400 font-semibold p-3">Coins Earned</th>
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
                    <td className="text-white p-3">
                      <div className="flex items-center">
                        <span className="font-semibold text-center">{transaction.amount}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary*/}
          <div className="mt-6 bg-green-900 bg-opacity-30 rounded-lg p-4 border border-green-600">
            <div className="flex items-center justify-between">
              <div className="text-white">
                <span className="text-lg font-semibold">Monthly Summary ({selectedMonth}):</span>
                <span className="ml-4">{currentData.transactions.length} transactions shown</span>
                <span className="ml-4 text-sm bg-gray-700 px-2 py-1 rounded">{currentData.status}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-green-400 text-sm">Government Incentive Rate</div>
                  <div className="text-white font-bold">₹12 per coin</div>
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

        {/* Info Panel */}
        {/* <div className="bg-gradient-to-r from-green-800 to-green-700 rounded-xl p-6 mt-6">
          <h3 className="text-xl font-bold text-white mb-3">How the Jharkhand Tourism Coin System Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-green-100">
            <div>
              <div className="font-semibold mb-1">🎯 Earn Coins</div>
              <div className="text-sm">Sellers earn coins for every tourism-related transaction</div>
            </div>
            <div>
              <div className="font-semibold mb-1">💰 Monthly Incentives</div>
              <div className="text-sm">Government provides ₹12 incentive per coin at month end</div>
            </div>
            <div>
              <div className="font-semibold mb-1">🔄 Monthly Reset</div>
              <div className="text-sm">Coins reset to zero at month end after government payout</div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}