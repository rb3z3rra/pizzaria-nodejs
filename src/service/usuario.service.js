const Usuario = require("../model/Usuario");

const findByIdUsuarioService = (id) => {
  return Usuario.findById(id);
};

const findAllUsuarioService = (limit, offset) => {
  return Usuario.find().limit(limit).skip(offset);
};

const createUsuarioService = (body) => {
  return Usuario.create(body);
};

const addAdressUsuarioService = (id, endereco) => {
  return Usuario.findOneAndUpdate(
    {
      _id: id, // Localiza o usário pelo id informado
    },
    {
      $push: {
        // Insere endereço
        enderecos: endereco,
      },
    },
    {
      rawResult: true,
    }
  );
};

const addPizzaFavUsuarioService = (id, pizza) => {
  return Usuario.findOneAndUpdate(
    {
      _id: id, // Localiza o usário pelo id informado
    },
    {
      $push: {
        // Insere Pizza favorito
        pizzas_fav: {
          _id: pizza._id,
        },
      },
    },
    {
      rawResult: true,
      returnDocument: "after",
    }
  );
};

const updateUsuarioService = (id, body) => {
  return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteUsuarioService = (id) => {
  return Usuario.findByIdAndRemove(id);
};

const deleteAdressUsuarioService = (id, adressId) => {
  return Usuario.findOneAndUpdate(
    {
      _id: id, // Localiza o usário pelo id informado
    },
    {
      $pull: {
        // Remove endereco
        enderecos: {
          _id: adressId,
        },
      },
    },
    {
      rawResult: true,
    }
  );
};

const deletePizzaFavUsuarioService = (id, pizza) => {
  return Usuario.findOneAndUpdate(
    {
      _id: id, // Localiza o usário pelo id informado
    },
    {
      $pull: {
        // remove Pizza favorito
        pizzas_fav: {
          _id: pizza._id,
        },
      },
    },
    { rawResult: true, returnDocument: "after" }
  );
};

module.exports = {
  findByIdUsuarioService,
  findAllUsuarioService,
  createUsuarioService,
  addAdressUsuarioService,
  addPizzaFavUsuarioService,
  updateUsuarioService,
  deleteUsuarioService,
  deleteAdressUsuarioService,
  deletePizzaFavUsuarioService,
};
