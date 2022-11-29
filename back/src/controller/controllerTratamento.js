const Item = require('../model/tratamentoModel');
const con = require('../model/DAO');

const tratamentoRead = (req, res) => {
    con.query(Item.tratamento_read(), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            res.status(400).json(err).end()
    });
}

const tratamentoCreate = (req, res) => {
    con.query(Item.tratamento_create(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            res.status(400).json(err).end()
    });
}

const tratamentoUpdate = (req, res) => {
    con.query(Item.tratamento_update(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            res.status(400).json(err).end()
    });
}

const tratamentoDelete = (req, res) => {
    con.query(Item.tratamento_delete(req.body), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            res.status(400).json(err).end()
    });
}

const tratamentoView = (req, res) => {
    con.query(Item.tratamento_view(req.params), (err, result) => {
        if (err == null)
            res.status(201).json(result).end();
        else
            res.status(400).json(err).end()
    });
}

module.exports = {
    tratamentoRead,
    tratamentoCreate,
    tratamentoUpdate,
    tratamentoDelete,
    tratamentoView
}