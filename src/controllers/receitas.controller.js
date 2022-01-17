const CampoNaoEncontrado = require("../errors/campoNaoEncontrado")
const NenhumItemEncontrado = require("../errors/nenhumItemEncontrado")
const ModelReceitas = require("../models").Receitas
class ReceitasController {
  static async cadastrarReceita(req, res, next) {
    const novaReceita = req.body
    try {
      const camposObrigatorios = ["descricao", "valor", "data"]
      camposObrigatorios.forEach((campo) => {
        if (!novaReceita[campo]) {
          throw new CampoNaoEncontrado(campo)
        }
      })
      const receitaAdicionada = await ModelReceitas.create(novaReceita)
      res.status(201).send(receitaAdicionada)
    } catch (error) {
      return next(error)
    }
  }

  static async listarReceitas(req, res, next) {
    try {
      const camposObrigatorios = ["id", "descricao", "valor", "data"]
      let receitas = await ModelReceitas.findAll({
        attributes: camposObrigatorios,
      })
      if (receitas.length === 0) {
        throw new NenhumItemEncontrado()
      }
      res.send(receitas)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ReceitasController
