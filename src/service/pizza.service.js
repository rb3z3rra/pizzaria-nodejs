const Pizza = require("../model/Pizza");

const findByIdPizzaService = (id) => {
  return Pizza.findById(id);
};

const findAllPizzaService = (limit, offset) => {
  return Pizza.find().limit(limit).skip(offset);
};

const createPizzaService = (body) => {
  return Pizza.create(body);
};

const updatePizzaService = (id, body) => {
  return Pizza.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deletePizzaService = (id) => {
  return Pizza.findByIdAndRemove(id);
};

const addIngredientePizzaService = (id, ingrediente) => {
    return Pizza.findByIdAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                ingrediente: {
                    _id: ingrediente._id,
                    createdAt: ingrediente.createdAt
                }
            }
        },
        {
            rawResult: true,
            returnDocument: "after"
        }
    )
};

const deleteIngredientePizzaService = (id, ingrediente) => {
    return Pizza.findByIdAndUpdate(
        {
            _id: id
        },
        {
            $pull: {
                ingrediente: {
                    _id: ingrediente._id,
                }
            }
        },
        {
            rawResult: true,
            returnDocument: "after"
        }
    )
};const addCategoriaPizzaService = (id, categoria) => {
    return Pizza.findByIdAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                categoria: {
                    _id: categoria._id,
                    createdAt: categoria.createdAt
                }
            }
        },
        {
            rawResult: true,
            returnDocument: "after"
        }
    )
};

const deleteCategoriaPizzaService = (id, categoria) => {
    return Pizza.findByIdAndUpdate(
        {
            _id: id
        },
        {
            $pull: {
                categoria: {
                    _id: categoria._id,
                }
            }
        },
        {
            rawResult: true,
            returnDocument: "after"
        }
    )
};

module.exports = {
  findByIdPizzaService,
  findAllPizzaService,
  createPizzaService,
  updatePizzaService,
  deletePizzaService,
  addIngredientePizzaService,
  deleteIngredientePizzaService,
  addCategoriaPizzaService,
  deleteCategoriaPizzaService
};
