const Usuario = require("../model/Usuario");

const findByIdUsuarioService = (id) => {
  return Usuario.findById(id);
};

const findAllUsuarioService = () => {
  return Usuario.find();
};

const createUsuarioService = (body) => {
  return Usuario.create(body);
};

const addAdressUsuarioService = (id, endereco) => {
  return Usuario.findOneAndUpdate(
    {
      _id: id,// Localiza o usário pelo id informado
    },
    {
      $push: { // Insere endereço 
        enderecos: endereco,
      },
    },
    {
      rawResult: true,
    }
  );
};

const addSaborFavUsuarioService = (id, sabor) => {
  return Usuario.findByIdAndUpdate(
    {
      _id: id,// Localiza o usário pelo id informado
    },
    {
      $push: { // Insere sabor favorito
        sabores_fav: {
          _id: sabor._id,
        },
      },
    },
    {
      rawResult: true,
    }
  );
};

const updateUsuarioService = (id) => {
  return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteUsuarioService = (id) => {
  return Usuario.findByIdAndRemove(id);
};

const deleteAdressUsuarioService = (id, adressId) => {
  return Usuario.findOneAndUpdate(
    {
      _id: id,// Localiza o usário pelo id informado
    },
    {
      $pull: { // Remove endereco
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

const deleteSaborFavUsuarioService = (id, sabor) => {
  return Usuario.findOneAndUpdate(
    { 
        _id: id // Localiza o usário pelo id informado
    },
    {
      $pull: { // remove sabor favorito
        sabores_fav: {
          _id: sabor._id,
        },
      },
    },
    { rawResult: true }
  );
};

module.exports = {
  findByIdUsuarioService,
  findAllUsuarioService,
  createUsuarioService,
  addAdressUsuarioService,
  addSaborFavUsuarioService,
  updateUsuarioService,
  deleteUsuarioService,
  deleteAdressUsuarioService,
  deleteSaborFavUsuarioService,
};
