"use client";
import React, { useState } from "react";
import {
  LayoutDashboard,
  Calendar,
  List,
  Folder,
  Users,
  Activity,
  CreditCard,
  Landmark,
  FileText,
  MessageSquare,
  BarChart,
  Plug,
  Settings,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Calendar", icon: Calendar, href: "/dashboard/calendar" },
  { label: "Tasks", icon: List, href: "/dashboard/tasks" },
  { label: "Cases", icon: Folder, href: "/dashboard/cases" },
  { label: "Clients", icon: Users, href: "/dashboard/clients" },
  { label: "Activities", icon: Activity, href: "/dashboard/activities" },
  { label: "Billing", icon: CreditCard, href: "/dashboard/billing" },
  { label: "Accounts", icon: Landmark, href: "/dashboard/accounts" },
  { label: "Documents", icon: FileText, href: "/dashboard/documents" },
  {
    label: "Communications",
    icon: MessageSquare,
    href: "/dashboard/communications",
  },
  { label: "Reports", icon: BarChart, href: "/dashboard/reports" },
  {
    label: "App Integrations",
    icon: Plug,
    href: "/dashboard/app-integrations",
  },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`bg-blue-900 text-white flex flex-col transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-52"
      } h-screen shadow-lg`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-4 hover:bg-blue-800 transition duration-200 flex items-center justify-start" // Align items to the start
        style={{ paddingLeft: isCollapsed ? "0.75rem" : "1.5rem" }} // Adjust padding based on collapse state
      >
        {isCollapsed ? (
          <ChevronRight size={20} />
        ) : (
          <ChevronLeft size={20} />
        )}
      </button>

      <nav className="mt-2 flex-1">
        {sidebarLinks.map(({ label, icon: Icon, href }) => (
          <SidebarLink
            key={href}
            label={label}
            icon={<Icon size={20} />}
            href={href}
            isCollapsed={isCollapsed}
            isActive={pathname === href}
          />
        ))}
      </nav>

      {/* Remove the bottom section as per the image */}
    </aside>
  );
};

const SidebarLink = ({
  label,
  icon,
  href,
  isCollapsed,
  isActive,
}: {
  label: string;
  icon: React.ReactNode;
  href: string;
  isCollapsed: boolean;
  isActive: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-3 p-3 transition duration-200 cursor-pointer
      ${isCollapsed ? "justify-center" : ""}
      ${isActive ? "bg-blue-700 text-white" : "hover:bg-blue-800"}
    `}
    >
      <span
        className={`transition-colors ${
          isActive ? "text-yellow-300" : "text-white"
        }`}
      >
        {icon}
      </span>
      {!isCollapsed && <span className="text-sm">{label}</span>}
    </Link>
  );
};

export default DashboardSidebar;
