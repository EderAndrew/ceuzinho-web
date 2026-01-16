import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarHeaderApp } from "@/components/sidebar/sidebar-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PrivateLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    /*const cookieStore = await cookies()
    const accessToken = cookieStore.get("accessToken")

    if(!accessToken) redirect("/")*/

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="flex flex-col min-h-screen w-full">
                <SidebarHeaderApp />
                {children}
            </main>
        </SidebarProvider>
    );
  }