import { 
    Sidebar, 
    SidebarContent, 
    SidebarFooter,
    SidebarHeader, 
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar"
import { Cloudy } from "lucide-react"
import { SidebarDropdown } from "./sidebar-dropdown"
import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secondary"

export const AppSidebar = () => {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                <SidebarMenuItem>
                    <SidebarMenuButton
                    asChild
                    className="data-[slot=sidebar-menu-button]:p-1.5!"
                    >
                    <a href="#">
                        <Cloudy className="size-5!" />
                        <span className="text-base font-semibold">Ceuzinho</span>
                    </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain />
                <NavSecondary />
            </SidebarContent>
            <SidebarFooter>
                <SidebarContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton asChild>
                                <SidebarDropdown />
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarContent>
            </SidebarFooter>
        </Sidebar>
    )
}