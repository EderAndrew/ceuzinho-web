import { CardLogin } from "@/components/card-login";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex-1 flex flex-col justify-between min-h-screen ">
        <div className="flex flex-col h-[500px] gap-6 max-w-2xl mx-auto mt-44">
          <div className="flex flex-row items-center gap-2">
            <p className="text-4xl md:text-6xl">👋</p>
            <h2 className="text-4xl md:text-5xl font-bold ">Olá! Bem vindo ao Calendário da Ceuzinho!</h2>
          </div>
          <p className="text-2xl text-muted-foreground">Faça os agendamentos das aulas de módo prático, rápido e fácil.</p>
          <p className="text-2xl text-muted-foreground">Verifique seus agendamentos pra não perder nenhuma aula.</p>
        </div>
        <span className="text-sm text-muted-foreground">© 2026 H&ADesenvolvimento. Todos os direitos reservados</span>
      </div>
      <Separator orientation="vertical" className="bg-blue-100" />
      <div className="flex-1 flex flex-col min-h-screen items-center justify-center gap-12 bg-blue-100">
        <Image 
          src="/images/logo.png"
          alt="Ceuzinho"
          width={300}
          height={300}
          className="w-96"
        />
        <CardLogin />
      </div>
    </div>
  );
}
