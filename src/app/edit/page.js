import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Home,
  BarChart,
  Bell,
  FileText,
  Clock,
  CheckCircle,
  Users,
  Settings,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {/* Sticky Header */}
        <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 bg-white shadow-sm transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-6 p-6 pt-0 mt-16">
          {/* Quick Access Section */}
          <div className="grid auto-rows-min gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Analytics Card */}
            <div className="relative rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 hover:shadow-lg transition-shadow">
              <BarChart className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">View Analytics</h3>
              <p className="text-gray-600 mb-4">
                View detailed reports on department profit and expenses
              </p>
              <Link
                href="/edit/finance"
                className="mt-4 inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                View Analytics
              </Link>
            </div>

            {/* Notifications Card */}
            <div className="relative rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 hover:shadow-lg transition-shadow">
              <Bell className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                Manage News and Announcements.
              </h3>
              <p className="text-gray-600 mb-4">
                Efficiently Manage News and Announcements with Ease.
              </p>
              <Link
                href="/edit/news"
                className="mt-4 inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Manage Notifications
              </Link>
            </div>

            {/* Staff Updates Card */}
            <div className="relative rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Staff Updates</h3>
              <p className="text-gray-600 mb-4">
                Stay updated on staff schedules, roles, and announcements.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors"
              >
                View Staff Updates
              </Link>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="mt-8 rounded-xl bg-white p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <p className="text-gray-700">
                    New analytics report generated.
                  </p>
                </div>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-gray-700">
                    Staff schedule updated successfully.
                  </p>
                </div>
                <span className="text-sm text-gray-500">4 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-blue-500" />
                  <p className="text-gray-700">
                    System settings optimized for performance.
                  </p>
                </div>
                <span className="text-sm text-gray-500">1 day ago</span>
              </div>
            </div>
          </div>

          {/* Key Metrics Section */}
          <div className="mt-8 rounded-xl bg-white p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Key Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-gray-700">Active Users</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-gray-700">Pending Tasks</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <p className="text-gray-700">System Uptime</p>
                <p className="text-2xl font-bold">99.9%</p>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}