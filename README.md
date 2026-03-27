
## Yasui Clotheshop — Banco de Dados

### Tema

Sistema de gerenciamento para uma loja online de roupas, incluindo produtos novos e usados.

### Objetivo

Desenvolver um banco de dados relacional eficiente e organizado, capaz de gerenciar usuários, produtos, pedidos e pagamentos, garantindo integridade dos dados e suporte às operações do sistema.

### Público-alvo

* Pessoas interessadas em moda a preços variados
* Pequenos vendedores e lojistas independentes
* Usuários que desejam comprar roupas novas ou usadas online

### Funcionalidades

* Cadastro e autenticação de usuários (comprador e vendedor)
* Gerenciamento de produtos (novos e usados)
* Criação e acompanhamento de pedidos
* Controle de itens por pedido
* Registro de pagamentos

### Modelo Relacional

```mermaid
erDiagram

USUARIO ||--o{ PRODUTO : vende
USUARIO ||--o{ PEDIDO : realiza
PEDIDO ||--|{ ITEM_PEDIDO : contem
PRODUTO ||--o{ ITEM_PEDIDO : participa

USUARIO {
  int id PK
  string nome
  string email UNIQUE
  string tipo
}

PRODUTO {
  int id PK
  string nome
  decimal preco
  string condicao
  int usuario_id FK
}

PEDIDO {
  int id PK
  date data
  int usuario_id FK
}

ITEM_PEDIDO {
  int id PK
  int pedido_id FK
  int produto_id FK
  int quantidade
}
```

### Regras de Negócio

* Um usuário pode atuar como comprador ou vendedor
* Um vendedor pode cadastrar produtos novos ou usados
* Cada produto possui uma condição (novo ou usado)
* Um pedido pertence a um único usuário
* Um pedido pode conter vários produtos
* Um produto pode estar presente em vários pedidos

### Tecnologias Utilizadas

* PostgreSQL
* SQL (DDL e DML)
* GitHub para versionamento

### Estrutura do Projeto

```
yasui-clotheshop/
│
├── README.md
└── scripts/
    ├── V1__create_tables.sql
    ├── V1__insert_data.sql
    ├── V1__update_delete.sql
```
