const express = require("express")
const router = express.Router()
const controller = require("./data.controller")

router.get("/registry/:name", controller.reg)

module.exports = router
