import { 
    SidebarGroup, 
    SidebarGroupContent, 
    SidebarMenu, 
    SidebarMenuButton, 
    SidebarMenuItem
} from "@/components/ui/sidebar"
import { 
    Home,
    UsersRound,
} from "lucide-react"

const items = [
    {
        title: "Home",
        url: "/dashboard",
        icon: Home
    },
    {
        title: "Professores",
        url: "/teacher",
        icon: UsersRound
    }
]

export const NavMain = () => {
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map(item => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <a href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}