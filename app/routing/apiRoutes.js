let allFriends = require('../data/friends');

let apiRoutes = {
	getRequest: function(req, res) {
		res.json(allFriends);
	},
	postRequest: function(req, res) {
		let newFriend = req.body;
		let friendCompare = [];

		for (var i = 0; i < allFriends.length; i++) {
			let totalScore = 0;
			for (var j = 0; j < allFriends[i].scores.length; j++) {
				let score = newFriend.scores[j] - parseInt(allFriends[i].scores[j]);
				totalScore += Math.abs(score);
			};
			let friend = {
				name: allFriends[i].name,
				photo: allFriends[i].photo,
				difference: totalScore
			};
			friendCompare.push(friend);
		};

		friendCompare.sort( (a, b) => {
			return a.difference - b.difference;
		});
		allFriends.push(newFriend);
		res.json(friendCompare[0]);
	}
};

module.exports = apiRoutes;