import { Clock, MapPin, Trash } from "lucide-react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export const ClassroomCard = () => {
    return (
        <Card className="px-4 flex flex-row justify-between border-l-4 border-l-red-300">
            <div className="flex flex-col gap-1">
                <p className="text-2xl">Titulo da Aula</p>
                <div className="flex gap-2 items-center">
                    <Clock className="size-5 text-muted-foreground"/>
                    <span className="text-sm text-muted-foreground">08:00 - 09:30</span>
                </div>
                <div className="flex gap-2 items-center mt-2">
                    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <Avatar>
                            <AvatarImage
                                src="https://github.com/maxleiter.png"
                                alt="@maxleiter"
                            />
                            <AvatarFallback>LR</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground">Professor 1</span>
                        <span className="text-sm text-muted-foreground">Professor 2</span>
                    </div>
                </div>
                <div className="flex gap-2 mt-4">
                    <MapPin className="size-5 text-muted-foreground"/>
                    <span className="text-sm text-muted-foreground">Sala de Aula</span>
                </div>
            </div>
            <Button variant="ghost">
                <Trash className="size-5 text-red-600"/>
            </Button>
            
        </Card>
    )
}