const { Router } = require("express")
const {GeneralController} = require("../controllers/index")

const router = Router()
router.get("/resumo/:ano/:mes", GeneralController.resumoMes)
module.exports = router
