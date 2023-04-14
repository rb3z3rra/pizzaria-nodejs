const ObjectId = require("mongoose").Types.ObjectId;

const validaUsuario = (req, res, next) => {
  //Testa um erro por vez e toma uma decisao por vez
  if (!req.body.nome) {
    res.status(400).send({ message: "O campo 'nome' precisa ser preenchido!" });
  }
  if (!req.body.email) {
    res
      .status(400)
      .send({ message: "O campo 'email' precisa ser preenchido!" });
  }
  if (!req.body.senha) {
    res
      .status(400)
      .send({ message: "O campo 'senha' precisa ser preenchido!" });
  }
  if (!req.body.image) {
    res
      .status(400)
      .send({ message: "O campo 'image' precisa ser preenchido!" });
  }
  if (req.body.admin == undefined) {
    res
      .status(400)
      .send({ message: "O campo 'admin' precisa ser preenchido!" });
  }

  return next();
};

const validaEndereco = (req, res, next) => {
  let erros = [];

  req.body.map((value, key) => {
    if (!value.rua) {
      erros.push(`'${key + 1} - rua'`);
    }
    if (!value.numero) {
      erros.push(`'${key + 1} - numero'`);
    }
    if (!value.complemento) {
      erros.push(`'${key + 1} - complemento'`);
    }
    if (!value.CEP) {
      erros.push(`'${key + 1} - CEP'`);
    }
  });

  // Testando quantos erros temos e tomando decioes em relação a isso
  if (erros.length == 0) {
    return next();
  } else {
    if (erros.length == 1) {
      res
        .status(400)
        .send({ message: `O campo ${erros} precisa ser preenchido!` });
    } else {
      res
        .status(400)
        .send({ message: `Os campos ${erros} precisam ser preenchidos!` });
    }
  }
};

const validaPizza = (req, res, next) => {
  let erros = []; // Array para acumular os erros

  if (!req.body.nome) {
    erros.push("nome");
  }
  if (!req.body.descricao) {
    erros.push("descricao");
  }
  if (!req.body.tamanho) {
    erros.push("tamanho");
  }
  if (!req.body.preco_unitario) {
    erros.push("precoUnitario");
  }
  if (!req.body.imagem) {
    erros.push("imagem");
  }

  // Testando quantos erros temos e tomando decioes em relação a isso
  if (erros.length == 0) {
    return next();
  } else {
    if (erros.length == 1) {
      res
        .status(400)
        .send({ message: `O campo ${erros} precisa ser preenchido!` });
    } else {
      res
        .status(400)
        .send({ message: `Os campos ${erros} precisam ser preenchidos!` });
    }
  }
};

const validaCategoria = (req, res, next) => {
  if (!req.body.nome) {
    res.status(400).send({ message: "O campo 'nome' precisa ser preenchido!" });
  }

  return next();
};

const validaIngrediente = (req, res, next) => {
  if (!req.body.nome) {
    res.status(400).send({ message: "O campo 'nome' precisa ser preenchido!" });
  }

  return next();
};

const validaPedido = (req, res, next) => {
  let erros = []; // Array para acumular os erros

  if (!req.body.precoTotal) {
    erros.push("precoTotal");
  }
  if (!req.body.frete) {
    erros.push("frete");
  }
  if (req.body.concluido == undefined) {
    // Por ser tipo Boolean o teste deve ser se ele é indefinido
    erros.push("concluido");
  }

  // Testando quantos erros temos e tomando decioes em relação a isso
  if (erros.length == 0) {
    return next();
  } else {
    if (erros.length == 1) {
      res
        .status(400)
        .send({ message: `O campo ${erros} precisa ser preenchido!` });
    } else {
      res
        .status(400)
        .send({ message: `Os campos ${erros} precisam ser preenchidos!` });
    }
  }
};
const validaSacola = (req, res, next) => {
  let erros = []; // Array para acumular os erros

  if (!req.body.precoTotal) {
    erros.push("precoTotal");
  }
  if (!req.body.frete) {
    erros.push("frete");
  }

  // Testando quantos erros temos e tomando decioes em relação a isso
  if (erros.length == 0) {
    return next();
  } else {
    if (erros.length == 1) {
      res
        .status(400)
        .send({ message: `O campo ${erros} precisa ser preenchido!` });
    } else {
      res
        .status(400)
        .send({ message: `Os campos ${erros} precisam ser preenchidos!` });
    }
  }
};

const validaIdParams = (req, res, next) => {
  if (ObjectId.isValid(req.params.id)) {
    return next();
  } else {
    res
      .status(400)
      .send({ message: `O ID não corresponde aos padrões necessários` });
  }
};
const valida_IdBody = (req, res, next) => {
  if (ObjectId.isValid(req.body._id)) {
    return next();
  } else {
    res
      .status(400)
      .send({
        message: `O ID informado não corresponde aos padrões necessários`,
      });
  }
};

const validaLogin = (req, res, next) => {
  let erros = [];
  if (!req.body.email) {
    erros.push("email");
  }
  if (!req.body.senha) {
    erros.push("senha");
  }

  // Testando quantos erros temos e tomando decioes em relação a isso
  if (erros.length == 0) {
    return next();
  } else {
    if (erros.length == 1) {
      res
        .status(400)
        .send({ message: `O campo ${erros} precisa ser preenchido!` });
    } else {
      res
        .status(400)
        .send({ message: `Os campos ${erros} precisam ser preenchidos!` });
    }
  }
};

const validaSacolaPedido = (req, res, next) => {
  let erros = [];

  req.body.pizzas.map((value, key) => {
    if (!value._id) {
      erros.push(`'${key + 1} - _id'`);
    }
    if (!ObjectId.isValid(value._id)) {
      erros.push(`'${key + 1} - _id' - tipo inválido`);
    }
    if (!value.quantidade) {
      erros.push(`'${key + 1} - quantidade'`);
    }
  });

  // Testando quantos erros temos e tomando decioes em relação a isso
  if (erros.length == 0) {
    return next();
  } else {
    if (erros.length == 1) {
      res
        .status(400)
        .send({ message: `O campo ${erros} precisa ser preenchido!` });
    } else {
      res
        .status(400)
        .send({ message: `Os campos ${erros} precisam ser preenchidos!` });
    }
  }
};

module.exports = {
  validaUsuario,
  validaEndereco,
  validaPizza,
  validaCategoria,
  validaPedido,
  validaSacola,
  validaIdParams,
  valida_IdBody,
  validaLogin,
  validaSacolaPedido,
  validaIngrediente
};
