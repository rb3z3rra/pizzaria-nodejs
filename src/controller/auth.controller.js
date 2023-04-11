const authService = require("../service/auth.service");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
  try {
    const {email, senha} = req.body;
    const user = await authService.loginService(email);

    if(!user){
      console.log("Usuário não encontrado");
        return res.status(400).send("Usuário não encontrado!");
    }

    const isPasswordValid = await bcrypt.compare(senha, user.senha); // await pois aguarda processamento de (des)encripyt

    if(!isPasswordValid){ // Se o resultado da comparação das senhas for false... 
        return res.status(400).send("Senha inválida");
    }

    const token = authService.generateToken(user.id); //gera o token referente ao id do user

    res.status(200).send({email,token});

  } catch (error) {
    console.log(`Erro: ${error}`);
    return res
      .status(400)
      .send({ message: "Erro não identificado, tente novamente!" });
  }
};

module.exports = {
  loginController,
};
