import { getMe } from "@/lib/auth";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarHeaderApp } from "@/components/sidebar/sidebar-header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";
import { AuthHydrator } from "@/components/auth-hydrator";

export default async function PrivateLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const me = await getMe()
    if(!me) redirect("/")

    return (
      <>
        <AuthHydrator user={me.user} />
          <SidebarProvider>
              <AppSidebar />
              <main className="flex flex-col min-h-screen w-full">
                  <SidebarHeaderApp />
                  {children}
              </main>
          </SidebarProvider>
      </> 
    );
  }