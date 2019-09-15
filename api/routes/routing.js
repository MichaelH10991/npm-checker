const express = require("express")
const router = express.Router()
const controller = require("./data.controller")
const app = express()

// serve the frontend by rendering the template
app.get("/", (req, res) => {
    res.render("index", { title: "Home Page" })
})

app.get("/about", (req, res) => {
    res.render("about", { title: "About Page" })
})

router.get("/registry/:name", controller.reg)

module.exports = router
