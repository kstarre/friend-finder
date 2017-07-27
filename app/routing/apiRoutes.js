let allFriends = require('../data/friends');

let apiRoutes = {
	getRequest: function(req, res) {
		res.json(allFriends);
	},
	postRequest: function(req, res) {
		let newFriend = req.body;
		allFriends.push(newFriend);
		res.json(true);
	}
};

module.exports = apiRoutes;