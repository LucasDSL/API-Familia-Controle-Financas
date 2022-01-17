const Errors = require("../errors")
module.exports = (erro, req, res, next) => {
  let status = 0
  if (erro instanceof Errors.CampoNaoEncontrado) {
    status = 404
  }

  res.status(status).send({
    mensagem: erro.message,
    id: erro.id,
  })
}
