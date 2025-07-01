import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/modules/dashboard/ui/components/dashboard-sidebar";
import DashboardNavbar from "@/modules/dashboard/ui/components/dashboard-navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-primary flex">
      <SidebarProvider>
        <DashboardSidebar />
        <div className="flex-1 flex justify-center items-start p-2 md:p-2">
          <main className="w-full bg-muted rounded-2xl shadow-lg h-full flex flex-col">
            <DashboardNavbar />
            <div className="flex-1 p-6">{children}</div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
