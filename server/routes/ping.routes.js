const router = require("express");
const pingRoutes = router();

const pingController = new (require('../controllers/ping.controller'))();

pingRoutes.get("", pingController.getPing);

module.exports = pingRoutes;