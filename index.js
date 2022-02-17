const express = require('express')
const PORT = process.env.PORT || 5000
const fs = require('fs')
const app = express()
app.get('*', (req, res) => {
	if(!fs.existsSync(__dirname + "/pages" + req.originalUrl)) return res.send(`The page ${__dirname + "/pages" + req.originalUrl} does not exist`)
	res.sendFile(__dirname + "/pages" + req.originalUrl)
})
app.listen(PORT)
