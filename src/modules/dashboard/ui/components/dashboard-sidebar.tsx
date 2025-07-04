"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { BotIcon, VideoIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DashboardUserButton from "./dashboard-user-button";

const firstSection = [
  {
    title: "Meetings",
    icon: <VideoIcon />,
    href: "/meetings",
  },
  {
    title: "Agents",
    icon: <BotIcon />,
    href: "/agents",
  },
];

const secondSection = [
  {
    title: "Upgrade",
    icon: <StarIcon />,
    href: "/upgrade",
  },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  return (
    <Sidebar>
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
                    "h-10 hover:bg-linear-to-r/oklch border border-transparent",
                    pathname === item.href && "bg-linear-to-r/oklch"
                  )}
                  isActive={pathname === item.href}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm font-normal tracking-tight text-primary-foreground"
                  >
                    {item.icon} {item.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <Separator className="opacity-10" />
        <SidebarGroup>
          <SidebarMenu>
            {secondSection.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "h-10 hover:bg-linear-to-r/oklch border border-transparent bg-primary-foreground/10",
                    pathname === item.href && "bg-linear-to-r/oklch"
                  )}
                  isActive={pathname === item.href}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm font-normal tracking-tight text-primary-foreground"
                  >
                    {item.icon} {item.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-2">
        <Separator className="opacity-10" />
        <div className="flex flex-col gap-2">
          <DashboardUserButton />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
