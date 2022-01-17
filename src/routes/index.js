const express = require("express")
const cors = require("cors")
const rotasReceita = require("./receitas.routes")
const errorHandler = require("../middlewares/errorHandler")

module.exports = (app) => {
  app.use(cors())
  app.use(express.json())
  app.use(rotasReceita)
  app.use(errorHandler)
}
