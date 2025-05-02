// src/pages/UserPage.jsx

import { useState } from 'react';
import { Search } from 'lucide-react';

const users = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'Active',
    lastActive: '2 hours ago',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'User',
    status: 'Active',
    lastActive: '1 day ago',
  },
  {
    name: 'Robert Johnson',
    email: 'robert.johnson@example.com',
    role: 'Editor',
    status: 'Inactive',
    lastActive: '1 week ago',
  },
  {
    name: 'Emily Brown',
    email: 'emily.brown@example.com',
    role: 'User',
    status: 'Active',
    lastActive: '3 hours ago',
  },
  {
    name: 'Michael Wilson',
    email: 'michael.wilson@example.com',
    role: 'User',
    status: 'Pending',
    lastActive: 'Never',
  },
];

export default function UsersAll() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" w-full min-h-screen bg-black text-white p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg">
          + Add User
        </button>
      </div>

      <div className="bg-[#111] p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-4">User Management</h2>

        <div className="relative mb-6">
          <Search className="absolute top-3 left-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-black border border-gray-700 rounded-lg focus:outline-none focus:border-white"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2">User</th>
                <th className="py-2">Role</th>
                <th className="py-2">Status</th>
                <th className="py-2">Last Active</th>
                <th className="py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, idx) => (
                <tr key={idx} className="border-b border-gray-800 hover:bg-gray-900">
                  <td className="py-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-700 rounded-full" />
                    <div>
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-sm text-gray-400">{user.email}</div>
                    </div>
                  </td>
                  <td className="py-4">{user.role}</td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.status === 'Active'
                          ? 'bg-white text-black'
                          : 'bg-gray-800 text-white'
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4">{user.lastActive}</td>
                  <td className="py-4 text-center">
                    <button className="text-gray-400 hover:text-white">⋯</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
