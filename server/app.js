const express = require("express")
const router = require("./routes")
const port = 5000

const app = express()
app.use(express.json())
app.use("/", router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
