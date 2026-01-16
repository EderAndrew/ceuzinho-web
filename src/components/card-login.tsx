"use client"

import { 
    Card, 
    CardContent, 
    CardDescription, 
    CardHeader, 
    CardTitle 
} from "@/components/ui/card"
import { 
    Form, 
    FormControl, 
    FormField, 
    FormItem, 
    FormLabel, 
    FormMessage 
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    email: z.email(),
    password: z.string().min(6, {
        message: "Senha deve ter mínimo de 6 caracteres."
    })
})

export const CardLogin = () => {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
        router.push("/dashboard")
        
    }

    return (
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Entre com seu usuário e senha para acessar o calendário.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Ex: jhon.doe@gmail.com" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                        <FormLabel>Senha</FormLabel>
                        <a href="#">
                            <p className="text-sm">Esqueci minha senha?</p>
                        </a>
                    </div>
                    <FormControl>
                      <Input type="password" placeholder="Ex: 123456" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-4 w-full hover:cursor-pointer bg-blue-600">Entrar</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    )
}