# 🧪 Testes Automatizados - Pacto Soluções  

Repositório com os testes automatizados em **Cypress** e **Playwright** para a atividade solicitada.  
O objetivo é validar a busca no **Yahoo** pelo termo **"Pacto Soluções"**.  

---

## 📂 Estrutura do Projeto
```
pacto-teste-automacao/
├── cypress/                 # Testes com Cypress
│   ├── e2e/
│   │   └── pacto.cy.js
│   └── cypress.config.js
└── playwright/              # Testes com Playwright
    ├── tests/
    │   └── pacto.spec.js
    └── playwright.config.js
```

---

## 🚀 Tecnologias Utilizadas
- Node.js (>= 18)
- Cypress (>= 13)
- Playwright (>= 1.48)

---

## ⚙️ Instalação
Clone o repositório e entre na pasta do projeto:
```bash
git clone https://github.com/Joiceff/Pacto-Solu-es.git
cd pacto-teste-automacao
```

Instale as dependências:
```bash
npm install
```

---

## ▶️ Executando os Testes

### 🔹 Cypress
Abrir o runner interativo:
```bash
npm run cypress:open
```

Rodar em modo headless:
```bash
npm run cypress:run
```

### 🔹 Playwright
Rodar todos os testes:
```bash
npm run playwright:test
```

Executar com UI (modo interativo):
```bash
npm run playwright:ui
```

---

## ✅ O que é validado
1. Acessa a página inicial do Yahoo.
2. Digita o termo **"Pacto Soluções"** no campo de busca.
3. Valida:
   - Se a URL contém `/search`.
   - Se existe o texto **"Pacto Soluções"** nos resultados.

---

## 📧 Entrega
Após rodar localmente:  
1. Subir este código no GitHub.  
2. Enviar o link do repositório e o arquivo compactado `.zip` para:  
   - rh@pactosolucoes.com.br  
   - tiagosantana@pactosolucoes.com.br  

---

👨‍💻 Desenvolvido para teste técnico - Pacto Soluções.
