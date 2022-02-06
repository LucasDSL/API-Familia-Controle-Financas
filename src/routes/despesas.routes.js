const { Router } = require("express")
const { DespesasController } = require("../controllers")

const router = Router()
router.get("/despesas", DespesasController.listarDespesas)
router.get("/despesas/:id", DespesasController.mostraDespesa)
router.post("/despesas", DespesasController.cadastrarDespesa)
router.delete("/despesas/:id", DespesasController.deletarDespesa)
router.put("/despesas/:id", DespesasController.atualizarDespesa)
router.get("/despesas/:ano/:mes", DespesasController.listaMes)
module.exports = router
