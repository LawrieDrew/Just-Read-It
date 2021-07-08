const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require ("../models/user");
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES;

const signJWT = (id) => {
  return jwt.sign({id}, JWT_SECRET,{
    expiresIn: JWT_EXPIRES
  })
}

const sendToken = (user, statusCode, req, res) => {
  const token = signJWT(user._id)
  res.cookie('jwt', token, {
    expires: new Date(Date.now() + JWT_EXPIRES),
    secure: true,
    httpOnly: true,
  });
  user.password = undefined;

  res.status(status).json({
    status: "success",
    token, 
    user
  })
}

const encryptPass = async (password) => {
  return await bcrypt.hash(password, 12)
}

module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req,res) {
    db.User
      .findById(req.params.id)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  create: function  (req, res) {
    const {email, username, password, name} = req.body;
    const pw = encryptPass(password)
    try {
      const newUser = User.create({
        email,
        password: pw,
        name,
        username
      });
      sendToken(newUser, 201, req, res);
    } catch (err) {
      res.status(401).json(err.message);
    }
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  }
}