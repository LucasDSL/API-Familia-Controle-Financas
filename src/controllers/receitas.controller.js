const CampoNaoEncontrado = require("../errors/campoNaoEncontrado")
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
}

module.exports = ReceitasController
