const { Router } = require("express")
const { ReceitasController } = require("../controllers")

const router = Router()
router.post("/receitas", ReceitasController.cadastrarReceita)
router.get("/receitas", ReceitasController.listarReceitas)
router.get("/receitas/:id", ReceitasController.pegarReceita)
router.delete("/receitas/:id", ReceitasController.deletarReceita)
router.put("/receitas/:id", ReceitasController.atualizarReceita)
module.exports = router
