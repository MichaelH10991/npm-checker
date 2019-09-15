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

app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routing middleware to interface with npm api
app.use("/api", require("./api/routes/routing"))

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})
