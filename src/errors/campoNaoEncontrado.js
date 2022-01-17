class CampoNaoEncontrado extends Error {
  constructor(campo) {
    const mensagem = `É necessário preencher os campos ["descricao", "valor", "data"]\n
    O campo ${campo} não foi preenchido!`
    super(mensagem)
    this.name = "CampoNaoEncontrado"
    this.id = 1
  }
}

module.exports = CampoNaoEncontrado
