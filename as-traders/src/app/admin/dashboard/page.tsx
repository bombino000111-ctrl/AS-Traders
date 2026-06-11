'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Sample data - in production, this would come from an API
const sampleProducts = [
  { id: '1', name: 'Premium Ballpoint Pens', category: 'writing-supplies', price: 450 },
  { id: '2', name: 'A4 Notebooks', category: 'paper-products', price: 800 },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  // Simple login simulation (in production, use proper authentication)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (loginForm.username && loginForm.password) {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="admin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100">
        <div className="flex">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md min-h-screen hidden md:block">
            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      activeTab === 'dashboard' ? 'bg-primary-600 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    📊 Dashboard
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('products')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      activeTab === 'products' ? 'bg-primary-600 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    📦 Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('categories')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      activeTab === 'categories' ? 'bg-primary-600 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    📁 Categories
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('inquiries')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      activeTab === 'inquiries' ? 'bg-primary-600 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    ✉️ Inquiries
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('content')}
                    className={`w-full text-left px-4 py-2 rounded-lg transition ${
                      activeTab === 'content' ? 'bg-primary-600 text-white' : 'hover:bg-gray-100'
                    }`}
                  >
                    📝 Website Content
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setIsAuthenticated(false)}
                    className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-100 text-red-600 transition"
                  >
                    🚪 Logout
                  </button>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 p-8">
            {activeTab === 'dashboard' && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 text-sm mb-2">Total Products</h3>
                    <p className="text-3xl font-bold">156</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 text-sm mb-2">Pending Inquiries</h3>
                    <p className="text-3xl font-bold text-orange-600">12</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 text-sm mb-2">Categories</h3>
                    <p className="text-3xl font-bold">6</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-gray-500 text-sm mb-2">This Month</h3>
                    <p className="text-3xl font-bold text-green-600">48</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-4">Recent Inquiries</h2>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Name</th>
                        <th className="text-left py-3">Email</th>
                        <th className="text-left py-3">Type</th>
                        <th className="text-left py-3">Date</th>
                        <th className="text-left py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-3">Rajesh Kumar</td>
                        <td className="py-3">rajesh@school.edu</td>
                        <td className="py-3">Wholesale</td>
                        <td className="py-3">2024-01-15</td>
                        <td className="py-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">New</span></td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Priya Sharma</td>
                        <td className="py-3">priya@office.com</td>
                        <td className="py-3">Institutional</td>
                        <td className="py-3">2024-01-14</td>
                        <td className="py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Contacted</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'products' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-3xl font-bold">Product Management</h1>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition">
                    + Add Product
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-4">Product</th>
                        <th className="text-left py-3 px-4">Category</th>
                        <th className="text-left py-3 px-4">Price</th>
                        <th className="text-left py-3 px-4">Stock</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleProducts.map((product) => (
                        <tr key={product.id} className="border-t">
                          <td className="py-3 px-4">{product.name}</td>
                          <td className="py-3 px-4">{product.category}</td>
                          <td className="py-3 px-4">₹{product.price}</td>
                          <td className="py-3 px-4">In Stock</td>
                          <td className="py-3 px-4">
                            <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-800">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'inquiries' && (
              <div>
                <h1 className="text-3xl font-bold mb-6">Customer Inquiries</h1>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-3 px-4">Name</th>
                        <th className="text-left py-3 px-4">Contact</th>
                        <th className="text-left py-3 px-4">Message</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="py-3 px-4">Rajesh Kumar</td>
                        <td className="py-3 px-4">
                          <div>rajesh@school.edu</div>
                          <div className="text-sm text-gray-500">+91 98765 43210</div>
                        </td>
                        <td className="py-3 px-4 max-w-xs truncate">Looking for bulk stationery...</td>
                        <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">New</span></td>
                        <td className="py-3 px-4">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                          <button className="text-green-600 hover:text-green-800">Respond</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {(activeTab === 'categories' || activeTab === 'content') && (
              <div>
                <h1 className="text-3xl font-bold mb-6">
                  {activeTab === 'categories' ? 'Category Management' : 'Website Content'}
                </h1>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <p className="text-gray-600">
                    This section allows you to manage {activeTab}. 
                    Features include add, edit, delete functionality with form validation.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
