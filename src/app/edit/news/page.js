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
                    Hospital Management System
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Admin Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 mt-16">
          {/* Grid of Cards */}
          <div className="grid auto-rows-min gap-4 md:grid-cols-2 lg:grid-cols-3">
            {/* Announcements Card */}
            <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Announcements</h3>
              <p className="text-gray-600">Post important updates for staff.</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Create Announcement
              </button>
            </div>

            {/* Memo Card */}
            <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Memo</h3>
              <p className="text-gray-600">
                Share internal memos with hospital staff.
              </p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                Create Memo
              </button>
            </div>

            {/* News Card */}
            <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">News</h3>
              <p className="text-gray-600">
                Publish news articles for the hospital website.
              </p>
              <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition-colors">
                Post News
              </button>
            </div>
          </div>

          {/* Recent Activity Section */}
          <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">New patient admission: John Doe</p>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  Appointment scheduled: Dr. Smith
                </p>
                <span className="text-sm text-gray-500">4 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">New memo posted: Staff Meeting</p>
                <span className="text-sm text-gray-500">1 day ago</span>
              </div>
            </div>
          </div>

          {/* Charts or Statistics Section */}
          <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">Hospital Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">Total Patients</p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">Appointments Today</p>
                <p className="text-2xl font-bold">45</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">Revenue This Month</p>
                <p className="text-2xl font-bold">₱11,200,000</p>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
