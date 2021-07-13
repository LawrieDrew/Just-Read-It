const Account = require("../models/account");
const passport = require('passport');

module.exports = {
	checkAuth: function (req, res) {
		const { user } = req.session.passport
		if (user) {
			Account.findOne({ username: user })
				.then(userData => {
					const { _id, username, level } = userData;
					return res.status(200).json({
						id: _id,
						username,
						level,
						authenticated: true
					})
				})
		} else {
			return res.status(401).json({
				error: 'User is not authenticated',
				authenticated: false
			});
		}
	},
	register: async function (req, res, next) {
		Account.register(new Account({ username: req.body.username }), req.body.password, (err, account) => {
			if (err) {
				return res.status(500).send({ error: err.message });
			}
			passport.authenticate('local')(req, res, () => {
				req.session.save((err) => {
					if (err) {
						//ToDo:log the error and look for an existing user
						return next(err);
					}
					const { _id, username, level } = account;
					return res.status(200).json({
						id: _id,
						username,
						level,
						authenticated: true
					});
				});
			});
		});
	},
	login: async function (req, res, next) {
		if (!req.session.passport.user) {
			return false;
		}
		const userData = await Account.findOne({ username: req.session.passport.user });
		req.session.save((err) => {
			if (err) {
				return next(err);
			}
			const { _id, username, level } = userData;
			return res.status(200).json({
				id: _id,
				username,
				level,
				authenticated: true
			})
		});
	},
	logout: function (req, res, next) {
		req.logout();
		req.session.save((err) => {
			if (err) {
				return next(err);
			}
			res.status(200).send('OK');
		});
	},
	update: function(req, res) {
		Account
		  .findOneAndUpdate({ _id: req.params.id }, req.body)
		  .then(dbModel => res.json(dbModel))
		  .catch(err => res.status(422).json(err));
	  },
	  findById: function(req,res) {
        Account
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
};