const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const path = require("path");

const currentVersion = "v.0.1.0";

app.use('/v.0.1.0', express.static(path.join(__dirname, 'client', currentVersion)))
app.use('/', express.static(path.join(__dirname, 'client', currentVersion)))
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', currentVersion, 'index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
