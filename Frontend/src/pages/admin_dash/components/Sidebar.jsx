import { Link } from "react-router-dom";
import { Home, BarChart, User, FileText, Settings, Newspaper } from 'lucide-react';

const menu = [
  { name: "Dashboard", icon: <Home size={20} />, path: "/" },
  { name: "Vendor", icon: <BarChart size={20} />, path: "/vendor" },
  { name: "Users", icon: <User size={20} />, path: "/sers" },
  { name: "Forms", icon: <FileText size={20} />, path: "/forms" },
  { name: "Agency", icon: <Settings size={20} />, path: "/agency" },
  { name: "Agents", icon: <Newspaper size={20} />, path: "/agents" },
];

export default function Sidebar() {
  return (
    <div className="bg-black text-white w-64 min-h-screen p-5 space-y-5">
      <h1 className="text-2xl font-bold mb-5">Admin</h1>
      {menu.map((item, index) => (
        <Link to={item.path} key={index}>
          <div className="flex items-center space-x-3 p-2 rounded hover:bg-gray-800 cursor-pointer">
            {item.icon}
            <span>{item.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
