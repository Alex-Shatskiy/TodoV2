const express = require("express")
const app = express()
const port = 5000

app.get("/test", (req, res) => {
  res.send({ name: "alex", message: "work plz" })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
