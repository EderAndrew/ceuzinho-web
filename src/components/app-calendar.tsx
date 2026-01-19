"use client"
import { Calendar } from "@/components/ui/calendar"
import { ptBR } from "date-fns/locale"
import { useDateStore } from "@/stores/date-stores"

export const AppCalendar = () => {
    const { date, setDate } = useDateStore(state=>state)

    return (
        <Calendar 
            mode="single"
            selected={date}
            onSelect={setDate}
            locale={ptBR}
            required={true}
            className="rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
        />
    )
}