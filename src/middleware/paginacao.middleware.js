module.exports = (req, res, next) => {
    let { limit, offset } = req.query;
  
    limit = Number(limit); // Só aceita tipo Number
    offset = Number(offset); //Só aceita tipo Number
  
    !limit ? (limit = 10) : null; // se não for definido limite, a let limit recebe 3, se definido recebe nada
    !offset ? (offset = 0) : null; //se não definido offset, a let offset recebe 0, se definido recebe nada
  
    req.query.limit = limit;
    req.query.offset = offset;
  
    return next();
  };
   