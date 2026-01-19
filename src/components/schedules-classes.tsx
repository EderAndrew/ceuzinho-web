"use client"
import { Card } from "@/components/ui/card"
import { ClassroomCard } from "@/components/classroom-card"
import { useDateStore } from "@/stores/date-stores"
import { useDataPTBR } from "@/hooks/useDataptbr"

export const ScheduleClasses = () => {
    const {date} = useDateStore(state=>state)
    const ptbrDate = useDataPTBR(date.toDateString())

    return (
        <div className="flex-1">
            <Card className="w-max-full h-full p-4">
                <div className="flex flex-col gap-4">
                    <h2 className="">
                        <span className="">Aulas Agendadas</span> 
                        <span className="text-muted-foreground"> - {ptbrDate}</span>
                    </h2>
                    <p className="text-muted-foreground">Nenhuma Aula Agendada para essa data</p>
                    <ClassroomCard />
                </div>
            </Card>
        </div>
    )
}