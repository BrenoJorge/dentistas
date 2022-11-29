const Item = require('../model/consultaModel');
const con = require('../model/DAO');

const consultasRead = (req, res) => {
    con.query(Item.consultas_read(), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            res.status(400).json(err).end()
    });
}

module.exports = {
    consultasRead
}