const jwt = require("jsonwebtoken");
const { findByIdUsuarioService } = require("../service/usuario.service");

module.exports = async (req, res, next) => {
  try {
    // recebe o headers da requisição
    const authHeaders = req.headers.authorization;

    if (!authHeaders) {
      //se authHeaders vazio é pq não tem token
      return res.status(401).send({ message: "Token não informado" });
    }

    const parts = authHeaders.split(" "); //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array

    if (parts.length != 2) {
      return res.status(401).send({ message: "Token inválido" });
    }

    const [schema, token] = parts; // schema recebe o primeiro elemento e o token recebe o segundo elemento do parts

    if (!/^Bearer$/i.test(schema)) {
      // testa se o schema contem a palavra  Barer
      return res.status(401).send({ message: "Token mal formado" });
    }

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) {
        res.status(500).send({ message: "Token inválido" });
      }

      try {
        const user = await findByIdUsuarioService(decoded.id);
        if (!user || !user.id) {
          res.status(401).send({ message: "Token inválido!" });
        }

        req.userId = decoded.id;

        return next();
      } catch (error) {}
    });
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
};
