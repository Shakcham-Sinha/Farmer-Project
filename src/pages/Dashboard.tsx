import React from 'react';
import { BarChart2, TrendingUp, MessageSquare, User, Bell } from 'lucide-react';
import type { MarketPrice } from '../types';

export function Dashboard() {
  const [marketPrices] = React.useState<MarketPrice[]>([
    { cropName: 'Wheat', currentPrice: 320.50, change: 2.5, trend: 'up' },
    { cropName: 'Rice', currentPrice: 450.75, change: -1.2, trend: 'down' },
    { cropName: 'Corn', currentPrice: 180.25, change: 0.8, trend: 'up' },
    { cropName: 'Soybeans', currentPrice: 520.00, change: -0.5, trend: 'down' },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-white shadow-md h-screen">
          <div className="p-4">
            <nav className="space-y-2">
              <a href="#" className="flex items-center p-3 text-gray-700 bg-gray-100 rounded-md">
                <BarChart2 className="h-5 w-5 mr-3" />
                Market Insights
              </a>
              <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md">
                <TrendingUp className="h-5 w-5 mr-3" />
                My Listings
              </a>
              <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md">
                <MessageSquare className="h-5 w-5 mr-3" />
                Messages
              </a>
              <a href="#" className="flex items-center p-3 text-gray-700 hover:bg-gray-100 rounded-md">
                <User className="h-5 w-5 mr-3" />
                Profile
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Bell className="h-6 w-6" />
            </button>
          </div>

          {/* Market Prices */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Live Market Prices</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3">Crop</th>
                    <th className="text-right py-3">Price (Rupees/ton)</th>
                    <th className="text-right py-3">24h Change</th>
                  </tr>
                </thead>
                <tbody>
                  {marketPrices.map((crop) => (
                    <tr key={crop.cropName} className="border-b">
                      <td className="py-3">{crop.cropName}</td>
                      <td className="text-right">₹{crop.currentPrice.toFixed(2)}</td>
                      <td className={`text-right ${crop.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {crop.change > 0 ? '+' : ''}{crop.change}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700">
                  Post New Listing
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50">
                  View My Listings
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  New buyer inquiry for wheat
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                  Price alert: Corn prices up by 2%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}