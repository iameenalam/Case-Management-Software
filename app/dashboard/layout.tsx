"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "@/utils/auth";
import DashboardNavigation from "../components/DashboardNavigation";
import DashboardSidebar from "../components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  return (
    <div className="flex flex-col h-screen">
      <DashboardNavigation />

      <div className="flex flex-1">
        <DashboardSidebar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
