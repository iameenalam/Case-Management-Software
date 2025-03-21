"use client";

import React, { useState } from "react";
import { Bell, User, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { logout } from "@/utils/auth";

const DashboardNavigation = () => {
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [createDropdownOpen, setCreateDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="bg-blue-700 text-white p-4 flex items-center justify-between w-full">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-2 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-md text-black bg-white focus:outline-none"
        />
      </div>

      <div className="flex items-center relative">
        <div className="mr-4">00:00:00</div>
        <div className="relative">
          <button
            onClick={() => setCreateDropdownOpen(!createDropdownOpen)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mr-2 cursor-pointer"
          >
            Create new +
          </button>
          {createDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md overflow-hidden">
              <a
                href="/dashboard/clients/create"
                className="flex items-center w-full px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                Client
              </a>
              <a
                href="/dashboard/cases/create"
                className="flex items-center w-full px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                Case
              </a>
            </div>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="cursor-pointer flex items-center"
          >
            <User className="w-6 h-6" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-md overflow-hidden">
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                <LogOut className="w-5 h-5 mr-2" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardNavigation;
