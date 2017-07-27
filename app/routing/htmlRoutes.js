const path = require("path");

let htmlRoutes = {
	home: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	},
	survey: function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	}
};

module.exports = htmlRoutes;