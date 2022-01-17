class CampoJaCadastrado extends Error {
  constructor(campo) {
    const mensagem = `O campo ${campo} já foi cadastrado no banco de dados.`
    super(campo)
    this.id = 4
    this.name = "CampoJaCadastrado"
  }
}

module.exports = CampoJaCadastrado
