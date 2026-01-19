import { NewTeacherDialog } from "@/components/newTeacher-dialog";
import { TeacherCard } from "@/components/teacher-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Plus, SquarePen, Trash } from "lucide-react";

export default function Teacher(){
    return (
        <main className="w-full h-full flex flex-col p-4 bg-slate-100">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold">Professores</h2>
                    <span className="">Gerencie os professores cadastrados</span>
                </div>
                <NewTeacherDialog />
            </div>
            <div className="mt-10">
                <TeacherCard />
            </div>
        </main>
    )
}