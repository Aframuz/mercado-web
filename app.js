/*=============================================
=               IMPORT MODULES               =
=============================================*/
// 3rd party modules
const express = require("express")
const exphbs = require("express-handlebars")
// Local modules
const indexRoute = require("./routes/index-route")
// Core modules
const path = require("path")

/*=============================================
=                  VARIABLES                  =
=============================================*/
const PORT = process.env.PORT || 3000
const bootstrapDir = path.join(__dirname, "node_modules/bootstrap/dist/")
const jqueryDir = path.join(__dirname, "node_modules/jquery/dist/")

const app = express()

/*=============================================
=         MIDDLEWARE & APP SETTINGS           =
=============================================*/
app.use(express.static(path.join(__dirname, "public")))
app.use("/bootstrap", express.static(bootstrapDir))
app.use("/jquery", express.static(jqueryDir))

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

/*=============================================
=                   ROUTES                    =
=============================================*/
app.use("/", indexRoute)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
