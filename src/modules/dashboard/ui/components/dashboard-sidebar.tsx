"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { HomeIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const firstSection = [
  {
    title: "Home",
    icon: <HomeIcon />,
    href: "/",
  },
  {
    title: "Settings",
    icon: <UserIcon />,
    href: "/settings",
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar className="bg-primary">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/neura.svg"
                alt="Neuralife"
                width={40}
                height={40}
                className="brightness-0 invert"
              />
            </Link>
          </SidebarHeader>
          <Separator className="my-4 opacity-10" />
          <SidebarMenu>
            {firstSection.map((item) => (
              <SidebarMenuItem className="" key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "h-10 hover:bg-linear-to-r/oklch border border-transparent hover:border-[#848484]/10 from-sidebar-accent from-5% via-30% via-sidebar/50 to-sidebar/50",
                    pathname === item.href && "bg-linear-to-r/oklch"
                  )}
                  isActive={pathname === item.href}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm font-medium tracking-tight"
                  >
                    {item.icon} {item.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
          
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
