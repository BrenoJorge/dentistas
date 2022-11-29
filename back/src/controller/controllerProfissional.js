const Item = require('../model/profissionalModel');
const con = require('../model/DAO');

const profissionaisRead = (req, res) => {
    con.query(Item.profissionais_read(), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            res.status(400).json(err).end()
    });
}

module.exports = {
    profissionaisRead
}