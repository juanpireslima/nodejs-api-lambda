const pingService = new (require('../services/ping.services'))();

class PingController {
	getPing(req, res) {
		const ping = pingService.getPing();

		res.status(200).json({message: ping});
	}
}

module.exports = PingController;