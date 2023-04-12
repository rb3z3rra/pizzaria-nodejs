const mongoose = require("mongoose");
function connectToDatabase() {
  mongoose
    .connect(process.env.URLDATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MONGODB CONECTADO");
    })
    .catch((error) => {
      return console.log(`Erro na conexão com o banco: ${error}`);
    });
}

module.exports = connectToDatabase;
