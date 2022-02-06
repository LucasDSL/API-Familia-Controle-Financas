const ModelDespesas = require("../models").Despesas
const ModelReceitas = require("../models").Receitas

class GeneralController {
  static async resumoMes(req, res, next) {
    const { ano, mes } = req.params
    try {
      const receitasMesAno = []
      const despesasMesAno = []
      // Buscando todas as depesas
      const despesas = await ModelDespesas.findAll({
        attributes: ["id", "descricao", "valor", "data", "categoria"],
      })
      // Separando as despesas do ano e mês pedidos
      despesas.forEach((despesa) => {
        console.log(despesa.data)
        const mesDespesa = new Date(despesa.data).getMonth() + 1
        const anoDespesa = new Date(despesa.data).getFullYear()
        console.log(mesDespesa, anoDespesa)
        if (mesDespesa === Number(mes) && anoDespesa === Number(ano)) {
          despesasMesAno.push(despesa)
        }
      })

      // Buscando todas as receitas
      const receitas = await ModelReceitas.findAll({
        attributes: ["id", "descricao", "valor", "data"],
      })

      // Separando as receitas do ano e mês pedidos 
      receitas.forEach((receita) => {
        const mesReceita = new Date(receita.data).getMonth() + 1
        const anoReceita = new Date(receita.data).getFullYear()
        if (mesReceita === Number(mes) && anoReceita === Number(ano)) {
          receitasMesAno.push(receita)
        }
      })


      const despesasCategoria = {}
      let totalReceitas = 0
      let totalDespesas = 0

      despesasMesAno.forEach((desp) => {
        const categoriaDespAtual = desp.categoria
        const valorDespAtual = desp.valor
        totalDespesas += Number(valorDespAtual)
        if (Object.keys(despesasCategoria).indexOf(categoriaDespAtual) === -1) {
          despesasCategoria[categoriaDespAtual] = 0
        }
        despesasCategoria[categoriaDespAtual] += valorDespAtual
      })
      receitasMesAno.forEach((rec) => {
        totalReceitas += Number(rec.valor)
      })
      const totalMes = totalReceitas - totalDespesas

      res.status(200).json({
        TotalReceitas: totalReceitas,
        TotalDespesas: totalDespesas,
        BalancoMensal: totalMes,
        DespesasPorCategoria: despesasCategoria,
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = GeneralController
