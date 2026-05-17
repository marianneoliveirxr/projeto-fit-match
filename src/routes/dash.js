var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/buscarDadosGrafico", function (req, res) {
    dashController.buscarDadosGrafico(req, res);
});

module.exports = router;