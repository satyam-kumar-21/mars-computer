import React from 'react';
import AdminNav from './AdminNav';

function AdminDashboard() {
  const totalUsers = 100; 
  const totalCourses = 50; 
  const totalInstitutes = 10;
  const latestTransactions = [
    { id: 1, userName: 'User 1', courseName: 'Course 1', date: '2024-03-12', time: '10:00', status: 'success', registrationId: 'REG123' },
    { id: 2, userName: 'User 2', courseName: 'Course 2', date: '2024-03-13', time: '11:00', status: 'pending', registrationId: 'REG456' },
    { id: 3, userName: 'User 3', courseName: 'Course 3', date: '2024-03-14', time: '12:00', status: 'success', registrationId: 'REG789' },
    { id: 4, userName: 'User 3', courseName: 'Course 3', date: '2024-03-14', time: '12:00', status: 'success', registrationId: 'REG789' },
  ];

  return (
    <div className="pt-14 flex flex-col md:flex-row">
      <AdminNav />

      <div className="mx-8 mt-2 w-full">
        <div className="bg-gray-200 p-4 rounded-lg">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Admin Dashboard</h1>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-blue-200 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Total Users</h2>
              <p className="text-2xl font-bold">{totalUsers}</p>
            </div>
            <div className="p-4 bg-blue-200 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Total Institutes</h2>
              <p className="text-2xl font-bold">{totalInstitutes}</p>
            </div>
            <div className="p-4 bg-blue-200 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Total Courses</h2>
              <p className="text-2xl font-bold">{totalCourses}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 p-4 rounded-lg mt-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Latest Transactions</h2>
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction ID
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User Name
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course Name
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 bg-gray-100 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Registration ID
                </th>
              </tr>
            </thead>
            <tbody>
              {latestTransactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.userName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.courseName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.registrationId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
