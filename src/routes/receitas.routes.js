const { Router } = require("express")
const { ReceitasController } = require("../controllers")

const router = Router()
router.post("/receitas", ReceitasController.cadastrarReceita)
router.get("/receitas", ReceitasController.listarReceitas)
router.get("/receitas/:id", ReceitasController.pegarReceita)
router.delete("/receitas/:id", ReceitasController.deletarReceita)
module.exports = router
