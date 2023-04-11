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
