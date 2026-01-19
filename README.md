# 📅 Calendário da Ceuzinho

Sistema web para gerenciamento e agendamento de aulas de forma prática, rápida e fácil. Desenvolvido para facilitar o controle de aulas, professores e agendamentos.

## 🎯 Sobre o Projeto

O **Calendário da Ceuzinho** é uma aplicação web moderna que permite gerenciar aulas, professores e visualizar agendamentos em um calendário interativo. O sistema oferece uma interface intuitiva e responsiva para facilitar o dia a dia da gestão educacional.

## ✨ Funcionalidades

### 🔐 Autenticação
- Sistema de login com validação de credenciais
- Interface de autenticação moderna e responsiva

### 📊 Dashboard
- Visualização de calendário interativo
- Seleção de datas para visualizar aulas agendadas
- Interface centralizada para gerenciamento

### 👨‍🏫 Gerenciamento de Professores
- Cadastro de novos professores
- Listagem de professores cadastrados
- Informações: nome, email, telefone e sexo

### 📚 Agendamento de Aulas
- Criação de novos agendamentos
- Definição de título, horários de início e término
- Atribuição de até dois professores por aula
- Definição de sala/turma
- Adição de descrição opcional
- Visualização de aulas agendadas por data

### 📅 Calendário Interativo
- Calendário em português brasileiro
- Seleção de datas para filtrar aulas
- Visualização de aulas agendadas para a data selecionada

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 16.1.2** - Framework React com App Router
- **React 19.2.3** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e customizáveis
  - Dialog, Select, Dropdown Menu, Avatar, Popover, Tooltip, etc.

### Formulários e Validação
- **React Hook Form 7.71.1** - Gerenciamento de formulários
- **Zod 4.3.5** - Validação de schemas TypeScript-first
- **@hookform/resolvers** - Integração React Hook Form + Zod

### Estado e Dados
- **Zustand 5.0.10** - Gerenciamento de estado global
- **Axios 1.13.2** - Cliente HTTP para requisições

### Utilitários
- **date-fns 4.1.0** - Manipulação e formatação de datas
- **react-day-picker 9.13.0** - Componente de calendário
- **lucide-react** - Ícones modernos
- **clsx** - Utilitário para construção de classes CSS
- **tailwind-merge** - Merge de classes Tailwind

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **pnpm** (gerenciador de pacotes) ou npm/yarn

### Linting

Execute o linter para verificar o código:

```bash
pnpm lint
# ou
npm run lint
```

## 📁 Estrutura do Projeto

```
ceuzinho-web/
├── src/
│   ├── app/                    # Rotas e páginas (App Router)
│   │   ├── (dashboard)/        # Grupo de rotas do dashboard
│   │   │   ├── dashboard/      # Página principal
│   │   │   └── teacher/        # Página de professores
│   │   ├── layout.tsx          # Layout raiz
│   │   └── page.tsx            # Página de login
│   ├── components/             # Componentes React
│   │   ├── ui/                 # Componentes de UI base
│   │   ├── sidebar/            # Componentes da barra lateral
│   │   ├── app-calendar.tsx    # Calendário principal
│   │   ├── card-login.tsx      # Card de login
│   │   ├── classroom-card.tsx  # Card de aula
│   │   ├── newClass-dialog.tsx # Dialog de nova aula
│   │   ├── newTeacher-dialog.tsx # Dialog de novo professor
│   │   └── schedules-classes.tsx # Lista de aulas agendadas
│   ├── api/                    # Serviços de API
│   │   └── user.ts             # API de usuários
│   ├── hooks/                  # Custom hooks
│   │   ├── use-mobile.ts       # Hook para detectar mobile
│   │   └── useDataptbr.ts      # Hook para formatação de data
│   ├── lib/                    # Utilitários e configurações
│   │   ├── auth.ts             # Configurações de autenticação
│   │   └── utils.ts            # Funções utilitárias
│   ├── stores/                 # Stores Zustand
│   │   ├── auth-stores.ts      # Store de autenticação
│   │   └── date-stores.ts      # Store de data selecionada
│   └── types/                  # Tipos TypeScript
│       ├── signin.ts           # Tipos de login
│       └── user.ts             # Tipos de usuário
├── public/                     # Arquivos estáticos
│   └── images/                 # Imagens
├── package.json                # Dependências e scripts
├── tsconfig.json               # Configuração TypeScript
├── next.config.ts              # Configuração Next.js
└── tailwind.config              # Configuração Tailwind
```

## 🎨 Características da Interface

- **Design Moderno**: Interface limpa e intuitiva
- **Responsivo**: Adaptável a diferentes tamanhos de tela
- **Tema Escuro/Claro**: Suporte a modo escuro
- **Acessibilidade**: Componentes baseados em Radix UI
- **Localização**: Interface em português brasileiro

## 📝 Scripts Disponíveis

- `dev` - Inicia o servidor de desenvolvimento
- `build` - Cria uma build de produção
- `start` - Inicia o servidor de produção
- `lint` - Executa o linter ESLint

## 🔒 Segurança

- Validação de formulários com Zod
- Autenticação de usuários
- Validação de dados no frontend e backend

## 📄 Licença

Este projeto é privado e de propriedade de **H&ADesenvolvimento**.

## 👥 Desenvolvido por

**H&ADesenvolvimento**

© 2026 H&ADesenvolvimento. Todos os direitos reservados.

---

Para mais informações sobre Next.js, consulte a [documentação oficial](https://nextjs.org/docs).
