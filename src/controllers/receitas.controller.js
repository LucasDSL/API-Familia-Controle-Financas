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
      const camposBusca = ["id", "descricao", "valor", "data"]
      let receitas = await ModelReceitas.findAll({
        attributes: camposBusca,
      })
      if (receitas.length === 0) {
        throw new NenhumItemEncontrado()
      }
      res.status(200).json(receitas)
    } catch (error) {
      next(error)
    }
  }

  static async pegarReceita(req, res, next) {
    const { id } = req.params
    try {
      const receita = await ModelReceitas.findOne({
        where: { id: id },
        attributes: ["id", "descricao", "valor", "data"],
      })
      if (!receita) {
        throw new NenhumItemEncontrado()
      }
      res.status(200).json(receita)
    } catch (error) {
      next(error)
    }
  }

  static async deletarReceita(req, res, next) {
    const { id } = req.params
    try {
      const itemDeletado = await ModelReceitas.destroy({ where: { id: id } })
      if(itemDeletado) {
        res.status(204).end()
      }
      throw new NenhumItemEncontrado()
    } catch (error) {
      next(error)
    }
  }
}

module.exports = ReceitasController
