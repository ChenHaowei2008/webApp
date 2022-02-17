const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const fs = require('fs')
const app = express()
app.get('*', (req, res) => {
	res.sendFile(__dirname + "/pages/" + req.originalUrl)
})
app.listen(PORT)
