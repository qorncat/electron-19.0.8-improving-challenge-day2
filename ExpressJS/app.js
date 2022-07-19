const express = require('express')
const app = express()
const functions = require('../functions')
app.set("view engine", 'ejs')
app.use("/styles",express.static(__dirname + "/styles"))

app.get("/", (req, res) => {
	res.render(__dirname + "/pages/index")
})

app.listen(functions.port(), () => {
	console.log(`process started on port ${functions.port()}!`)
})