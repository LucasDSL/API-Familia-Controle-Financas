const CampoNaoEncontrado = require("../errors/campoNaoEncontrado")
const NenhumItemEncontrado = require("../errors/nenhumItemEncontrado")
const CampoInvalido = require("../errors/campoInvalido")
const ItemJaCadastrado = require("../errors/itemJaCadastrada")
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
      const mesReceitaAdicionar = new Date(novaReceita["data"]).getMonth() + 1
      const descricaoReceitaAdicionar = novaReceita["descricao"]

      const receitasExistentes = await ModelReceitas.findAll()
      receitasExistentes.forEach((receita) => {
        const mesReceita = new Date(receita["data"]).getMonth() + 1
        const descricaoReceita = receita["descricao"]
        if (
          mesReceita === mesReceitaAdicionar &&
          descricaoReceita === descricaoReceitaAdicionar
        ) {
          throw new ItemJaCadastrado()
        }
      })
      const receitaAdicionada = await ModelReceitas.create(novaReceita)
      return res.status(201).send(receitaAdicionada)
    } catch (error) {
      return next(error)
    }
  }

  static async listarReceitas(req, res, next) {
    try {
      const camposBusca = ["id", "descricao", "valor", "data"]
      const receitas = await ModelReceitas.findAll({
        attributes: camposBusca,
      })
      if (receitas.length === 0) {
        throw new NenhumItemEncontrado()
      }
      return res.status(200).json(receitas)
    } catch (error) {
      return next(error)
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
      return res.status(200).json(receita)
    } catch (error) {
      return next(error)
    }
  }

  static async deletarReceita(req, res, next) {
    const { id } = req.params
    try {
      const itemDeletado = await ModelReceitas.destroy({ where: { id: id } })
      if (itemDeletado) {
        return res.status(204).end()
      }
      throw new NenhumItemEncontrado()
    } catch (error) {
      return next(error)
    }
  }

  static async atualizarReceita(req, res, next) {
    const { id } = req.params
    const novosCampos = req.body
    const atributosNovoObjeto = Object.keys(novosCampos)
    const camposAtualizar = ["descricao", "valor", "data"]
    try {
      atributosNovoObjeto.forEach((campo) => {
        if (camposAtualizar.indexOf(campo) === -1) {
          throw new CampoInvalido(campo)
        }
      })
      const resultadoAtualizacao = await ModelReceitas.update(novosCampos, {
        where: { id: id },
      })
      if (resultadoAtualizacao) {
        return res.status(204)
      }
      throw new NenhumItemEncontrado()
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = ReceitasController
