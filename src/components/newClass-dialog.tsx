"use client"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Calendar, Plus } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectLabel, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Campo título não pode ficar em branco."
    }),
    firstHour: z.string(),
    lastHour: z.string(),
    teacherOne: z.string(),
    teacherTwo: z.string(),
    class: z.string(),
    description: z.string().optional()
})

export const NewClassDialog = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            firstHour: "",
            lastHour: "",
            teacherOne: "",
            teacherTwo: "",
            class: "",
            description: ""
        }
    })
    return (
        <Dialog>
            <Form {...form}>
                <form>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus />
                            <span>Nova Aula</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                            <DialogTitle>
                                <div className="flex items-center gap-2">
                                    <Calendar />Agendar Nova Aula
                                </div>
                            </DialogTitle>
                            <DialogDescription>
                                Preencha os detalhes da aula para adicionar ao calendário
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col gap-3">
                            <FormField 
                                control={form.control}
                                name="title"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Título</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Titulo da Aula" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className="flex gap-4">
                                <FormField 
                                    control={form.control}
                                    name="firstHour"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Horário de Início</FormLabel>
                                            <FormControl>
                                                <Input placeholder="-- : --" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="lastHour"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Horário de Término</FormLabel>
                                            <FormControl>
                                                <Input placeholder="-- : --" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField 
                                control={form.control}
                                name="teacherOne"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Primeiro Professor(a)</FormLabel>
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Selecione um professor" />
                                            </SelectTrigger>
                                            <SelectContent {...field}>
                                                <SelectGroup>
                                                    <SelectLabel>Professores</SelectLabel>
                                                    <SelectItem value="professor1">Professor One</SelectItem>
                                                    <SelectItem value="professor2">Professor Two</SelectItem>
                                                    <SelectItem value="professor3">Professor Three</SelectItem>
                                                    <SelectItem value="professor4">Professor Four</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="teacherTwo"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Segundo Professor(a)</FormLabel>
                                        <Select>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Selecione um professor" />
                                            </SelectTrigger>
                                            <SelectContent {...field}>
                                                <SelectGroup>
                                                    <SelectLabel>Professores</SelectLabel>
                                                    <SelectItem value="professor1">Professor One</SelectItem>
                                                    <SelectItem value="professor2">Professor Two</SelectItem>
                                                    <SelectItem value="professor3">Professor Three</SelectItem>
                                                    <SelectItem value="professor4">Professor Four</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="class"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Sala</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Ex: Jovens" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="description"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Descrição (opcional)</FormLabel>
                                        <FormControl>
                                            <Textarea placeholder="Adicione detalhes sobre a aula..." {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <DialogFooter>
                            <Button variant="outline">Cancelar</Button>
                            <Button type="submit">Salvar Aula</Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Form>
        </Dialog>
    )
}