const express = require('express')
const app = express()
const path = require('path')
const handlebars = require('express-handlebars')
const bodyParser = require("body-parser")

const PORT = 3000

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// serve the frontend by rendering the template
app.get("/", (req, res) => {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.render("about")
})

// Routing middleware to interface with npm api
app.use("/api", require("./api/routes/routing"))

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})
