const router = require("express")();

const ping = require("./ping.routes");

router.use("/ping", ping);

module.exports = router;