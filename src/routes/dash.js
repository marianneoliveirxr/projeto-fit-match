var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/buscarDadosGrafico/:id_usuario", function (req, res) {
    dashController.buscarDadosGrafico(req, res);
});

router.get("/buscarPesoAtual/:id_usuario", function (req, res) {
    dashController.buscarPesoAtual(req, res);
});

module.exports = router;