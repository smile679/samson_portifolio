const express = require("express")
require("dotenv").config()
const cors = require("cors")

const app = express()


app.use(express.json())
app.use(cors())


app.listen(PORT, ()=>{
  console.log(`server started on port ${PORT}`);
})