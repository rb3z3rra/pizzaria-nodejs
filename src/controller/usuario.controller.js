const findByIdUsuarioController = async (req, res) => {
  try {
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const findAllUsuarioController = async (req, res) => {
  try {
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const createUsuarioController = async (req, res) => {
  try {
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const addAdressUsuarioController = async (req, res) => {
  try {
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const addSaborFavUsuarioController = async (req, res) => {
  try {
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const updateUsuarioController = async (req, res) => {
  try {
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const deleteUsuarioController = async (req, res) => {
  try {
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const deleteAdressUsuarioController = async (req, res) => {
  try {
  } catch (error) {
    console.log(`erro: ${error.message}`);
    return res
      .status(500)
      .send({ message: "Erro inesperado, tente novamente!" });
  }
};

const deleteSaborFavUsuarioController = async (req, res) => {
  try {
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
  addSaborFavUsuarioController,
  updateUsuarioController,
  deleteUsuarioController,
  deleteAdressUsuarioController,
  deleteSaborFavUsuarioController,
};
