# Explicação detalhada : 
https://drive.google.com/file/d/1lk9qMCsQK7-vCUN8oULMOQKvyBsmDyNK/view?usp=drive_link

# 🎬 Catálogo de Filmes Favoritos

Aplicação web para gerenciar um catálogo pessoal de filmes favoritos, desenvolvida com React, TypeScript e JSON Server.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como trabalho acadêmico da disciplina de Frameworks Front-End, com o objetivo de implementar um sistema CRUD completo (Create, Read, Update, Delete) utilizando tecnologias modernas de desenvolvimento web.

## ✨ Funcionalidades

- ✅ Listar todos os filmes cadastrados
- ✅ Adicionar novos filmes ao catálogo
- ✅ Editar informações de filmes existentes
- ✅ Excluir filmes do catálogo
- ✅ Interface responsiva e intuitiva
- ✅ Persistência de dados com JSON Server

## 🚀 Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server
- **JSON Server** - API REST fake para desenvolvimento
- **CSS3** - Estilização pura sem frameworks

## 📁 Estrutura do Projeto

```
catalogo-filmes/
├── src/
│   ├── components/
│   │   ├── Card.tsx
│   │   ├── Card.css
│   │   ├── Form.tsx
│   │   ├── Form.css
│   │   ├── Header.tsx
│   │   └── Header.css
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── Home.css
│   ├── services/
│   │   └── api.ts
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
├── db.json
├── package.json
└── README.md
```

## 🔧 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/vituzer4/catalogo-filmes.git
cd catalogo-filmes
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o JSON Server** (em um terminal)
```bash
npm run server
```
O servidor estará rodando em `http://localhost:3001`

4. **Inicie a aplicação** (em outro terminal)
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:5173`

## 📝 Como Usar

1. Acesse a aplicação no navegador
2. Clique em "Adicionar Filme" para cadastrar um novo filme
3. Preencha o formulário com as informações do filme:
   - Título
   - Diretor
   - Ano de lançamento
   - Gênero
   - Nota (0-10)
   - URL do poster
4. Use os botões "Editar" para modificar um filme existente
5. Use os botões "Excluir" para remover um filme do catálogo

## 🎨 Interface

A aplicação possui:
- **Header**: Cabeçalho com título e descrição do projeto
- **Formulário**: Para adicionar/editar filmes com validação
- **Grid de Cards**: Exibição dos filmes em formato de cards responsivos
- **Botões de Ação**: Editar e excluir em cada card
- **Feedback Visual**: Loading states e mensagens de erro

## 🔗 API Endpoints

O JSON Server disponibiliza os seguintes endpoints:

- `GET /filmes` - Lista todos os filmes
- `GET /filmes/:id` - Busca um filme específico
- `POST /filmes` - Adiciona um novo filme
- `PUT /filmes/:id` - Atualiza um filme existente
- `DELETE /filmes/:id` - Remove um filme

## 📊 Estrutura do Banco de Dados (db.json)

```json
{
  "filmes": [
    {
      "id": 1,
      "titulo": "Nome do Filme",
      "diretor": "Nome do Diretor",
      "ano": 2024,
      "genero": "Gênero",
      "nota": 8.5,
      "poster": "https://url-do-poster.jpg"
    }
  ]
}
```

## 🎯 Funcionalidades Implementadas

### ✅ Create (Criar)
- Formulário completo para adicionar novos filmes
- Validação de campos obrigatórios
- Feedback visual ao adicionar

### ✅ Read (Ler)
- Listagem de todos os filmes em cards
- Interface responsiva
- Loading state durante carregamento

### ✅ Update (Atualizar)
- Edição de filmes existentes
- Preenchimento automático do formulário
- Confirmação visual da atualização

### ✅ Delete (Deletar)
- Exclusão de filmes com confirmação
- Feedback visual da exclusão
- Atualização automática da lista

## 🎓 Informações Acadêmicas

- **Disciplina**: Frameworks Front-End
- **Professor**: Renato Freire
- **Instituição**: Uninassau Natal/RN
- **Período**: 2025.2

## 👨‍💻 Autor

**Victor Ricardo**
- GitHub:(https://github.com/vituzer4)
- Email: vr.prf.estudo@gmail.com

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso de Frameworks Front-End.
