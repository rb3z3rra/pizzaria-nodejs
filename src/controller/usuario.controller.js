const usuarioService = require("../service/usuario.service");

const findByIdUsuarioController = async (req, res) => {
  try {
    const user = await usuarioService.findByIdUsuarioService(req.params.id);
    if (!user) {
      return res
        .status(400)
        .send({ message: "Usuário não encontrado, tente novamente!" });
    }

    return res.status(200).send(user);
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const findAllUsuarioController = async (req, res) => {
  try {
    return res
      .status(200)
      .send(
        await usuarioService.findAllUsuarioService(
          req.query.limit,
          req.query.offset
        )
      );
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  } 
};

const createUsuarioController = async (req, res) => {
  try {
    return res
      .status(201)
      .send(await usuarioService.createUsuarioService(req.body));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const addAdressUsuarioController = async (req, res) => {
  try {
    const endereco = await usuarioService.addAdressUsuarioService(
      req.params.id,
      req.body
    );

    if (endereco.value == null) {
      return res
        .status(400)
        .send({ message: "Algo deu errado, tente novamente!" });
    } else {
      return res
        .status(201)
        .send({ message: "Endereço adicionado com sucesso!" });
    }
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const addPizzaFavUsuarioController = async (req, res) => {
  try {
    res
      .status(201)
      .send(
        await usuarioService.addPizzaFavUsuarioService(req.params.id, req.body)
      );
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const updateUsuarioController = async (req, res) => {
  try {
    return res
      .status(202)
      .send(await usuarioService.updateUsuarioService(req.params.id, req.body));
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const deleteUsuarioController = async (req, res) => {
  try {
    const deletedUser = await usuarioService.deleteUsuarioService(req.params.id);

    if (deletedUser == null) {
      // se a contagem de tudo que foi deletado é maior que zero então foi deletado
      return res
        .status(404)
        .send({ message: "Usuário não encontrado, tente novamente!" });
    } else {
      //se a contagem não for maior que zero, então não foi deletado
      return res.status(200).send({ message: "Sucesso, usuário deletado!" });
    }
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const deleteAdressUsuarioController = async (req, res) => {
  try {
    const endereco = await usuarioService.deleteAdressUsuarioService(
      req.body.id,
      req.body.adressId
    );

    let found = false;

    endereco.value.enderecos.map((valor, chave) => {
      if (valor._id == req.body.adressId) {
        found = true;
      }
    });

    if (true) {
      return res
        .status(200)
        .send({ message: "Endereço removido com sucesso!" });
    } else {
      return res.status(400).send({
        message:
          "Algo deu errado no endereco, não foi removido, tente novamente!",
      });
    }
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const deletePizzaFavUsuarioController = async (req, res) => {
  try {
    res
      .status(201)
      .send(
        await usuarioService.deletePizzaFavUsuarioService(
          req.params.id,
          req.body
        )
      );
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

module.exports = {
  findByIdUsuarioController,
  findAllUsuarioController,
  createUsuarioController,
  addAdressUsuarioController,
  addPizzaFavUsuarioController,
  updateUsuarioController,
  deleteUsuarioController,
  deleteAdressUsuarioController,
  deletePizzaFavUsuarioController,
};
