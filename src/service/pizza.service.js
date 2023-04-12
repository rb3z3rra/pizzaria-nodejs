const Pizza = require("../model/Pizza");

const findByIdPizzaService = (id) => {
  return Pizza.findById(id);
};

const findAllPizzaService = () => {
  return Pizza.find();
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
            rawResult: true
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
            rawResult: true
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
            rawResult: true
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
            rawResult: true
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
