const express = require('express')
const homeapi = require("../Api/Home")

const home = express.Router()
home.route("/home").get(homeapi.apicontroller);

module.exports = home;