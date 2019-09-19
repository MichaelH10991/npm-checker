const express = require('express')
const app = express()
const path = require('path')
const hbs = require('express-handlebars')
const bodyParser = require("body-parser")

const PORT = 3000

app.engine('hbs', hbs({
    extname: 'hbs',
    defaultView: 'default',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/mainLayout'),
    partialsDir: path.join(__dirname, 'views/partials')
}))

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// serve the frontend by rendering the template
app.get("/", (req, res) => {
    res.render("index", { title: "Home Page" })
})

app.get("/about", (req, res) => {
    res.render("about", { title: "About Page" })
})

// Routing middleware to interface with npm api
app.use("/api", require("./api/routes/routing"))

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})
