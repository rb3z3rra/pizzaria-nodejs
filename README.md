# pizzaria-nodejs

Projeto de sistema backend de uma pizzaria com CRUD das principais atividades de venda online

## Dependências

* Express
* Mongoose
* JSON Web Token
* DBCrypt
* Swagger
* CORS

## Padrão de Projeto

MVC - Model - View - Controller

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

### Pizza

/pizza/create

/pizza/find/{id}

/pizza/findAll

/pizza/update/{id}

/pizza/deletePizza/{id}

### Ingrediente

/ingrediente/create

/ingrediente/find/{id}

/ingrediente/findAll

/ingrediente/update/{id}

/ingrediente/delete/{id}

### Categoria

/categoria/create

/categoria/find/{id}

/categoria/findAll

/categoria/update/{id}

/categoria/delete/{id}