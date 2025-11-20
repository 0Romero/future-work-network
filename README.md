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
git clone https://github.com/0Romero/future-work-network.git
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




## 5. Link do repositório

- Repositório GitHub (preencher com o link real):
  - `https://github.com/0Romero/future-work-network`


## 6. Nomes e RMs dos integrantes do grupo



- Nome Guilherme Romero  – RM 564431
- Nome Felipe Bernardes – RM 564360
- 

---

