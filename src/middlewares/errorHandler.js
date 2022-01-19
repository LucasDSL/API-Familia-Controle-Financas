const Errors = require("../errors")
module.exports = (erro, req, res, next) => {
  let status = 500
  if (
    erro instanceof Errors.CampoNaoEncontrado ||
    erro instanceof Errors.ItemJaCadastrado
  ) {
    status = 400
  }
  if (
    erro instanceof Errors.NenhumItemEncontrado ||
    erro instanceof Errors.CampoInvalido
  ) {
    status = 404
  }
  res.status(status).json({
    id: erro.id,
    nomeErro: erro.name,
    mensagem: erro.message,
  })
}
