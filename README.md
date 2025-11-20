# Future Work Network

Aplicação web desenvolvida para a Global Solution – Front-End Design – Web Development (2º semestre/2025).

O projeto simula uma rede profissional voltada ao futuro do trabalho, conectando profissionais de diferentes áreas,
exibindo seus perfis, competências técnicas e comportamentais, além de permitir busca, filtros e interação básica.

## 1. Resumo do projeto

- Single Page Application (SPA) construída com **React + Vite + Tailwind CSS**.
- Listagem de **60 perfis fictícios** carregados a partir de um **JSON local**.
- Cada perfil é exibido em um **card responsivo**, com:
  - Nome, foto, cargo, localização e principais skills.
- Ao clicar em um card, é aberto um **modal** com:
  - Informações pessoais e resumo profissional.
  - Habilidades técnicas (hard skills).
  - Soft skills e hobbies.
  - Experiências profissionais.
  - Formação acadêmica.
  - Projetos com links externos.
  - Certificações e idiomas.
- Sistema de **busca por nome**.
- **Filtros por área, cidade e tecnologia**.
- **Dark Mode** com persistência de preferência no `localStorage`.
- Layout **moderno e responsivo**, utilizando utilitários do Tailwind CSS.

Todas as ações de "Recomendar profissional" e "Enviar mensagem" são **simulações**, sem envio real de dados,
apenas para fins acadêmicos e de usabilidade.

## 2. Instalação do projeto (passo a passo)

Pré-requisitos:
- Node.js (versão LTS recomendada)
- npm ou yarn

Passos:

```bash
# 1. Clonar o repositório
git clone https://github.com/SEU-USUARIO/future-work-network.git
cd future-work-network

# 2. Instalar dependências
npm install

# 3. Rodar em ambiente de desenvolvimento
npm run dev

# O Vite exibirá no terminal a URL local, normalmente:
# http://localhost:5173
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## 3. Usuários e senhas

Esta aplicação **não possui autenticação** nem área logada.
Não há usuários ou senhas definidos.

## 4. Link do deploy

Sugestão de ambiente de deploy: **Vercel** ou **Netlify**.

- Link do deploy (preencher após publicar):
  - `https://SEU-DEPLOY-AQUI.vercel.app`

> Para publicar na Vercel:
> 1. Criar conta em https://vercel.com
> 2. Importar o repositório a partir do GitHub.
> 3. Conferir se o comando de build é `npm run build` e a pasta de saída é `dist`.
> 4. Confirmar o deploy e copiar a URL final.

## 5. Link do repositório

- Repositório GitHub (preencher com o link real):
  - `https://github.com/SEU-USUARIO/future-work-network`

> Recomenda-se manter **no mínimo 10 commits**, registrando:
> - Criação do projeto base com Vite.
> - Configuração do Tailwind CSS.
> - Criação da estrutura de componentes.
> - Criação e integração do JSON com 60 perfis.
> - Implementação de busca, filtros, modal e dark mode.
> - Ajustes de responsividade e refinamentos de design.

## 6. Nomes e RMs dos integrantes do grupo

Preencha abaixo com os dados do grupo:

- Nome 1 – RM XXXXX
- Nome 2 – RM XXXXX
- Nome 3 – RM XXXXX
- Nome 4 – RM XXXXX

---

Qualquer ajuste específico da disciplina (layout, texto dos perfis, cores, etc.) pode ser feito diretamente
nos componentes React e no arquivo `src/data/profiles.json`, mantendo a estrutura de dados combinada no enunciado.
