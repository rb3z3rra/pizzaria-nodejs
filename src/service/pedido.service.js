const Pedido = require("../model/Pedido");

const findByIdPedidoService = (id) => {
    return Pedido.findById(id);
  };
  
  const findAllPedidoService = () => {
    return Pedido.find();
  };
  
  const createPedidoService = (body) => {
    return Pedido.create(body);
  };
  
  const deletePedidoService = (id) => {
    return Pedido.findByIdAndRemove(id);
  };
  
  const updateStatusPedidoService = (id) => {
    return Pedido.findOneAndUpdate({ _id: id }, { $set: { concluido: true } });
  };
  
  module.exports = {
    findByIdPedidoService,
    findAllPedidoService,
    createPedidoService,
    deletePedidoService,
    updateStatusPedidoService,
  };