import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, SquarePen, Trash } from "lucide-react"

export const TeacherCard = () => {
    return (
        <Card className="w-96">
            <CardHeader className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="w-14 h-14 bg-slate-200 rounded-full"></div>
                    <div>
                        <CardTitle>Ana Silva</CardTitle>
                        <CardDescription>Professor(a)</CardDescription>
                    </div>
                </div>
                <div className="flex gap-2">
                    <SquarePen className="size-5"/>
                    <Trash className="size-5 text-red-600"/>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="size-4"/>
                    <span className="text-sm leading-none font-medium">ana.silva@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="size-4"/>
                    <span className="text-sm leading-none font-medium">(11) 98765-3030</span>
                </div>
            </CardContent>
        </Card>
    )
}