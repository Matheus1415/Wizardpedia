#  Hogwarts Catalog

Bem-vindo ao **Hogwarts Catalog**, um projeto mágico que reúne informações sobre bruxos, casas e personagens do universo de Harry Potter.  

---
## 🖼️ Imagens do Site

<div align="center" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">

  <img src="https://github.com/user-attachments/assets/a594aa06-abb6-451d-a6b0-94d8bc5c69ef" alt="Captura de tela 1" width="48%" />
  <img src="https://github.com/user-attachments/assets/73797fea-0319-4881-a560-c65d2662c63e" alt="Captura de tela 2" width="48%" />
  <img src="https://github.com/user-attachments/assets/45050613-b93a-41eb-aa8c-6c27e0b50efe" alt="Captura de tela 3" width="48%" />
  <img src="https://github.com/user-attachments/assets/6971a063-e4cb-42b5-8980-01f76221152e" alt="Captura de tela 4" width="48%" />
  <img src="https://github.com/user-attachments/assets/0cf3fab7-c439-4f98-a85b-2f373c967e12" alt="Captura de tela 5" width="48%" />
  <img src="https://github.com/user-attachments/assets/b98619a7-38ee-45f9-935a-440d6e7ea5d8" alt="Captura de tela 6" width="48%" />

</div>

---

## 📁 Estrutura do Projeto
```
  hogwarts-catalog/
├── src/
│   ├── assets/
│   │   └── image/
│   │       └── background-home.jpg              # Imagem de fundo usada na página inicial
│   │
│   ├── components/
│   │   └── CardOverlay/
│   │       └── index.tsx                        # Componente reutilizável de sobreposição de cards
│   │
│   ├── data/
│   │   └── langs/
│   │       └── HouseNamePT.ts                   # Mapeamento dos nomes das casas traduzidos para PT-BR
│   │
│   ├── hook/
│   │   └── usePageTitle/
│   │       └── index.tsx                        # Hook customizado para alterar o título da página dinamicamente
│   │
│   ├── http/
│   │   ├── requests/
│   │   │   └── houses/
│   │   │       └── useHouses.ts                 # Hook responsável por buscar dados das casas de Hogwarts
│   │   │
│   │   ├── responses/
│   │   │   └── default.ts                       # Tipagem padrão de respostas da API
│   │   │
│   │   └── types/
│   │       └── ApiResponse.ts                   # Interface genérica para modelar respostas da API
│   │
│   ├── layouts/
│   │   ├── DefaultLayout/
│   │   │   └── index.tsx                        # Layout principal compartilhado entre páginas
│   │   │
│   │   └── components/
│   │       └── CatalogPageLayout/
│   │           └── index.tsx                    # Layout padrão usado nas páginas de catálogo (Students, Staff, etc.)
│   │
│   ├── libs/
│   │   └── axios/
│   │       └── api.ts                           # Configuração da instância Axios para requisições HTTP
│   │
│   ├── pages/
│   │   └── home/
│   │       ├── index.tsx                        # Página inicial do projeto
│   │       └── Home.module.css                  # Estilos específicos da página Home
│   │
│   ├── Routes/
│   │   └── Router.tsx                           # Definição das rotas principais do sistema (React Router)
│   │
│   ├── styles/
│   │   ├── colors/
│   │   │   └── colors.ts                        # Definições de cores globais (generalColors e houseColors)
│   │   │
│   │   └── geral.css                            # Estilos globais aplicados em toda a aplicação
│   │
│   └── types/
│       └── Character.ts                         # Tipagem do modelo de personagens (alunos, professores, etc.)
│
├── .env.example                                 # Exemplo de variáveis de ambiente (ex: URL da API)
├── docker-compose.yml                           # Configuração do container Docker para rodar o frontend
├── Dockerfile                                   # Instruções para build da imagem Docker
├── vite.config.ts                               # Configuração do Vite para build e otimização
├── index.html                                   # Template HTML principal (inclui meta tags de SEO)
├── package.json                                 # Dependências e scripts do projeto
└── README.md                                    # Documentação do projeto

```

---

## 🪄 Funcionalidades

- Listagem e detalhes de **bruxos, casas e professores**
- Sistema de **staff** e personagens com cards interativos
- Design imersivo com **imagens e animações mágicas**
- Títulos e meta tags dinâmicos para **melhor ranqueamento no Google**
- Suporte a integração com **API externa configurável via `.env`**

---

## ⚙️ Configuração do Ambiente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/hogwarts-catalog.git
   cd hogwarts-catalog
   ```
   
2. **Instale as dependências**
   ```bash
   npm install
   ```
      
3. **Rode o projeto**
   ```bash
   npm run dev
   ```

## Rodando com Docker

1. **Construir a imagem**
   ```bash
   docker compose up --build
   ```
   
2. **Acessar no navegador**
   ```bash
   http://localhost:5173
   ```
