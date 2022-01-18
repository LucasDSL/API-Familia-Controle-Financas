const tableDespesas = require("../models").Despesas

class DespesasController {
  static async listarDespesas(req, res) {
    try {
      const camposBusca = ["id", "descricao", "valor", "data"]
      const despesas = await tableDespesas.findAll({
        attributes: camposBusca,
      })

      if (despesas.length === 0) {
        throw new NenhumItemEncontrado()
      }
      return res.status(200).json(despesas)
    } catch (error) {
      return next(error)
    }
  }
}

module.exports = DespesasController
