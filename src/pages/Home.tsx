import React from 'react';
import { BarChart3, Users, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: 'Live Market Prices',
      description: 'Get real-time updates on crop prices across different markets.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: 'Demand Forecasting',
      description: 'Make informed decisions with AI-powered demand predictions.'
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: 'Direct Buyer Connection',
      description: 'Connect and trade directly with verified buyers.'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'Secure Transactions',
      description: 'Safe and transparent payment processing.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Empowering Farmers with Real-Time Market Intelligence
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Get the latest crop prices, connect with buyers directly, and sell smarter.
            </p>
            <Link
              to="/signup"
              className="bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <p className="mt-4 text-xl text-gray-600">Everything you need to succeed in agricultural trading</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Agricultural Business?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of farmers who are already benefiting from our platform.
          </p>
          <Link
            to="/signup"
            className="bg-white text-green-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
}