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
                  <BreadcrumbLink href="#">
                    Finance Management System
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Finance Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-6 p-4 pt-0 mt-16">
          {/* Key Metrics Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Revenue Card */}
            <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Revenue (This Month)
              </h3>
              <p className="text-2xl font-bold mt-2">₱15,200,000</p>
              <p className="text-sm text-gray-500 mt-1">+5% from last month</p>
            </div>

            {/* Expenses Card */}
            <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-700">
                Total Expenses (This Month)
              </h3>
              <p className="text-2xl font-bold mt-2">₱7,500,000</p>
              <p className="text-sm text-gray-500 mt-1">-2% from last month</p>
            </div>

            {/* Net Profit Card */}
            <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-700">
                Net Profit (This Month)
              </h3>
              <p className="text-2xl font-bold mt-2">₱4,700,000</p>
              <p className="text-sm text-gray-500 mt-1">+10% from last month</p>
            </div>
          </div>

          {/* Weekly Revenue Update Section */}
          <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Weekly Revenue Update
            </h3>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Enter this week's revenue"
                className="flex-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Update
              </button>
            </div>
          </div>

          {/* Recent Financial Activity Section */}
          <div className="rounded-lg bg-white p-6 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Recent Financial Activity
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <p className="text-gray-700">
                  Weekly revenue updated: ₱11,200,000
                </p>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <p className="text-gray-700">
                  Expense report generated: January 2024
                </p>
                <span className="text-sm text-gray-500">4 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <p className="text-gray-700">New budget approved: ₱5,000,000</p>
                <span className="text-sm text-gray-500">1 day ago</span>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
