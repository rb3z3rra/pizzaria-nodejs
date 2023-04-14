const Sacola = require("../model/Sacola");

const createSacolaService = (body) => {
    return Sacola.create(body);
}; 

const findByIdSacolaService = (id) => {
    return Sacola.findById(id);
};

const findAllSacolaService = () => {
    return Sacola.find();
};

const updateSacolaService = (id, body) => {
    return Sacola.findByIdAndUpdate(id, body, {returnDocument: "after"});
};

const deleteSacolaService = (id) => {
    return Sacola.findByIdAndRemove(id);
};

module.exports = {
    createSacolaService,
    findByIdSacolaService,
    findAllSacolaService,
    updateSacolaService,
    deleteSacolaService
}