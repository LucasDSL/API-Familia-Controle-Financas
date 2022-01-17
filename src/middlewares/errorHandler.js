const Errors = require("../errors")
module.exports = (erro, req, res, next) => {
  let status = 0
  if (erro instanceof Errors.CampoNaoEncontrado) {
    status = 400
  }

  res.status(status).send({
    nomeErro: erro.name,
    mensagem: erro.message,
    id: erro.id,
  })
}
