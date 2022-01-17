const express = require("express")
const cors = require("cors")
const rotasReceita = require("./receitas.routes")

module.exports = (app) => {
  app.use(cors())
  app.use(express.json())
  app.use(rotasReceita)
}
