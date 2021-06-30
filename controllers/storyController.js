const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Story
          .find(req.query)
          .then(dbStory => res.json(dbStory))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req,res) {
        db.Story
          .findById(req.params.id)
          .then(dbStory => res.json(dbStory))
          .catch(err => res.status(422).json(err));
      },
}