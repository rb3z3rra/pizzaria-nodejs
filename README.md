# pizzaria-nodejs

Projeto de sistema backend de uma pizzaria com CRUD das principais atividades de venda online

## Banco de Dados

* MongoDB

## Dependências

* Express
* Mongoose
* JSON Web Token
* DBCrypt
* Swagger
* CORS

## Padrão de Projeto

MVC - Model - View - Controller

## Env

Dados sensíveis ficam armazenadas em variáveis de ambiente utilizando o pacote dotEnv

## Models

### Usuário

Possui login e senha para acessar o sistema de pedido de pizzas;

#### Usuário - Rotas

/usuario/find/{id}
/usuario/findAll
/usuario/create
/usuario/addAdress/{id}
/usuario/addSaborFav/{id}
/usuario/update/{id}
/usuario/delete/{id}
/usuario/deleteAdress/{id}
/usuario/deleteSaborFav/{id}

### Autenticação - Rotas

Ao logar, é gerado um token valido por 24h que ao ser informado via Auth>Bearer, da acesso às demais rotas.

/auth/login

### Métodos

A API utiliza os seguintes métodos de requisição:


| Método  | Descrição                                             |
| ---------- | --------------------------------------------------------- |
| `GET`    | Retorna informações de um ou mais registros.          |
| `POST`   | Utilizado para criar um novo registro.                  |
| `PUT`    | Atualiza dados de um registro ou altera sua situação. |
| `PATCH`  | Aplica modificações parciais a um recurso.            |
| `DELETE` | Remove um registro do sistema.                          |

### Respostas

As respostas ou Server response retornam status baseados nos seguintes códigos:


| Código | Descrição                                                   |
| --------- | --------------------------------------------------------------- |
| `200`   | Requisição executada com sucesso (success).                 |
| `201`   | Informação cadastrada com sucesso (Created).                |
| `400`   | Requisição inválida (Bad Request).                         |
| `401`   | Erro de Autenticação. Problemas com o Token (Unauthorized). |
| `404`   | Registro pesquisado não encontrado (Not found).              |
| `500`   | Erro interno no Servidor (Internal Server Error).             |

### Pizza

CRUD de pizzas

/pizza/create

/pizza/find/{id}

/pizza/findAll

/pizza/update/{id}

/pizza/deletePizza/{id}

### Ingrediente

CRUD de ingredientes das pizzas

/ingrediente/create

/ingrediente/find/{id}

/ingrediente/findAll

/ingrediente/update/{id}

/ingrediente/delete/{id}

### Categoria

CRUD para categorias de pizzas (Borda recheada, Borda Tradicional, Doce, Salgada, etc)

/categoria/create

/categoria/find/{id}

/categoria/findAll

/categoria/update/{id}

/categoria/delete/{id}

### Bebida

CRUD de bebidas

/bebida/create

/bebida/find/{id}

/bebida/findAll

/bebida/update/{id}

/bebida/delete/{id}

### Sacola

CRUD de sacola

/sacola/create

/sacola/find/{id}

/sacola/findAll

/sacola/update/{id}

/sacola/delete/{id}

### Pedido

CRUD de pedido

/pedido/create

/pedido/find/{id}

/pedido/findAll

/pedido/update/{id}

/pedido/delete/{id}
