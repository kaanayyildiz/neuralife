"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";

const DashboardNavbar = () => {
  return (
    <nav className="p-4 bg-muted rounded-t-xl">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
