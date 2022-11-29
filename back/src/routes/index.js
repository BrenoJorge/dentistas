const express = require('express');
const router = express.Router();

const Consulta = require("../controller/controllerConsulta");
const Profissional = require("../controller/controllerProfissional");
const Tratamento = require("../controller/controllerTratamento");

router.get("/profissionais/read/", Profissional.profissionaisRead);
router.get("/consultas/read", Consulta.consultasRead);
router.get( "/tratamentos/read/", Tratamento.tratamentoRead);
router.get( "/tratamentos/profissional/:id", Tratamento.tratamentoView);
router.post("/tratamentos/create/", Tratamento.tratamentoCreate);
router.put("/tratamentos/update/", Tratamento.tratamentoUpdate);
router.delete("/tratamentos/delete/", Tratamento.tratamentoDelete);

module.exports = router;