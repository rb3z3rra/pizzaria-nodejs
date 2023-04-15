const Bebida = require("../model/Bebida");

const createBebidaService = (body) => {
  return Bebida.create(body);
};

const findByIdBebidaService = (id) => {
  return Bebida.findById(id);
};

const findAllBebidaService = (limit, offset) => {
  return Bebida.find().limit(limit).skip(offset);
};

const updateBebidaService = (id, body) => {
  return Bebida.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteBebidaService = (id) => {
  return Bebida.findByIdAndRemove(id);
};

module.exports = {
  createBebidaService,
  findByIdBebidaService,
  findAllBebidaService,
  updateBebidaService,
  deleteBebidaService,
};
