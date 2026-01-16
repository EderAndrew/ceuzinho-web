import { AppCalendar } from "@/components/app-calendar";
import { ClassroomCard } from "@/components/classroom-card";
import { NewClassDialog } from "@/components/newClass-dialog";
import { Card } from "@/components/ui/card";

export default function Dashboard () {
    return (
        <div className="flex-1 w-full h-full flex flex-col p-4 bg-slate-100">
            <div className="flex items-center justify-between px-4">
                <div>
                <h2 className="text-3xl font-bold">Dashboard</h2>
                <span className="text-muted-foreground">Gerencie as aulas da Ceuzinho</span>
                </div>
                <NewClassDialog />
            </div>
            <div className="flex-1 w-full h-full flex p-4">
                <div className="flex-1 flex flex-col items-center gap-8 justify-center w-full h-full p-6">
                    <Card className="p-4">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl">Calendário</h2>
                            <p className="text-sm text-muted-foreground">Selecione uma data para ver as aulas</p>
                            <AppCalendar />
                        </div>
                    </Card>
                    <Card className="w-full ">
                    </Card>
                </div>
                <div className="flex-1">
                    <Card className="w-max-full h-full p-4">
                        <div className="flex flex-col gap-4">
                            <h2 className="">
                                <span className="">Aulas Agendadas</span> 
                                <span className="text-muted-foreground"> - 16 de Janeiro de 2026</span>
                            </h2>
                            <p className="text-muted-foreground">Nenhuma Aula Agendada para essa data</p>
                            <ClassroomCard />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}