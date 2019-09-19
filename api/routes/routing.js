const express = require("express")
const router = express.Router()
const controller = require("./data.controller")
const app = express()

router.get("/registry/:name", controller.reg)

module.exports = router
