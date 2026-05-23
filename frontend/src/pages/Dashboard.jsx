import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">User Management System</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white p-8 rounded border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Welcome, {user?.name}!</h2>
          <p className="text-gray-600 mb-6">
            Manage all your users from the dashboard. Click on "View Users" to see the user list and perform CRUD operations.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded border border-gray-200">
              <h3 className="font-medium text-gray-900 mb-2">Your Information</h3>
              <p className="text-sm text-gray-600">Email: {user?.email}</p>
              <p className="text-sm text-gray-600">Phone: {user?.phone}</p>
            </div>

            <div className="pt-4">
              <a
                href="/users"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View Users
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
