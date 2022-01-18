const { Router } = require("express")
const { DespesasController } = require("../controllers")

const router = Router()
router.get("/despesas", DespesasController.listarDespesas)
module.exports = router