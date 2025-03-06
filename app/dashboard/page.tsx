"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated, logout } from "@/utils/auth";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="max-w-lg mx-auto p-8 mt-12 text-center">
      <h1 className="text-3xl font-bold text-[#031633] mb-3">Welcome to your Dashboard!</h1>
      <p className="text-gray-600 mb-6">Manage your legal practice effortlessly.</p>
      <button
        className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-md font-semibold transition hover:from-red-600 hover:to-red-800"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
