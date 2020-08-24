var cors = require("cors");

import path from 'path'
import { Express } from "express";
import express from "express";
import bodyParser from "body-parser";


const app: Express = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.use("/", express.static(path.join(__dirname, '../../web/build')))
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../../web/build', 'index.html'))
})

export default app