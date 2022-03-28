import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";
import Router from "./router/router.js";
const app = express()


app.use(cors())
app.use(bodyParser.json())
app.use('/', Router)




const port = process.env.PORT || 8000




app.listen(port, () => {
    console.log('port is running at', port)
})
