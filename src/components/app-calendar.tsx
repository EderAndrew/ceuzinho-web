"use client"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export const AppCalendar = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <Calendar 
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(12)]"
            captionLayout="dropdown"
        />
    )
}