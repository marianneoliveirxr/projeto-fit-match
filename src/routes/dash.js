var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/buscarDadosGrafico/:id_usuario", function (req, res) {
    dashController.buscarDadosGrafico(req, res);
});

router.get("/buscarPesoAtual/:id_usuario", function (req, res) {
    dashController.buscarPesoAtual(req, res);
});

router.post("/atualizarPeso", function (req, res) {
    dashController.atualizarPeso(req, res);
});

router.get("/buscarTreinoDoDia/:id_usuario", function (req, res) {
    dashController.buscarTreinoDoDia(req, res);
});

router.get("/diferencaPesoMeta/:id_usuario", function (req, res) {
    dashController.diferencaPesoMeta(req, res);
});

module.exports = router;