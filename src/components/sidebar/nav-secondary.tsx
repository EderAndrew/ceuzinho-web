import {
    SidebarGroup, 
    SidebarGroupContent,
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem 
} from "@/components/ui/sidebar"
import { Settings } from "lucide-react"

export const NavSecondary = () => {
    return(
        <SidebarGroup >
            <SidebarGroupContent>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <a href="#">
                            <Settings />
                            <span>Configurações</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}