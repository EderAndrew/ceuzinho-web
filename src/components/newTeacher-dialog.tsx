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
    name: z.string().min(2, {
        message: "Campo nome não pode ficar em branco"
    }),
    email: z.string(),
    phone: z.string(),
    sex: z.string(),
})

export const NewTeacherDialog = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            sex: ""
        }
    })
    return (
        <Dialog>
            <Form {...form}>
                <form>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus />
                            <span>Novo Professor</span>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                            <DialogTitle>
                                Cadastrar novo Professor
                            </DialogTitle>
                            <DialogDescription>
                                Preencha os dados do professor
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex flex-col gap-3">
                            <FormField 
                                control={form.control}
                                name="name"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Nome Completo</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="jhon.doe@gmail.com" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <div className="flex gap-2">
                                <FormField 
                                    control={form.control}
                                    name="phone"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Telefone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="(11) 98221-7060" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                control={form.control}
                                name="sex"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Sexo</FormLabel>
                                        <Select >
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Selecione o sexo" />
                                            </SelectTrigger>
                                            <SelectContent {...field}>
                                                <SelectGroup>
                                                    <SelectItem value="professor1">Masculino</SelectItem>
                                                    <SelectItem value="professor2">Feminino</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button variant="outline">Cancelar</Button>
                            <Button type="submit">Salvar</Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Form>
        </Dialog>
    )
}