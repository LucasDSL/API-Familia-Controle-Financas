const Errors = require("../errors")
module.exports = (erro, req, res, next) => {
  let status
  if (erro instanceof Errors.CampoNaoEncontrado) {
    status = 400
  }
  if (erro instanceof Errors.NenhumItemEncontrado) {
    status = 404
  }
  res.status(status).send({
    id: erro.id,
    nomeErro: erro.name,
    mensagem: erro.message,
  })
}
