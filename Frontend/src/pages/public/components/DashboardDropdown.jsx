import { useState } from "react";
import { Link } from "react-router-dom";

import { FaTachometerAlt } from "react-icons/fa"; // Dashboard icon

const DashboardDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 py-2 px-4 text-lg text-black hover:text-[#e86822] transition-all"
      >
        <FaTachometerAlt />
       
        <svg
          className={`ml-1 w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-md z-10">
          <li>
            <Link
              to="/dashboard"
              className="block px-4 py-2 text-black hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Dashboard Page
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setIsOpen(false);
                // Add your logout logic here
              }}
              className="w-full text-left px-4 py-2 text-black hover:bg-gray-100"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </li>
  );
};

export default DashboardDropdown;
